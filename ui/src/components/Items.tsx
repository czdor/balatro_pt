import SortUp from "./icons/SortUp";
import SortUpDown from "./icons/SortUpDown";

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

const SortingState = (state: number) => {
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
  return (
    <table className="table-auto text-light-secondary dark:text-dark-primary w-full relative rounded-xl bg-light-gray dark:bg-dark-secondary">
      <thead className="hidden lg:table-header-group">
        <tr className="sticky top-0 rounded-xl z-20 bg-light-gray dark:bg-dark-secondary h-20">
          {[...dataScheme, "Checklist"].map((_title: string, idx: number) => (
            <th className={`text-dark-gray px-3`} key={idx}>
              {_title != "Checklist" ? (
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
              ) : (
                <span className="block px-4">{_title}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{body}</tbody>
      {/*<div ref={ref}></div>*/}
    </table>
  );
};
