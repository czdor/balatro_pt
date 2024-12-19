import es from "@elastic/elasticsearch";
import { elasticsearch } from "../../config";

export const client = new es.Client({
  node: elasticsearch.node,
  auth: {
    username: elasticsearch.username,
    password: elasticsearch.password,
  },
});
