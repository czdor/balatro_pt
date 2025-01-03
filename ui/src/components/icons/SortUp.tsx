import React from "react";

interface DropdownIconProps {
  className?: string; // Optional prop for Tailwind classes
}

const DropdownIcon: React.FC<DropdownIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 12 12"
      className={className} // Apply Tailwind classes here
    >
      <defs>
        <path
          className="fill-current"
          id="dropdown-tiny-a"
          d="M6.0001895,8.80004571 C5.79538755,8.80004571 5.5905856,8.72164496 5.43458411,8.56564348 L2.23455364,5.365613 C2.00575146,5.13681083 1.93695081,4.79280755 2.06095199,4.4936047 C2.18415316,4.19440185 2.47695595,4 2.80015903,4 L9.20021997,4 C9.52342305,4 9.81542583,4.19440185 9.93942701,4.4936047 C10.0634282,4.79280755 9.99462754,5.13681083 9.76582536,5.365613 L6.56579489,8.56564348 C6.4097934,8.72164496 6.20499145,8.80004571 6.0001895,8.80004571 Z"
        />
      </defs>
      <use xlinkHref="#dropdown-tiny-a" fillRule="evenodd" />
    </svg>
  );
};

export default DropdownIcon;
