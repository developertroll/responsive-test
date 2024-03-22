import { MongoClient } from "mongodb";
export async function GET() {
  const client = await MongoClient.connect(process.env.db_url);
  const db = client.db("resChat");
  const collection = db.collection("chatRoom");
  const result = await collection.find({}).toArray();
  return Response.json(result);
}
