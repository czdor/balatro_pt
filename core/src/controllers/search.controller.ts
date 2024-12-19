import { search } from "../services/search";
import { Request, Response } from "../../types";

export const searchJokers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { query } = req.query; // TODO: validate params

  try {
    const results = await search(query as string);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while searching." });
  }
};
