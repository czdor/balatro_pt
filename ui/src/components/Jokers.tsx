import type { Joker, WeightedAttr } from "../types";
import { capitalize } from "../lib/misc";
import { JokerType } from "../types";
import { Checkbox } from "./Checkbox";
import { Earn, getTypeHtml } from "./Enhancements";
import { useFetch } from "../lib/query";
import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../siteConfig";
import { ItemsContainer, ItemsTable, ItemsTableRow, ItemsTitle } from "./Items";
import { InfoJokerTypes } from "./InfoJokerTypes";
import { CardImage } from "./CardImage";
import { InsecureAttrTd } from "./InsecureAttrTd";
import { useSorting } from "../hooks/useSorting";

export const Jokers = () => {
  const dataScheme = [
    "Joker",
    "Effect",
    "Cost",
    "Rarity",
    "Requirement",
    "Type",
  ];

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

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(dataScheme, originalData);

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  const RarityComponent = ({ rarity }: { rarity: WeightedAttr }) => {
    return (
      <td className="block md:table-cell px-6">
        <span id={rarity.value} className="bubble">
          {capitalize(rarity.value)}
        </span>
      </td>
    );
  };

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
                <ItemsTableRow idx={idx}>
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
                </ItemsTableRow>
              )
            )}
          </Fragment>
        }
      />
    </ItemsContainer>
  );
};
