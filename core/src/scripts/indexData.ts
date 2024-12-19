import { client } from "../lib/elasticSearch";
import { jokers } from "../../data/jokers";

export const deleteAllIndexes = async () => {
  try {
    await client.indices.delete({ index: "jokers" });
    console.log("All indexes deleted successfully.");
  } catch (error) {
    console.error("Error deleting indexes:", error);
  }
};

export const createIndexes = async () => {
  // Create a new index with custom analyzer
  await client.indices.create({
    index: "jokers",
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
        properties: {
          Name: { type: "text", analyzer: "ngram_analyzer" },
          Effect: { type: "text", analyzer: "ngram_analyzer" },
          Cost: { type: "text", analyzer: "ngram_analyzer" },
          Rarity: { type: "text", analyzer: "ngram_analyzer" },
          UnlockRequirement: { type: "text", analyzer: "ngram_analyzer" },
          Type: { type: "text", analyzer: "ngram_analyzer" },
          Image: { type: "text" },
        },
      },
    },
  });

  console.log("Index created successfully.");
};

export const indexData = async () => {
  for (const joker of jokers.data) {
    await client.index({
      index: "jokers",
      body: joker,
    });
  }

  // Refresh the index
  await client.indices.refresh({ index: "jokers" });

  console.log("Data indexed successfully");
};
