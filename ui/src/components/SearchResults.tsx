import { Fragment, memo } from "react";
import { useTranslation } from "react-i18next";

export const SearchResults = memo(({ results }: { results: any }) => {
  const { t } = useTranslation();

  return (
    <div className="py-4 w-full rounded-xl bg-light-white dark:bg-dark-secondary mt-3 absolute min-h-20 z-40 px-4 text-left shadow-lg">
      {results && results ? (
        <ul className="list-none overflow-y-scroll max-h-96 search-scrollbar dark:search-scrollbar-dark">
          {Object.keys(results).map((title: string, idx: number) => (
            <li className="block">
              {idx === 0 ? (
                <p className="font-semibold mb-6">{title}</p>
              ) : (
                <p className="font-semibold my-6">{title}</p>
              )}

              <ul className="space-y-2">
                {results[title].map((result: any) => {
                  const item = Object.keys(result)[0];

                  return (
                    <li className="flex items-center">
                      {title === "Tags" ? (
                        <img
                          className="mr-4 w-12 h-12"
                          src={result[item].image}
                          alt={result[item].value}
                        />
                      ) : (
                        <img
                          className="mr-4 w-14 h-20"
                          src={result[item].image}
                          alt={result[item].value}
                        />
                      )}
                      <p>{result[item].value}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <Fragment>
          <p className="font-semibold mb-4">{t("recentSearchesMessage")}</p>
          <span>{t("noRecentSearchesMessage")}</span>
        </Fragment>
      )}
    </div>
  );
});
