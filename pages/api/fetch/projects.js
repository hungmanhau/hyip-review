import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    let client;
    try {
      client = await MongoClient.connect(process.env.MONGO);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
    }

    const db = client.db();

    try {
      const result = await db.collection("data").find().toArray();
      console.log({ result });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message false!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Successfully connected to database " });
  }
}

export default handler;
