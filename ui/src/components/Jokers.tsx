import type { Joker, RarityT } from "../types";
import { useInView } from "react-intersection-observer";
import { capitalize } from "../lib/misc";
import { JokerType } from "../types";
import { Checkbox } from "./Checkbox";
import { Earn, getTypeHtml } from "./Enhancements";
import { useFetch } from "../lib/query";
import { useEffect, useState } from "react";
import { apiRoutes } from "../siteConfig";

export const Jokers = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { ref, inView } = useInView({ threshold: 0 });
  const { data: jokersData, refetch } = useFetch<any>(apiRoutes.jokers, {
    currentPage,
    itemsPerPage: 10,
  });
  const [data, setData] = useState<Joker[]>([]);
  const title = "Jokers";
  const dataScheme = [
    "Joker",
    "Effect",
    "Cost",
    "Rarity",
    "Unlock Requirement",
    "Type",
  ];

  useEffect(() => {
    if (jokersData?.jokers) {
      setData((data) => [...data, ...jokersData.jokers]);
    }
  }, [jokersData]);

  const CardImage = ({ src, alt }: { src: string; alt: string }) => {
    return <img className="mx-auto w-24 h-32" src={src} alt={alt} />;
  };

  const InsecureAttrTd = ({ value }: { value: string | TrustedHTML }) => {
    return (
      <td
        className="block md:table-cell px-6"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    );
  };

  const RarityComponent = ({ value }: { value: RarityT }) => {
    return (
      <td className="block md:table-cell px-6">
        <span id={value} className="bubble">
          {capitalize(value)}
        </span>
      </td>
    );
  };

  const jokerTypes: any = {
    "+c": "Chips Jokers",
    "+m": "Additive Mult Jokers",
    Xm: "Multiplicative Mult Jokers",
    "++": "Chips & Additive Mult Jokers",
    "!!": "Effect Jokers",
    "...": "Retrigger Jokers",
    "+$": "Economy Jokers",
  };

  useEffect(() => {
    if (inView) {
      setCurrentPage(currentPage + 1);
      refetch();
    }
  }, [inView]);

  return data && data.length ? (
    <div className="flex flex-col w-full min-h-screen space-y-20">
      <ul className="space-x-8">
        {Object.keys(jokerTypes).map((jtype: any) => (
          <li className="space-x-2 inline-block float-left text-xs text-light-secondary dark:text-dark-gray">
            <span dangerouslySetInnerHTML={{ __html: getTypeHtml(jtype) }} />
            <span>{jokerTypes[jtype]}</span>
          </li>
        ))}
      </ul>
      <div className="text-center md:text-left">
        <h1 className="text-lg font-bold text-light-secondary dark:text-dark-primary">
          List of {title} ({data.length})
        </h1>
      </div>
      <table className="table-auto text-light-secondary dark:text-dark-primary w-full relative rounded-xl bg-light-gray dark:bg-dark-secondary">
        <thead className="hidden md:table-header-group">
          <tr>
            {[...dataScheme, "Checklist"].map((_title: string, idx: number) => (
              <th
                className="text-dark-gray sticky top-0 bg-light-gray dark:bg-dark-secondary h-20 z-10 px-10 rounded-xl"
                key={idx}
              >
                {_title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(
            (
              {
                Image,
                Name,
                Effect,
                Cost,
                Rarity,
                UnlockRequirement,
                Type,
              }: Joker,
              idx: number
            ) => (
              <tr key={idx} className="block md:table-row">
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <CardImage src={Image} alt={Name} />
                  <p
                    className="mx-auto mt-2 md:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                    dangerouslySetInnerHTML={{ __html: Name }}
                  />
                </td>
                <InsecureAttrTd value={Effect} />
                <InsecureAttrTd value={Earn(Cost as string)} />
                <RarityComponent value={Rarity} />
                <InsecureAttrTd value={UnlockRequirement} />
                <InsecureAttrTd value={getTypeHtml(Type as JokerType)} />
                <td className="block md:table-cell">
                  <Checkbox checked={false} />
                </td>
              </tr>
            )
          )}
        </tbody>
        <div ref={ref}></div>
      </table>
    </div>
  ) : null;
};
