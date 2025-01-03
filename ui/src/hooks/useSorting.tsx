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
    const sortingStatesCopy = [...sortingStates]; // Make a copy of sorting states
    sortingStatesCopy[idx] = (sortingStates[idx] + 1) % 3; // Cycle through states
    setSortingStates(sortingStatesCopy);
  };

  useEffect(() => {
    const sortingStateIdx = sortingStates.findIndex(
      (i) => i !== SortingStateTypeMap.Neutral
    );

    // Check if no sorting state is set
    if (sortingStateIdx === -1) {
      setData(initialData);
      return;
    }

    const sortingState = sortingStates[sortingStateIdx];
    let sortedData = [...initialData]; // Create a copy of initialData

    switch (sortingState) {
      case SortingStateTypeMap.Asc:
        sortedData = sortAsc(dataScheme[sortingStateIdx], sortedData);
        break;

      case SortingStateTypeMap.Desc:
        sortedData = sortDesc(dataScheme[sortingStateIdx], sortedData);
        break;

      default:
        break;
    }

    // Only update if sorted data is different
    if (JSON.stringify(sortedData) !== JSON.stringify(data)) {
      setData(sortedData);
    }
  }, [sortingStates, initialData, dataScheme]); // Ensure appropriate dependencies

  return { sortingStates, updateSortingState, data };
};
