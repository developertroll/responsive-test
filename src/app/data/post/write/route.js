import { MongoClient } from "mongodb";
import { pipeline, Writable } from "stream";
import { promisify } from "util";

const pipe = promisify(pipeline);

export async function POST(request) {
  let body = "";
  await pipe(
    request.body,
    new Writable({
      write(chunk, encoding, callback) {
        body += chunk.toString();
        callback();
      },
    })
  );

  const data = JSON.parse(body);

  const client = await MongoClient.connect(process.env.db_url);
  const db = client.db("resChat");
  const collection = db.collection("chatRoom");
  const result = await collection.insertOne(data);
  client.close();
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
