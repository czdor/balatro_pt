import dotenv from "dotenv";
dotenv.config();

export const ClientUrl = "http://localhost";
export const DefaultPort = 8000;
export const elasticsearch = {
  node: process.env.ELASTICSEARCH_NODE ?? "http://elasticsearch:9200",
  username: process.env.ELASTICSEARCH_USERNAME ?? "elastic",
  password: process.env.ELASTICSEARCH_PASSWORD ?? "new_password",
};
export const defaultLanguage = "en";
