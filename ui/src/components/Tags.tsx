import { Fragment, useEffect, useState } from "react";
import { useFetch } from "../lib/query";
import { apiRoutes } from "../siteConfig";
import type { TagsT } from "../types";
import { ItemsContainer, ItemsTable, ItemsTableRow, ItemsTitle } from "./Items";
import { TagImage } from "./TagImage";
import { InsecureAttrTd } from "./InsecureAttrTd";
import { useSorting } from "../hooks/useSorting";
import { useTranslation } from "react-i18next";

const defaultData = {
  title: "",
  dataScheme: [],
  data: [],
};

const Tags = () => {
  const { t, i18n } = useTranslation();

  const tagsTitle = t("tags");
  const tagsDataScheme = [
    {
      attr: "Tag",
      text: t("tag"),
    },
    {
      attr: "Benefit",
      text: t("benefit"),
    },
    {
      attr: "Notes",
      text: t("notes"),
    },
    {
      attr: "Ante",
      text: t("ante"),
    },
  ];

  const {
    data: tagsResponse,
    isSuccess,
    refetch,
  } = useFetch<any>(apiRoutes.tags);

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const { data: tagsData }: TagsT = tagsResponse?.tags || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (isSuccess && tagsData.length) {
      setOriginalData(tagsData);
      setData(tagsData);
    }
  }, [isSuccess, tagsData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(
    tagsDataScheme.map((i) => i.attr),
    originalData
  );

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <ItemsContainer>
      <ItemsTitle title={tagsTitle} totalItems={tagsData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={tagsDataScheme.map((i) => i.text)}
        body={
          <Fragment>
            {data.map(({ Tag, Benefit, Notes, Ante }, idx: number) => (
              <ItemsTableRow idx={idx}>
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <TagImage src={Tag.image} alt={Tag.value} />
                  <p
                    className="mx-auto mt-2 md:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                    dangerouslySetInnerHTML={{ __html: Tag.value }}
                  />
                </td>
                <InsecureAttrTd value={Benefit.value} />
                <InsecureAttrTd value={Notes.value} />
                <InsecureAttrTd value={Ante.value} />
              </ItemsTableRow>
            ))}
          </Fragment>
        }
      />
    </ItemsContainer>
  );
};

export default Tags;
