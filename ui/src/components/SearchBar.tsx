import { useEffect, useRef, useState } from "react";
import { Search } from "./icons";

export const SearchBar = () => {
  const searchBarPlaceHolder = "Search...";
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "/" && searchInputRef.current)
        searchInputRef.current.focus();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const hdlSearchInput = (event: any) => {
    if (event.target.value === "/") return;

    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex rounded-xl border-2 border-light-gray dark:border-dark-secondary px-3 py-2 md:w-full text-light-secondary dark:text-dark-gray">
      <span className="md:text-md flex select-none items-center justify-center pl-1 pr-3 text-xs font-bold">
        <Search size={15} />
      </span>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={searchInputRef}
        value={searchQuery}
        onChange={hdlSearchInput}
        type="text"
        placeholder={searchBarPlaceHolder}
        className="text-md w-full border-none bg-transparent text-light-primary outline-none focus:outline-none"
      />
      <div className="ml-3 mr-1 flex select-none items-center justify-center rounded-lg bg-light-gray dark:bg-dark-secondary px-3">
        <span className="md:text-md text-xs font-semibold">
          {isInputFocused ? "esc" : "/"}
        </span>
      </div>
    </div>
  );
};
