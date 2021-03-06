import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const { projectName } = req.query;

    let client;
    try {
      client = await MongoClient.connect(process.env.MONGO);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
    }

    const db = client.db();

    let result;
    try {
      result = await db
        .collection("data")
        .find({ projectName: projectName })
        .toArray();
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message false!" });
      return;
    }

    client.close();
    res.status(201).json(result);
  }
}

export default handler;
