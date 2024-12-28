import { Fragment, useEffect, useState } from "react";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { defaultData } from "./Modifiers";
import { useFetch } from "../../lib/query";
import { apiRoutes } from "../../siteConfig";
import { CardImage } from "../CardImage";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { Checkbox } from "../Checkbox";
import { useSorting } from "../../hooks/useSorting";

export const Enhancements = () => {
  const enhancementsTitle = "Enhancements";
  const enhancementsDataScheme = ["Enhancement", "Effect"];

  const {
    data: enhancementsResponse,
    isLoading: enhancementsLoading,
    error: enhancementsError,
    isSuccess,
  } = useFetch<any>(apiRoutes.modifiers.enhancements);
  const { data: enhancementsData } =
    enhancementsResponse?.enhancements || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (enhancementsData?.length) {
      setOriginalData((data) => [...data, ...enhancementsData]);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (enhancementsData?.length) {
      setData((data) => [...data, ...enhancementsData]);
    }
  }, [enhancementsData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(enhancementsDataScheme, originalData);

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle
        title={enhancementsTitle}
        totalItems={enhancementsData.length}
      />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={enhancementsDataScheme}
        body={
          <Fragment>
            {data.map(({ Enhancement, Effect }: any, idx: number) => (
              <ItemsTableRow idx={idx}>
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <CardImage src={Enhancement.image} alt={Enhancement.value} />
                </td>
                <InsecureAttrTd value={Effect.value} />
              </ItemsTableRow>
            ))}
          </Fragment>
        }
      />
    </Fragment>
  );
};
