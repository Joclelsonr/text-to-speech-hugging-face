import { Client } from "@gradio/client";

export async function POST(request: Request): Promise<Response> {
  const requestBody = await request.json();
  const client = await Client.connect("k2-fsa/text-to-speech");
  const result = await client.predict("/process", {
    language: "Portuguese",
    repo_id: "csukuangfj/kokoro-en-v0_19|11 speakers",
    text: requestBody.input,
    // sid: "Hello!!",
    speed: 0.1,
  });

  console.log(result.data);

  return new Response(result as any);
}
