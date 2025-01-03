import type { Joker, WeightedAttr } from "../types";
import { capitalize } from "../lib/misc";
import { JokerType } from "../types";
import { Earn, getTypeHtml } from "./Enhancements";
import { useFetch } from "../lib/query";
import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../siteConfig";
import { ItemsContainer, ItemsTable, ItemsTableRow, ItemsTitle } from "./Items";
import { InfoJokerTypes } from "./InfoJokerTypes";
import { CardImage } from "./CardImage";
import { InsecureAttrTd } from "./InsecureAttrTd";
import { useSorting } from "../hooks/useSorting";
import { useTranslation } from "react-i18next";

const Jokers = () => {
  const { t, i18n } = useTranslation();

  const dataScheme = [
    {
      attr: "Joker",
      text: t("joker"),
    },
    {
      attr: "Effect",
      text: t("effect"),
    },
    {
      attr: "Cost",
      text: t("cost"),
    },
    {
      attr: "Rarity",
      text: t("rarity"),
    },
    {
      attr: "Requirement",
      text: t("requirement"),
    },
    {
      attr: "Type",
      text: t("type"),
    },
  ];

  const {
    data: jokersData,
    isSuccess,
    refetch,
  } = useFetch<any>(apiRoutes.jokers);

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const [originalData, setOriginalData] = useState<Joker[]>([]);
  const [data, setData] = useState<Joker[]>([]);
  const title = t("jokers");

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (jokersData?.jokers) {
      setOriginalData(jokersData.jokers);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (jokersData?.jokers) {
      setData(jokersData.jokers);
    }
  }, [jokersData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(
    dataScheme.map((i) => i.attr),
    originalData
  );

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  const RarityComponent = ({ rarity }: { rarity: WeightedAttr }) => {
    const rarityTypeMap = ["common", "uncommon", "rare", "legendary"];

    return (
      <td className="block md:table-cell px-6">
        <span id={rarityTypeMap[rarity.weight - 1]} className="bubble">
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
        dataScheme={dataScheme.map((i) => i.text)}
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

export default Jokers;
