import { Fragment, useEffect, useState } from "react";
import { useFetch } from "../../lib/query";
import { apiRoutes } from "../../siteConfig";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { CardImage } from "../CardImage";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { defaultData } from "./Consumables";
import { useSorting } from "../../hooks/useSorting";
import { useTranslation } from "react-i18next";

export const SpectralCards = () => {
  const { t, i18n } = useTranslation();

  const spectralTitle = t("spectralCards");
  const spectralDataScheme = [
    {
      attr: "Spectral",
      text: t("spectral"),
    },
    {
      attr: "Description",
      text: t("description"),
    },
  ];

  const {
    data: spectralResponse,
    isSuccess,
    refetch,
  } = useFetch<any>(apiRoutes.consumables.spectral);

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const { data: spectralData } = spectralResponse?.spectralCards || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (spectralData?.length) {
      setOriginalData(spectralData);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (spectralData?.length) {
      setData(spectralData);
    }
  }, [spectralData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(
    spectralDataScheme.map((i) => i.attr),
    originalData
  );

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle title={spectralTitle} totalItems={spectralData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={spectralDataScheme.map((i) => i.text)}
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
