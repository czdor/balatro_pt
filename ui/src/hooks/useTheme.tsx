import { useEffect, useState } from "react";
import { defaultTheme } from "../siteConfig";
import { AvailableThemes } from "../types";

export const useTheme = () => {
  const [theme, _setTheme] = useState<AvailableThemes | null>(null);

  const removeThemeClasses = () => {
    ["light", "dark"].forEach((theme: string) => {
      const htmlElementClasses = document.documentElement.classList;
      if (htmlElementClasses.contains(theme)) {
        document.documentElement.classList.remove(theme);
      }
    });
  };

  const setTheme = (theme: AvailableThemes) => {
    // * update local storage
    localStorage.setItem("theme", theme);

    // * remove previous theme classes (if any) and set new
    removeThemeClasses();
    document.documentElement.classList.add(theme);

    // * update theme state
    _setTheme(theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as AvailableThemes;

    if (savedTheme?.length) {
      _setTheme(savedTheme);

      removeThemeClasses();
      document.documentElement.classList.add(savedTheme);

      return;
    }

    // * if no previously saved theme use default
    _setTheme(defaultTheme);
    removeThemeClasses();
    document.documentElement.classList.add(defaultTheme);
  }, []);

  return [theme, setTheme] as const;
};
