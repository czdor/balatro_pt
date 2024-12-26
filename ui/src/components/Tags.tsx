import { useFetch } from "../lib/query";
import { apiRoutes } from "../siteConfig";
import type { Tag, TagsT } from "../types";
import { Checkbox } from "./Checkbox";

const defaultData = {
  title: "",
  dataScheme: [],
  data: [],
};

export const Tags = () => {
  const {
    data: tagsResponse,
    isLoading: tagsLoading,
    error: tagsError,
  } = useFetch<any>(apiRoutes.tags);

  const { title, dataScheme, data }: TagsT = tagsResponse?.tags || defaultData;

  const TagImage = ({ src, alt }: { src: string; alt: string }) => {
    return <img className="mx-auto w-12 h-12" src={src} alt={alt} />;
  };

  const InsecureAttrTd = ({ value }: { value: string | TrustedHTML }) => {
    return (
      <td
        className="block md:table-cell px-6"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    );
  };

  return (
    <div className="flex flex-col w-full min-h-screen space-y-10">
      <div className="text-center md:text-left">
        <h1 className="text-lg font-bold text-light-secondary dark:text-dark-primary">
          List of {title} ({data.length})
        </h1>
      </div>
      <table className="table-auto text-light-secondary dark:text-dark-primary w-full relative rounded-xl bg-light-gray dark:bg-dark-secondary">
        <thead className="hidden md:table-header-group">
          <tr>
            {[...dataScheme, "Checklist"].map((_title: string, idx: number) => (
              <th
                className="text-dark-gray sticky top-0 bg-light-gray dark:bg-dark-secondary h-20 z-10 px-10 rounded-xl"
                key={idx}
              >
                {_title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({ Image, Tag, Benefit, Notes, Ante }: Tag, idx: number) => (
              <tr key={idx} className="block md:table-row">
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <TagImage src={Image} alt={Tag} />
                  <p
                    className="mx-auto mt-2 md:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                    dangerouslySetInnerHTML={{ __html: Tag }}
                  />
                </td>
                <InsecureAttrTd value={Benefit} />
                <InsecureAttrTd value={Notes} />
                <InsecureAttrTd value={Ante} />
                <td className="block md:table-cell">
                  <Checkbox checked={false} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
