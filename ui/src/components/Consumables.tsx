import type { PlanetData, SpectralData, TarotData } from "../types";
import { useFetch } from "../lib/query";
import { apiRoutes } from "../siteConfig";

const defaultData = {
  title: "",
  dataScheme: [],
  data: [],
};

export const Consumables = () => {
  const {
    data: planetResponse,
    isLoading: planetLoading,
    error: planetError,
  } = useFetch<any>(apiRoutes.consumables.planet);

  const {
    data: tarotResponse,
    isLoading: tarotLoading,
    error: tarotError,
  } = useFetch<any>(apiRoutes.consumables.tarot);

  const {
    data: spectralResponse,
    isLoading: spectralLoading,
    error: spectralError,
  } = useFetch<any>(apiRoutes.consumables.spectral);

  const {
    title: planetTitle,
    dataScheme: planetDataScheme,
    data: planetData,
  } = planetResponse?.planetCards || defaultData;

  const {
    title: tarotTitle,
    dataScheme: tarotDataScheme,
    data: tarotData,
  } = tarotResponse?.tarotCards || defaultData;

  const {
    title: spectralTitle,
    dataScheme: spectralDataScheme,
    data: spectralData,
  } = spectralResponse?.spectralCards || defaultData;

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
    <div className="flex flex-col w-full min-h-screen space-y-10">
      <div className="text-center md:text-left">
        <h1 className="text-lg font-bold text-light-secondary dark:text-dark-primary">
          List of {spectralTitle} ({spectralData.length})
        </h1>
      </div>
      <table className="table-auto text-light-secondary dark:text-dark-primary w-full relative rounded-xl bg-light-gray dark:bg-dark-secondary">
        <thead className="hidden md:table-header-group">
          <tr>
            {[...spectralDataScheme, "Checklist"].map(
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
          {spectralData.map(
            ({ Image, Name, Description }: SpectralData, idx: number) => (
              <tr key={idx} className="block md:table-row">
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <CardImage src={Image} alt={Name} />
                  <p
                    className="mx-auto mt-2 md:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                    dangerouslySetInnerHTML={{ __html: Name }}
                  />
                </td>
                <InsecureAttrTd value={Description} />
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
          List of {tarotTitle} ({tarotData.length})
        </h1>
      </div>
      <table className="table-auto text-light-secondary dark:text-dark-primary w-full relative rounded-xl bg-light-gray dark:bg-dark-secondary">
        <thead className="hidden md:table-header-group">
          <tr>
            {[...tarotDataScheme, "Checklist"].map(
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
          {tarotData.map(
            ({ Image, Name, Description }: TarotData, idx: number) => (
              <tr key={idx} className="block md:table-row">
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <CardImage src={Image} alt={Name} />
                  <p
                    className="mx-auto mt-2 md:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                    dangerouslySetInnerHTML={{ __html: Name }}
                  />
                </td>
                <InsecureAttrTd value={Description} />
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
          List of {planetTitle} ({planetData.length})
        </h1>
      </div>
      <table className="table-auto text-light-secondary dark:text-dark-primary w-full relative rounded-xl bg-light-gray dark:bg-dark-secondary">
        <thead className="hidden md:table-header-group">
          <tr>
            {[...planetDataScheme, "Checklist"].map(
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
          {planetData.map(
            (
              { Image, Name, Addition, PokerHand, HandBaseScore }: PlanetData,
              idx: number
            ) => (
              <tr key={idx} className="block md:table-row">
                <td className="py-4 w-full md:w-[14%] block md:table-cell">
                  <CardImage src={Image} alt={Name} />
                  <p
                    className="mx-auto mt-2 md:mt-3 font-semibold text-light-secondary dark:text-dark-gray"
                    dangerouslySetInnerHTML={{ __html: Name }}
                  />
                </td>
                <InsecureAttrTd value={Addition} />
                <InsecureAttrTd value={PokerHand} />
                <InsecureAttrTd value={HandBaseScore} />
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
    </div>
  );
};
