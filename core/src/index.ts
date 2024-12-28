import express, { Express } from "express";
import routes from "./routes";
import cors from "cors";
import {
  createIndexes,
  deleteAllIndexes,
  indexData,
} from "./scripts/indexData";
import { DefaultPort, ClientUrl } from "../config";

const app: Express = express();
const port = DefaultPort || 3000;

const corsOptions = {
  origin: ClientUrl,
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));

(async function () {
  await deleteAllIndexes();
  await createIndexes();
  await indexData();
})();

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
