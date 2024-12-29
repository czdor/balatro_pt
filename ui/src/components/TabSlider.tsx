import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { capitalize } from "../lib/misc";
import { useNavigate } from "react-router-dom";

export const TabSlider = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: any[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}) => {
  const navigate = useNavigate();

  const handleTabClick = (idx: number, path: string) => {
    setActiveTab(idx);
    navigate(path);
  };

  return (
    <div className="flex rounded-xl p-1 w-full mt-2 md:mt-0 bg-light-gray dark:bg-dark-secondary border-2 border-light-gray dark:border-dark-secondary select-none">
      {tabs.map(({ title, path }, idx: number) => (
        <button
          key={idx}
          onClick={() => handleTabClick(idx, path)}
          className={`rounded-full px-3 relative flex w-1/2 items-center justify-center py-1.5 text-sm font-medium ${
            activeTab === idx ? "text-light-metal" : "text-light-metal"
          } outline-none hover:text-metal`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === idx && (
            <motion.span
              layoutId="bubble"
              className="absolute z-0 h-full w-full select-none rounded-lg bg-light-white dark:bg-dark-background"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span
            className={`z-10 flex ${
              activeTab === idx
                ? "text-light-secondary dark:text-light-gray"
                : ""
            } hover:text-light-secondary dark:hover:text-light-gray text-xs md:text-normal font-semibold`}
          >
            {capitalize(title)}
          </span>
        </button>
      ))}
    </div>
  );
};
