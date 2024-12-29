import { Fragment, useEffect, useState } from "react";
import { useFetch } from "../../lib/query";
import { apiRoutes } from "../../siteConfig";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { CardImage } from "../CardImage";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { defaultData } from "./Consumables";
import { useSorting } from "../../hooks/useSorting";

export const SpectralCards = () => {
  const spectralTitle = "Spectral Cards";
  const spectralDataScheme: string[] = ["Spectral", "Description"];

  const { data: spectralResponse, isSuccess } = useFetch<any>(
    apiRoutes.consumables.spectral
  );

  const { data: spectralData } = spectralResponse?.spectralCards || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (spectralData?.length) {
      setOriginalData((data) => [...data, ...spectralData]);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (spectralData?.length) {
      setData((data) => [...data, ...spectralData]);
    }
  }, [spectralData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(spectralDataScheme, originalData);

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle title={spectralTitle} totalItems={spectralData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={spectralDataScheme}
        body={
          <Fragment>
            {data.map(({ Spectral, Description }: any, idx: number) => (
              <ItemsTableRow idx={idx}>
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <CardImage src={Spectral.image} alt={Spectral.value} />
                  <p
                    className="mx-auto mt-2 md:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                    dangerouslySetInnerHTML={{ __html: Spectral.value }}
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
