import { Fragment, useEffect, useState } from "react";
import { apiRoutes } from "../../siteConfig";
import { useFetch } from "../../lib/query";
import { ItemsTable, ItemsTableRow, ItemsTitle } from "../Items";
import { InsecureAttrTd } from "../InsecureAttrTd";
import { defaultData } from "./Consumables";
import { useSorting } from "../../hooks/useSorting";
import { useTranslation } from "react-i18next";
import { VoucherImage } from "../VoucherImage";

export const Vouchers = () => {
  const { t, i18n } = useTranslation();

  const vouchersTitle = t("vouchers");
  const vouchersDataScheme = [
    {
      attr: "Voucher",
      text: t("voucher"),
    },
    {
      attr: "Effect",
      text: t("effect"),
    },
    {
      attr: "UnlocksWhen",
      text: t("unlocksWhen"),
    },
    {
      attr: "Notes",
      text: t("notes"),
    },
  ];

  const {
    data: vouchersResponse,
    isSuccess,
    refetch,
  } = useFetch<any>(apiRoutes.consumables.vouchers);

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const { data: vouchersData } = vouchersResponse?.vouchers || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (vouchersData?.length) {
      setOriginalData(vouchersData);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (vouchersData?.length) {
      setData(vouchersData);
    }
  }, [vouchersData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(
    vouchersDataScheme.map((i) => i.attr),
    originalData
  );

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <Fragment>
      <ItemsTitle title={vouchersTitle} totalItems={vouchersData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={vouchersDataScheme.map((i) => i.text)}
        body={
          <Fragment>
            {data.map(
              ({ Voucher, Effect, UnlocksWhen, Notes }: any, idx: number) => (
                <ItemsTableRow idx={idx}>
                  <td className="py-4 w-full md:w-[14%] block md:table-cell">
                    <VoucherImage src={Voucher.image} alt={Voucher.value} />
                    <p
                      className="mx-auto mt-2 md:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                      dangerouslySetInnerHTML={{ __html: Voucher.value }}
                    />
                  </td>
                  <InsecureAttrTd value={Effect.value} />
                  <InsecureAttrTd value={UnlocksWhen.value} />
                  <InsecureAttrTd value={Notes.value} />
                </ItemsTableRow>
              )
            )}
          </Fragment>
        }
      />
    </Fragment>
  );
};
