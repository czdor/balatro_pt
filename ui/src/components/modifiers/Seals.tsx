import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../../siteConfig";
import { useFetch } from "../../lib/query";
import { defaultData } from "./Modifiers";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { CardImage } from "../CardImage";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { Checkbox } from "../Checkbox";
import { useSorting } from "../../hooks/useSorting";

export const Seals = () => {
  const sealsTitle = "Seals";
  const sealsDataScheme = ["Seal", "Effect"];

  const {
    data: sealsResponse,
    isLoading: sealsLoading,
    error: sealsError,
    isSuccess,
  } = useFetch<any>(apiRoutes.modifiers.seals);
  const { data: sealsData } = sealsResponse?.seals || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (sealsData?.length) {
      setOriginalData((data) => [...data, ...sealsData]);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (sealsData?.length) {
      setData((data) => [...data, ...sealsData]);
    }
  }, [sealsData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(sealsDataScheme, originalData);

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle title={sealsTitle} totalItems={sealsData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={sealsDataScheme}
        body={
          <Fragment>
            {data.map(({ Seal, Effect }: any, idx: number) => (
              <ItemsTableRow idx={idx}>
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <CardImage src={Seal.image} alt={Seal.value} />
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
