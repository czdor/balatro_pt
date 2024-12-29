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
    <div className="flex justify-center items-center">
      <ul className="md:space-x-8 text-left">
        {Object.keys(jokerTypes).map((jtype: any, idx: number) => (
          <li
            key={idx}
            className="space-x-2 text-left block md:inline-block text-xs text-light-secondary dark:text-dark-gray"
          >
            <span dangerouslySetInnerHTML={{ __html: getTypeHtml(jtype) }} />
            <span>{jokerTypes[jtype]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
