import { client } from "../lib/elasticSearch";

export const search = async (query: string) => {
  const { hits } = await client.search({
    index: "jokers",
    body: {
      query: {
        multi_match: {
          query,
          fields: [
            "Name",
            "Effect",
            "Cost",
            "Rarity",
            "UnlockRequirement",
            "Type",
          ],
          fuzziness: "AUTO", // Enables fuzzy search
        },
      },
    },
  });

  return hits.hits.map((hit) => hit._source);
};
