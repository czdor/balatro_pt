import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../../siteConfig";
import { useFetch } from "../../lib/query";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { Checkbox } from "../Checkbox";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { CardImage } from "../CardImage";
import { defaultData } from "./Consumables";
import { useSorting } from "../../hooks/useSorting";

export const PlanetCards = () => {
  const planetTitle = "Planet Cards";
  const planetDataScheme = {
    Planet: "Planet",
    Addition: "Addition",
    "Poker Hand": "PokerHand",
    "Hand Base Score": "HandBaseScore",
  };

  const {
    data: planetResponse,
    isLoading: planetLoading,
    error: planetError,
    isSuccess,
  } = useFetch<any>(apiRoutes.consumables.planet);

  const { data: planetData } = planetResponse?.planetCards || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (planetData?.length) {
      setOriginalData((data) => [...data, ...planetData]);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (planetData?.length) {
      setData((data) => [...data, ...planetData]);
    }
  }, [planetData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(Object.values(planetDataScheme), originalData);

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle title={planetTitle} totalItems={planetData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={Object.keys(planetDataScheme)}
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
