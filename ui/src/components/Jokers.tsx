import type { Joker, WeightedAttr } from "../types";
// import { useInView } from "react-intersection-observer";
import { capitalize } from "../lib/misc";
import { JokerType } from "../types";
import { Checkbox } from "./Checkbox";
import { Earn, getTypeHtml } from "./Enhancements";
import { useFetch } from "../lib/query";
import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../siteConfig";
import {
  ItemsContainer,
  ItemsTable,
  ItemsTitle,
  sortAsc,
  sortDesc,
  SortingStateTypeMap,
} from "./Items";

export const Jokers = () => {
  // const { ref, inView } = useInView({ threshold: 0 });
  const dataScheme = [
    "Joker",
    "Effect",
    "Cost",
    "Rarity",
    "Requirement",
    "Type",
  ];

  const defaultSortingStates = new Array(dataScheme.length).fill(
    SortingStateTypeMap.Neutral
  );

  const [sortingStates, setSortingStates] = useState(defaultSortingStates);

  const { data: jokersData, isSuccess } = useFetch<any>(apiRoutes.jokers);

  const [originalData, setOriginalData] = useState<Joker[]>([]);
  const [data, setData] = useState<Joker[]>([]);
  const title = "Jokers";

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (jokersData?.jokers) {
      setOriginalData((data) => [...data, ...jokersData.jokers]);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (jokersData?.jokers) {
      setData((data) => [...data, ...jokersData.jokers]);
    }
  }, [jokersData]);

  const CardImage = ({ src, alt }: { src: string; alt: string }) => {
    return <img className="mx-auto w-24 md:h-32" src={src} alt={alt} />;
  };

  const InsecureAttrTd = ({ value }: { value: string | TrustedHTML }) => {
    return (
      <td
        className="block md:table-cell px-6"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    );
  };

  const RarityComponent = ({ rarity }: { rarity: WeightedAttr }) => {
    return (
      <td className="block md:table-cell px-6">
        <span id={rarity.value} className="bubble">
          {capitalize(rarity.value)}
        </span>
      </td>
    );
  };

  const jokerTypes: { [key: string]: string } = {
    "+c": "Chips Jokers",
    "+m": "Additive Mult Jokers",
    Xm: "Multiplicative Mult Jokers",
    "++": "Chips & Additive Mult Jokers",
    "!!": "Effect Jokers",
    "...": "Retrigger Jokers",
    "+$": "Economy Jokers",
  };

  // useEffect(() => {
  //   if (inView) {
  //     setCurrentPage(currentPage + 1);
  //     refetch();
  //   }
  // }, [inView]);

  const InfoJokerTypes = () => {
    return (
      <ul className="space-x-8">
        {Object.keys(jokerTypes).map((jtype: any, idx: number) => (
          <li
            key={idx}
            className="space-x-2 inline-block float-left text-xs text-light-secondary dark:text-dark-gray"
          >
            <span dangerouslySetInnerHTML={{ __html: getTypeHtml(jtype) }} />
            <span>{jokerTypes[jtype]}</span>
          </li>
        ))}
      </ul>
    );
  };

  const updateSortingState = (idx: number) => {
    const sortingStatesCopy = defaultSortingStates;
    sortingStatesCopy[idx] = (sortingStates[idx] + 1) % 3;

    setSortingStates(sortingStatesCopy);
  };

  useEffect(() => {
    const sortingStateIdx = sortingStates.findIndex((i) => i != 0);

    if (sortingStateIdx === -1) {
      setData(originalData);
      return;
    }

    const sortingState = sortingStates[sortingStateIdx];

    switch (sortingState) {
      case SortingStateTypeMap.Asc:
        setData(sortAsc(dataScheme[sortingStateIdx], data));
        return;

      case SortingStateTypeMap.Desc:
        setData(sortDesc(dataScheme[sortingStateIdx], data));
        return;
    }
  }, [sortingStates]);

  // TODO: display skeleton
  if (!data?.length) return <>Loading...</>;
  else
    return (
      <ItemsContainer>
        <InfoJokerTypes />
        <ItemsTitle title={title} totalItems={data.length} />
        <ItemsTable
          updateSortingState={updateSortingState}
          sortingStates={sortingStates}
          dataScheme={dataScheme}
          body={
            <Fragment>
              {data.map(
                (
                  { Joker, Effect, Cost, Rarity, Requirement, Type }: Joker,
                  idx: number
                ) => (
                  <tr
                    key={idx}
                    className="block lg:table-row odd:bg-light-white odd:dark:bg-dark-background"
                  >
                    <td className="py-4 w-full lg:w-[14%] block lg:table-cell">
                      <CardImage src={Joker.image} alt={Joker.value} />
                      <p
                        className="mx-auto mt-2 lg:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                        dangerouslySetInnerHTML={{ __html: Joker.value }}
                      />
                    </td>
                    <InsecureAttrTd value={Effect?.value as string} />
                    <InsecureAttrTd value={Earn(Cost?.value as string)} />
                    <RarityComponent rarity={Rarity} />
                    <InsecureAttrTd value={Requirement?.value as string} />
                    <InsecureAttrTd
                      value={getTypeHtml(Type?.value as JokerType)}
                    />
                    <td className="block lg:table-cell">
                      <Checkbox checked={false} />
                    </td>
                  </tr>
                )
              )}
            </Fragment>
          }
        />
      </ItemsContainer>
    );
};
