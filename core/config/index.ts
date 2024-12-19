import dotenv from "dotenv";
dotenv.config();

export const ClientUrl = "http://localhost:5173";
export const DefaultPort = 8000;
export const elasticsearch = {
  node: process.env.ELASTICSEARCH_NODE ?? "",
  username: process.env.ELASTICSEARCH_USERNAME ?? "",
  password: process.env.ELASTICSEARCH_PASSWORD ?? "",
};
