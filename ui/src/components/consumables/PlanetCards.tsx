import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../../siteConfig";
import { useFetch } from "../../lib/query";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { CardImage } from "../CardImage";
import { defaultData } from "./Consumables";
import { useSorting } from "../../hooks/useSorting";
import { useTranslation } from "react-i18next";

export const PlanetCards = () => {
  const { t, i18n } = useTranslation();

  const planetTitle = t("planetCards");

  const planetDataScheme = [
    {
      attr: "Planet",
      text: t("planet"),
    },
    {
      attr: "Addition",
      text: t("addition"),
    },
    {
      attr: "PokerHand",
      text: t("PokerHand"),
    },
    {
      attr: "HandBaseScore",
      text: t("HandBaseScore"),
    },
  ];

  const {
    data: planetResponse,
    isSuccess,
    refetch,
  } = useFetch<any>(apiRoutes.consumables.planet);

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const { data: planetData } = planetResponse?.planetCards || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (planetData?.length) {
      setOriginalData(planetData);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (planetData?.length) {
      setData(planetData);
    }
  }, [planetData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(
    planetDataScheme.map((i) => i.attr),
    originalData
  );

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle title={planetTitle} totalItems={planetData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={planetDataScheme.map((i) => i.text)}
        body={
          <Fragment>
            {data.map(
              (
                { Planet, Addition, PokerHand, HandBaseScore }: any,
                idx: number
              ) => (
                <ItemsTableRow idx={idx}>
                  <td className="py-4 w-full md:w-[14%] block md:table-cell">
                    <CardImage src={Planet.image} alt={Planet.value} />
                    <p
                      className="mx-auto mt-2 md:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                      dangerouslySetInnerHTML={{ __html: Planet.value }}
                    />
                  </td>
                  <InsecureAttrTd value={Addition.value} />
                  <InsecureAttrTd value={PokerHand.value} />
                  <InsecureAttrTd value={HandBaseScore.value} />
                </ItemsTableRow>
              )
            )}
          </Fragment>
        }
      />
    </Fragment>
  );
};
