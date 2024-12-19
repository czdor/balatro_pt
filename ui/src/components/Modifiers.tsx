import { useFetch } from "../lib/query";
import { apiRoutes } from "../siteConfig";
import type { Enhancement, Edition, Seal } from "../types";

const defaultData = {
  title: "",
  dataScheme: [],
  data: [],
};

export const Modifiers = () => {
  const {
    data: editionsResponse,
    isLoading: editionsLoading,
    error: editionsError,
  } = useFetch<any>(apiRoutes.modifiers.editions);

  const {
    data: enhancementsResponse,
    isLoading: enhancementsLoading,
    error: enhancementsError,
  } = useFetch<any>(apiRoutes.modifiers.enhancements);

  const {
    data: sealsResponse,
    isLoading: sealsLoading,
    error: sealsError,
  } = useFetch<any>(apiRoutes.modifiers.seals);

  const {
    title: editionsTitle,
    dataScheme: editionsDataScheme,
    data: editionsData,
  } = editionsResponse?.editions || defaultData;

  const {
    title: enhancementsTitle,
    dataScheme: enhancementsDataScheme,
    data: enhancementsData,
  } = enhancementsResponse?.enhancements || defaultData;

  const {
    title: sealsTitle,
    dataScheme: sealsDataScheme,
    data: sealsData,
  } = sealsResponse?.seals || defaultData;

  const CardImage = ({ src, alt }: { src: string; alt: string }) => {
    return <img className="mx-auto w-24 h-32" src={src} alt={alt} />;
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
    <div className="flex flex-col w-full min-h-screen space-y-20">
      <div className="text-center md:text-left">
        <h1 className="text-lg font-bold text-light-secondary dark:text-dark-primary">
          List of {editionsTitle} ({editionsData.length})
        </h1>
      </div>
      <table className="table-auto text-light-secondary dark:text-dark-primary w-full relative rounded-xl bg-light-gray dark:bg-dark-secondary">
        <thead className="hidden md:table-header-group">
          <tr>
            {[...editionsDataScheme, "Checklist"].map(
              (_title: string, idx: number) => (
                <th
                  className="text-dark-gray sticky top-0 bg-light-gray dark:bg-dark-secondary h-20 z-10 px-10 rounded-xl"
                  key={idx}
                >
                  {_title}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {editionsData.map(
            ({ Appearance, Edition, Effect }: Edition, idx: number) => (
              <tr key={idx} className="block md:table-row">
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <CardImage src={Appearance} alt={Edition} />
                </td>
                <InsecureAttrTd value={Edition} />
                <InsecureAttrTd value={Effect} />
                <td className="block md:table-cell">
                  <input
                    // checked={dataObj.checked ?? false}
                    type="checkbox"
                    name="Add"
                    id=""
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div className="text-center md:text-left">
        <h1 className="text-lg font-bold text-light-secondary dark:text-dark-primary">
          List of {enhancementsTitle} ({enhancementsData.length})
        </h1>
      </div>
      <table className="table-auto text-light-secondary dark:text-dark-primary w-full relative rounded-xl bg-light-gray dark:bg-dark-secondary">
        <thead className="hidden md:table-header-group">
          <tr>
            {[...enhancementsDataScheme, "Checklist"].map(
              (_title: string, idx: number) => (
                <th
                  className="text-dark-gray sticky top-0 bg-light-gray dark:bg-dark-secondary h-20 z-10 px-10 rounded-xl"
                  key={idx}
                >
                  {_title}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {enhancementsData.map(
            ({ Appearance, Enhancement, Effect }: Enhancement, idx: number) => (
              <tr key={idx} className="block md:table-row">
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <CardImage src={Appearance} alt={Enhancement} />
                </td>
                <InsecureAttrTd value={Enhancement} />
                <InsecureAttrTd value={Effect} />
                <td className="block md:table-cell">
                  <input
                    // checked={dataObj.checked ?? false}
                    type="checkbox"
                    name="Add"
                    id=""
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div className="text-center md:text-left">
        <h1 className="text-lg font-bold text-light-secondary dark:text-dark-primary">
          List of {sealsTitle} ({sealsData.length})
        </h1>
      </div>
      <table className="table-auto text-light-secondary dark:text-dark-primary w-full relative rounded-xl bg-light-gray dark:bg-dark-secondary">
        <thead className="hidden md:table-header-group">
          <tr>
            {[...sealsDataScheme, "Checklist"].map(
              (_title: string, idx: number) => (
                <th
                  className="text-dark-gray sticky top-0 bg-light-gray dark:bg-dark-secondary h-20 z-10 px-10 rounded-xl"
                  key={idx}
                >
                  {_title}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {sealsData.map(({ Appearance, Seal, Effect }: Seal, idx: number) => (
            <tr key={idx} className="block md:table-row">
              <td className="py-4 w-full md:w-[14%] block md:table-cell">
                <CardImage src={Appearance} alt={Seal} />
              </td>
              <InsecureAttrTd value={Seal} />
              <InsecureAttrTd value={Effect} />
              <td className="block md:table-cell">
                <input
                  // checked={dataObj.checked ?? false}
                  type="checkbox"
                  name="Add"
                  id=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
