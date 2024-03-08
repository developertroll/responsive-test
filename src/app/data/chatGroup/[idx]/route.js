import { MongoClient } from "mongodb";
export async function GET(request, { params }) {
  const client = await MongoClient.connect(process.env.db_url);
  const db = client.db("resChat");
  const collection = db.collection("chatRoom");
  const result = await collection
    .find({ chatGroupIdx: parseInt(params.idx) })
    .toArray();
  return Response.json(result);
}
