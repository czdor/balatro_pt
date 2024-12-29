import { Fragment, useEffect, useState } from "react";
import { useFetch } from "../lib/query";
import { apiRoutes } from "../siteConfig";
import type { TagsT } from "../types";
import { ItemsContainer, ItemsTable, ItemsTableRow, ItemsTitle } from "./Items";
import { TagImage } from "./TagImage";
import { InsecureAttrTd } from "./InsecureAttrTd";
import { useSorting } from "../hooks/useSorting";

const defaultData = {
  title: "",
  dataScheme: [],
  data: [],
};

const Tags = () => {
  const tagsTitle = "Tags";
  const tagsDataScheme = ["Tag", "Benefit", "Notes", "Ante"];

  const { data: tagsResponse, isSuccess } = useFetch<any>(apiRoutes.tags);

  const { data: tagsData }: TagsT = tagsResponse?.tags || defaultData;

  const [data, setData] = useState<any[]>([]);
  const [originalData, setOriginalData] = useState<any[]>([]);

  useEffect(() => {
    if (originalData?.length) setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (tagsData?.length) {
      setOriginalData((data) => [...data, ...tagsData]);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (tagsData?.length) {
      setData((data) => [...data, ...tagsData]);
    }
  }, [tagsData]);

  const {
    sortingStates,
    updateSortingState,
    data: updatedData,
  } = useSorting(Object.values(tagsDataScheme), originalData);

  useEffect(() => {
    setData(updatedData);
  }, [updatedData]);

  return (
    <ItemsContainer>
      <ItemsTitle title={tagsTitle} totalItems={tagsData.length} />
      <ItemsTable
        updateSortingState={updateSortingState}
        sortingStates={sortingStates}
        dataScheme={tagsDataScheme}
        body={
          <Fragment>
            {data.map(({ Tag, Benefit, Notes, Ante }: any, idx: number) => (
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
