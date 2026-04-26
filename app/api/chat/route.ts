import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, messages } = body;

    const conversation = messages
      ? messages.map((m: any) => ({
          role: m.role,
          content: m.parts?.map((p: any) => p.text).join("") || "",
        }))
      : message
      ? [
          {
            role: message.role,
            content: message.parts?.map((p: any) => p.text).join("") || "",
          },
        ]
      : [];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: conversation,
    });

    const reply =
      completion.choices[0]?.message?.content || "No response";

    return new Response(
      JSON.stringify({
        messages: [
          {
            role: "assistant",
            parts: [{ type: "text", text: reply }],
          },
        ],
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("ERROR:", error);

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}