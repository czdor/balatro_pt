import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { Check, Languages } from "./icons";
import { capitalize } from "../lib/misc";
import { Language } from "../types";
import { availableLanguages } from "../siteConfig";
import { useLang } from "../hooks/useLang";

export const LangToggle = () => {
  const [selectedLang, setLang] = useLang();
  const [displayThemesDropdown, setDisplayThemesDropdown] =
    useState<boolean>(false);
  const ref: any = useClickOutside(() => setDisplayThemesDropdown(false));

  const DisplayLang = ({
    lang,
    checked,
  }: {
    lang: string;
    checked: boolean;
  }) => {
    return (
      <>
        <span className="ml-2 inline-block text-sm">{capitalize(lang)}</span>
        {checked ? (
          <span className="ms-3">
            <Check className="w-2 h-2" />
          </span>
        ) : null}
      </>
    );
  };

  const hdlSetLang = (lang: Language) => {
    setDisplayThemesDropdown(false);
    setLang(lang);
  };

  return (
    <div ref={ref}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        onClick={() => setDisplayThemesDropdown(!displayThemesDropdown)}
        className="text-light-primary hover:bg-light-gray focus:outline-none font-medium rounded-lg text-sm py-1.5 text-center inline-flex items-center dark:bg-none dark:hover:bg-dark-secondary select-none justify-center w-24"
        type="button"
      >
        <Languages className="w-4 h-4" />
        <span className="ml-2 font-semibold text-xs">
          {selectedLang?.abbr?.toUpperCase()}
        </span>
        <svg
          className="w-2 h-2 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={`bg-light-white dark:bg-dark-background ${
          displayThemesDropdown ? "" : "hidden"
        } divide-y divide-gray-100 rounded-lg shadow-xl w-full`}
      >
        <ul
          className="p-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {availableLanguages.map(({ lang, abbr }, idx: number) => (
            <li key={idx}>
              <button
                onClick={() => hdlSetLang(availableLanguages[idx])}
                className="rounded-md flex items-center justify-left p-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full outline-none"
              >
                <DisplayLang
                  lang={lang}
                  checked={abbr === selectedLang?.abbr}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
