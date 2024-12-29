import { Fragment, useEffect, useState } from "react";
import { SortingState } from "../hooks/useSorting";
import { ScrollUp } from "./ScrollUp";

export const ItemsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full min-h-screen space-y-10">
      {children}
    </div>
  );
};

export const ItemsTitle = ({
  title,
  totalItems,
}: {
  title: string;
  totalItems: number;
}) => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-lg font-bold text-light-secondary dark:text-dark-primary">
        List of {title} ({totalItems})
      </h1>
    </div>
  );
};

export const ItemsTable = ({
  updateSortingState,
  sortingStates,
  dataScheme,
  body,
}: {
  updateSortingState: (idx: number) => void;
  sortingStates: number[];
  dataScheme: string[];
  body: React.ReactNode;
}) => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <table
        id="content-table"
        className="table-auto text-light-secondary dark:text-dark-primary w-full relative rounded-xl bg-light-gray dark:bg-dark-secondary"
      >
        <thead className="hidden lg:table-header-group">
          <tr className="sticky top-0 rounded-xl z-20 bg-light-gray dark:bg-dark-secondary h-20">
            {dataScheme.map((_title: string, idx: number) => (
              <th className={`text-dark-gray px-3`} key={_title}>
                <div className="flex items-center justify-center px-4">
                  <span className="inline-block w-full mr-2 text-sm lg:text-base">
                    {_title}
                  </span>
                  <button
                    className="p-1 outline-none focus:outline-none"
                    onClick={() => updateSortingState(idx)}
                  >
                    {SortingState(sortingStates[idx])}
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{body}</tbody>
        {showScrollUp && <ScrollUp />}
      </table>
    </Fragment>
  );
};

export const ItemsTableRow = ({
  children,
  idx,
}: {
  children: React.ReactNode;
  idx: number;
}) => {
  return (
    <tr
      key={idx}
      className="block lg:table-row odd:bg-light-white odd:dark:bg-dark-background space-y-2 md:space-y-0 mb-4"
    >
      {children}
    </tr>
  );
};
