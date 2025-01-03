import { Fragment, useEffect, useState } from "react";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { defaultData } from "./Modifiers";
import { useFetch } from "../../lib/query";
import { apiRoutes } from "../../siteConfig";
import { CardImage } from "../CardImage";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { useSorting } from "../../hooks/useSorting";
import { useTranslation } from "react-i18next";

export const Enhancements = () => {
  const { t, i18n } = useTranslation();

  const enhancementsTitle = t("enhancements");
  const enhancementsDataScheme = [
    {
      attr: "Enhancement",
      text: t("enhancement"),
    },
    {
      attr: "Effect",
      text: t("effect"),
    },
  ];

  const {
    data: enhancementsResponse,
    isSuccess,
    refetch,
  } = useFetch<any>(apiRoutes.modifiers.enhancements);

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const { data: enhancementsData } =
    enhancementsResponse?.enhancements || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (enhancementsData?.length) {
      setOriginalData(enhancementsData);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (enhancementsData?.length) {
      setData(enhancementsData);
    }
  }, [enhancementsData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(
    enhancementsDataScheme.map((i) => i.attr),
    originalData
  );

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
        dataScheme={enhancementsDataScheme.map((i) => i.text)}
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
