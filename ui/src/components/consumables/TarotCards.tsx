import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../../siteConfig";
import { useFetch } from "../../lib/query";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { CardImage } from "../CardImage";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { defaultData } from "./Consumables";
import { useSorting } from "../../hooks/useSorting";
import { useTranslation } from "react-i18next";

export const TarotCards = () => {
  const { t, i18n } = useTranslation();

  const tarotTitle = t("tarotCards");
  const tarotDataScheme = [
    {
      attr: "Tarot",
      text: t("tarot"),
    },
    {
      attr: "Description",
      text: t("description"),
    },
  ];

  const {
    data: tarotResponse,
    isSuccess,
    refetch,
  } = useFetch<any>(apiRoutes.consumables.tarot);

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const { data: tarotData } = tarotResponse?.tarotCards || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (tarotData?.length) {
      setOriginalData(tarotData);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (tarotData?.length) {
      setData(tarotData);
    }
  }, [tarotData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(
    tarotDataScheme.map((i) => i.attr),
    originalData
  );

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle title={tarotTitle} totalItems={tarotData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={tarotDataScheme.map((i) => i.text)}
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
