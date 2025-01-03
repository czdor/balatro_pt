import React from "react";
import { links, devName, appName } from "../siteConfig";
import { capitalize } from "../lib/misc";
import { useTranslation } from "react-i18next";

export const Footer: React.FC<any> = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-light-primary dark:text-dark-primary text-center select-none text-sm font-light my-10">
      <p className="text-center text-sm leading-loose">
        © {capitalize(appName)} 2024. {t("builtBy")}{" "}
        <a
          href={links.githubProfile}
          target="_blank"
          rel="noreferrer"
          className="font-sm underline underline-offset-4"
        >
          {devName}
        </a>
        .
      </p>
    </footer>
  );
};
