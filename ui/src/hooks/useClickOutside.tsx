import { useEffect, useRef } from "react";

const useClickOutside = (callback: any) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // Check if the click is outside the referenced element
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export default useClickOutside;
