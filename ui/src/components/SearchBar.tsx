import { useEffect, useRef, useState } from "react";
import { Search } from "./icons";
import { SearchResults } from "./SearchResults";
import { apiRoutes } from "../siteConfig";
import { useDebounce } from "../hooks/useDebounce";
import { api } from "../lib/api";
import useClickOutside from "../hooks/useClickOutside";

export const SearchBar = () => {
  const searchBarPlaceHolder = "Search...";
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any>(null);

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
    setIsResultsOpen(true);
  };

  const hdlSearchInput = (event: any) => {
    if (event.target.value === "/") return;

    setSearchQuery(event.target.value);
  };

  const debounceSearch = useDebounce(searchQuery);

  useEffect(() => {
    if (!searchQuery.length) {
      setSearchResults(null);
      return;
    }

    (async function () {
      const results = await fetchResults();

      setSearchResults(results);
      setIsResultsOpen(true);
    })();
  }, [debounceSearch]);

  const fetchResults = async () => {
    try {
      const response = await api.get(apiRoutes.search, {
        params: { query: searchQuery },
      });

      return response.data;
    } catch (err) {
      console.error("fetch search results error");
    }
  };

  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const ref: any = useClickOutside(() => setIsResultsOpen(false));

  return (
    <div className="relative" ref={ref}>
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
      {isResultsOpen && <SearchResults results={searchResults} />}
    </div>
  );
};
