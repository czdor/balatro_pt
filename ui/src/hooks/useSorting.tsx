import { useState, useEffect } from "react";
import SortUpDown from "../components/icons/SortUpDown";
import SortUp from "../components/icons/SortUp";

export const sortAsc = (itemKey: string, data: any[]) => {
  return [...data].sort(
    (a: any, b: any) => a[itemKey].weight - b[itemKey].weight
  );
};

export const sortDesc = (itemKey: string, data: any[]) => {
  return [...data].sort((a: any, b: any) => {
    return b[itemKey].weight - a[itemKey].weight;
  });
};

export const SortingStateTypeMap = {
  Neutral: 0,
  Desc: 1,
  Asc: 2,
};

export const SortingState = (state: number) => {
  const defaultIconClasses = "ml-auto text-sky-300 w-3 h-3 flex-shrink-0";

  switch (state) {
    case SortingStateTypeMap.Neutral:
      return <SortUpDown className={defaultIconClasses} />;

    case SortingStateTypeMap.Asc:
      return <SortUp className={defaultIconClasses} />;

    case SortingStateTypeMap.Desc:
      return <SortUp className={`rotate-180 ${defaultIconClasses}`} />;

    default:
      return <SortUpDown className={defaultIconClasses} />;
  }
};

export const useSorting = (dataScheme: string[], initialData: any[]) => {
  const defaultSortingStates = new Array(dataScheme.length).fill(
    SortingStateTypeMap.Neutral
  );

  const [sortingStates, setSortingStates] = useState(defaultSortingStates);
  const [data, setData] = useState(initialData);

  const updateSortingState = (idx: number) => {
    const sortingStatesCopy = defaultSortingStates;
    sortingStatesCopy[idx] = (sortingStates[idx] + 1) % 3;

    setSortingStates(sortingStatesCopy);
  };

  useEffect(() => {
    const sortingStateIdx = sortingStates.findIndex(
      (i) => i !== SortingStateTypeMap.Neutral
    );

    if (sortingStateIdx === -1) {
      setData(initialData);
      return;
    }

    const sortingState = sortingStates[sortingStateIdx];

    switch (sortingState) {
      case SortingStateTypeMap.Asc:
        setData(sortAsc(dataScheme[sortingStateIdx], initialData));
        return;

      case SortingStateTypeMap.Desc:
        setData(sortDesc(dataScheme[sortingStateIdx], initialData));
        return;

      default:
        setData(initialData);
    }
  }, [sortingStates, initialData, dataScheme]);

  return { sortingStates, updateSortingState, data };
};
