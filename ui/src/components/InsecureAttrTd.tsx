export const InsecureAttrTd = ({ value }: { value: string | TrustedHTML }) => {
  return (
    <td
      className="block md:table-cell px-6"
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
};
