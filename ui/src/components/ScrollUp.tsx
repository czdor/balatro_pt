import { ChevronUp } from "./icons";

export const ScrollUp = () => {
  return (
    <a
      href="#content-table"
      className="fixed bottom-10 right-10 bg-light-gray dark:bg-dark-secondary w-14 h-14 inline-flex items-center justify-center rounded-md"
    >
      <ChevronUp />
    </a>
  );
};
