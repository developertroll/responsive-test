import { MongoClient } from "mongodb";

export async function GET() {
  const client = await MongoClient.connect(process.env.db_url);
  const db = client.db("resChat");
  const collection = db.collection("users");
  const result = await collection.find({}).toArray();
  client.close();
  console.log(result);
  return Response.json(result);
}
