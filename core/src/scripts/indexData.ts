import { client } from "../lib/elasticSearch";
import { indexDataMappings, indexes } from "./dataMappings";

export const deleteAllIndexes = async () => {
  for (const { indexTitle } of indexDataMappings) {
    try {
      await client.indices.delete({ index: indexTitle });
      console.log(`Index ${indexTitle} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting index: ${indexTitle}`);
    }
  }
};

export const createIndexes = async () => {
  // Create a new index with custom analyzer
  for (const { indexTitle, properties } of indexDataMappings) {
    await client.indices.create({
      index: indexTitle,
      body: {
        settings: {
          analysis: {
            tokenizer: {
              ngram_tokenizer: {
                type: "ngram",
                min_gram: 1,
                max_gram: 2,
                token_chars: ["letter", "digit"],
              },
            },
            filter: {
              lowercase: {
                type: "lowercase",
              },
            },
            analyzer: {
              ngram_analyzer: {
                type: "custom",
                tokenizer: "ngram_tokenizer",
                filter: ["lowercase"],
              },
            },
          },
        },
        mappings: {
          properties,
        },
      },
    });
  }

  console.log("Indexes created successfully.");
};

export const indexData = async () => {
  // index data
  for (const { indexTitle, data } of indexDataMappings) {
    for (const body of data) {
      await client.index({
        index: indexTitle,
        body,
      });
    }
  }

  // Refresh indexes
  for (const index of indexes) {
    await client.indices.refresh({ index });
  }

  console.log("Data indexed successfully");
};
