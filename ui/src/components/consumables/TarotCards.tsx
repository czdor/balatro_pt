import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../../siteConfig";
import { useFetch } from "../../lib/query";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { CardImage } from "../CardImage";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { defaultData } from "./Consumables";
import { useSorting } from "../../hooks/useSorting";

export const TarotCards = () => {
  const tarotTitle = "Tarot Cards";
  const tarotDataScheme: string[] = ["Tarot", "Description"];

  const { data: tarotResponse, isSuccess } = useFetch<any>(
    apiRoutes.consumables.tarot
  );
  const { data: tarotData } = tarotResponse?.tarotCards || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (tarotData?.length) {
      setOriginalData((data) => [...data, ...tarotData]);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (tarotData?.length) {
      setData((data) => [...data, ...tarotData]);
    }
  }, [tarotData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(tarotDataScheme, originalData);

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle title={tarotTitle} totalItems={tarotData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={tarotDataScheme}
        body={
          <Fragment>
            {data.map(({ Tarot, Description }: any, idx: number) => (
              <ItemsTableRow idx={idx}>
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <CardImage src={Tarot.image} alt={Tarot.value} />
                  <p
                    className="mx-auto mt-2 md:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                    dangerouslySetInnerHTML={{ __html: Tarot.value }}
                  />
                </td>
                <InsecureAttrTd value={Description.value} />
              </ItemsTableRow>
            ))}
          </Fragment>
        }
      />
    </Fragment>
  );
};
