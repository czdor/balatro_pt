import { TabSlider } from "./TabSlider";
import { Tabs } from "../types";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { appName } from "../siteConfig";
import { LangToggle } from "./LangToggle";

export const Navigation = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: any;
  activeTab: Tabs;
  setActiveTab: React.Dispatch<any>;
}) => {
  return (
    <div className="w-full relative my-8 text-light-primary dark:text-dark-primary">
      <a
        href="/"
        className="h-auto flex flex-col items-center justify-center mb-8 select-none w-60 mx-auto"
      >
        <img
          className="w-20 h-8 md:w-40 md:h-10"
          src="/Site-logo.webp"
          alt={appName}
        />
        <span id="logo-title" className="text-[0.50rem] text-[#666666]">
          Wiki 1.0
        </span>
      </a>
      <div className="top-0 right-0 absolute space-x-2 z-50 hidden md:flex">
        <LangToggle />
        <ThemeToggle />
      </div>

      <div className="top-0 left-0 absolute md:hidden z-50">
        <ThemeToggle />
      </div>

      <div className="top-0 right-0 absolute md:hidden z-50">
        <LangToggle />
      </div>

      <div className="mb-8 flex flex-col md:flex-row items-center justify-center gap-x-2 w-full">
        <div className="w-full md:w-[65%]">
          <SearchBar />
        </div>
        <div className="h-full flex-row rounded-xl w-full md:w-[45%]">
          <TabSlider
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};
