import { indexDataMappings, indexTitleMapping } from "../scripts/dataMappings";
import { client } from "../lib/elasticSearch";

const searchLimit = 10;

const fields = indexDataMappings.reduce((accum: any, curr: any) => {
  const properties = Object.keys(curr.properties);
  for (let i = 0; i < properties.length; i++) {
    properties[i] = properties[i] + ".value";
  }

  return accum.concat(properties);
}, []);

export const search = async (query: string) => {
  const { hits } = await client.search({
    index: "*",
    body: {
      query: {
        multi_match: {
          query,
          fields,
        },
      },
      size: searchLimit,
    },
  });

  const data: any = {};

  hits.hits.map(({ _index, _source }) => {
    // @ts-ignore
    const category = indexTitleMapping[_index];

    if (!Object.keys(data).includes(category)) {
      data[category] = [];
    }

    data[category].push(_source);
  });

  return data;
};
