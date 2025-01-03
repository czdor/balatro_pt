import { useTranslation } from "react-i18next";
import { getTypeHtml } from "./Enhancements";

export const InfoJokerTypes = () => {
  const { t } = useTranslation();

  const jokerTypes: { [key: string]: string } = {
    "+c": t("+c"),
    "+m": t("+m"),
    Xm: t("Xm"),
    "++": t("++"),
    "!!": t("!!"),
    "...": t("..."),
    "+$": t("+$"),
  };

  return (
    <div className="flex justify-center items-center">
      <ul className="md:space-x-8 text-left">
        {Object.keys(jokerTypes).map((jtype: any, idx: number) => (
          <li
            key={idx}
            className="space-x-2 text-left block md:inline-block text-xs text-light-secondary dark:text-dark-gray"
          >
            <span dangerouslySetInnerHTML={{ __html: getTypeHtml(jtype) }} />
            <span>{jokerTypes[jtype]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
