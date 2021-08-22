import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://mongodbuser1:cZOE1IRc8dCBI3kw@cluster0.l0epl.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
