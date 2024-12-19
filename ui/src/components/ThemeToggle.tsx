import { AvailableThemes } from "../types";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { capitalize } from "../lib/misc";
import { Check, Moon, Sun } from "./icons";

export function ThemeToggle() {
  const [currentTheme, setTheme] = useTheme();
  const themes: AvailableThemes[] = ["light", "dark"];
  const [displayThemesDropdown, setDisplayThemesDropdown] =
    useState<boolean>(false);

  const hdlSetTheme = (theme: AvailableThemes) => {
    setDisplayThemesDropdown(false);
    setTheme(theme);
  };

  const DisplayTheme = ({
    theme,
    checked,
  }: {
    theme: AvailableThemes;
    checked: boolean;
  }) => {
    return (
      <>
        {theme === "light" ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
        <span className="ml-2 hidden md:inline-block">{capitalize(theme)}</span>
        {checked ? (
          <span className="ms-3">
            <Check className="w-2 h-2" />
          </span>
        ) : null}
      </>
    );
  };

  return currentTheme ? (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        onClick={() => setDisplayThemesDropdown(!displayThemesDropdown)}
        className="text-light-primary hover:bg-light-gray focus:outline-none font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center inline-flex items-center dark:bg-none dark:hover:bg-dark-secondary select-none justify-center"
        type="button"
      >
        <DisplayTheme theme={currentTheme} checked={false} />
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
          {themes.map((theme: AvailableThemes, idx: number) => (
            <li key={idx}>
              <button
                onClick={() => hdlSetTheme(theme)}
                className="rounded-lg flex items-center justify-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full outline-none"
              >
                <DisplayTheme theme={theme} checked={currentTheme === theme} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
}
