import es from "@elastic/elasticsearch";
import { elasticsearch } from "../../config";
import { sleep } from "./misc";

export const getClient = async () => {
  await sleep(15 * 1000);

  return new es.Client({
    node: elasticsearch.node,
    auth: {
      username: elasticsearch.username,
      password: elasticsearch.password,
    },
  });
};
