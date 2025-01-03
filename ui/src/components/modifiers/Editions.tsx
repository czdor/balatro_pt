import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../../siteConfig";
import { useFetch } from "../../lib/query";
import { defaultData } from "./Modifiers";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { CardImage } from "../CardImage";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { useSorting } from "../../hooks/useSorting";
import { useTranslation } from "react-i18next";

export const Editions = () => {
  const { t, i18n } = useTranslation();

  const editionsTitle = t("editions");
  const editionsDataScheme = [
    {
      attr: "Edition",
      text: t("edition"),
    },
    {
      attr: "Effect",
      text: t("effect"),
    },
  ];

  const {
    data: editionsResponse,
    isSuccess,
    refetch,
  } = useFetch<any>(apiRoutes.modifiers.editions);

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const { data: editionsData } = editionsResponse?.editions || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (editionsData?.length) {
      setOriginalData(editionsData);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (editionsData?.length) {
      setData(editionsData);
    }
  }, [editionsData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(
    editionsDataScheme.map((i) => i.attr),
    originalData
  );

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle title={editionsTitle} totalItems={editionsData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={editionsDataScheme.map((i) => i.text)}
        body={
          <Fragment>
            {data.map(({ Edition, Effect }: any, idx: number) => (
              <ItemsTableRow idx={idx}>
                <td className="py-4 w-full lg:w-[14%] block lg:table-cell">
                  <CardImage src={Edition.image} alt={Edition.value} />
                  <p
                    className="mx-auto mt-2 lg:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                    dangerouslySetInnerHTML={{ __html: Edition.value }}
                  />
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
