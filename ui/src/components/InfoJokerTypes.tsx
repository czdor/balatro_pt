import { getTypeHtml } from "./Enhancements";

const jokerTypes: { [key: string]: string } = {
  "+c": "Chips Jokers",
  "+m": "Additive Mult Jokers",
  Xm: "Multiplicative Mult Jokers",
  "++": "Chips & Additive Mult Jokers",
  "!!": "Effect Jokers",
  "...": "Retrigger Jokers",
  "+$": "Economy Jokers",
};

export const InfoJokerTypes = () => {
  return (
    <ul className="space-x-8">
      {Object.keys(jokerTypes).map((jtype: any, idx: number) => (
        <li
          key={idx}
          className="space-x-2 inline-block float-left text-xs text-light-secondary dark:text-dark-gray"
        >
          <span dangerouslySetInnerHTML={{ __html: getTypeHtml(jtype) }} />
          <span>{jokerTypes[jtype]}</span>
        </li>
      ))}
    </ul>
  );
};
