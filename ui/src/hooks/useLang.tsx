import { useEffect, useState } from "react";
import { availableLanguages, defaultSelectedLang } from "../siteConfig";
import { Language } from "../types";
import { useTranslation } from "react-i18next";

export const useLang = () => {
  const [selectedLang, _setLang] = useState<Language>();
  const { i18n } = useTranslation();

  const setLang = (lang: Language) => {
    // * update local storage
    localStorage.setItem("lang", lang.abbr);

    // * update i18n lang
    i18n.changeLanguage(lang.abbr);

    // * update theme state
    _setLang(lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang?.length) {
      const language = availableLanguages.find(
        (lang) => lang.abbr === savedLang
      );

      if (!language) return;

      setLang(language);

      return;
    }

    // * if no previously saved theme use default
    setLang(defaultSelectedLang);
  }, []);

  return [selectedLang, setLang] as const;
};
