import { MongoClient } from "mongodb";

export async function GET(request, { params }) {
  const client = await MongoClient.connect(process.env.db_url);
  const db = client.db("resChat");
  const collection = db.collection("users");
  const result = await collection
    .find({ userIdx: parseInt(params.userIdx) })
    .toArray();
  return Response.json(result);
}
