import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../../siteConfig";
import { useFetch } from "../../lib/query";
import { defaultData } from "./Modifiers";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { CardImage } from "../CardImage";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { useSorting } from "../../hooks/useSorting";
import { useTranslation } from "react-i18next";

export const Seals = () => {
  const { t, i18n } = useTranslation();

  const sealsTitle = t("seals");
  const sealsDataScheme = [
    {
      attr: "Seal",
      text: t("seal"),
    },
    {
      attr: "Effect",
      text: t("effect"),
    },
  ];

  const {
    data: sealsResponse,
    isSuccess,
    refetch,
  } = useFetch<any>(apiRoutes.modifiers.seals);
  const { data: sealsData } = sealsResponse?.seals || defaultData;

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (sealsData?.length) {
      setOriginalData(sealsData);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (sealsData?.length) {
      setData(sealsData);
    }
  }, [sealsData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(
    sealsDataScheme.map((i) => i.attr),
    originalData
  );

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle title={sealsTitle} totalItems={sealsData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={sealsDataScheme.map((i) => i.text)}
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
