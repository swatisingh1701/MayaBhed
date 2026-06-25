import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export default async function handler(req, res) {
  try {

    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed"
      });
    }

    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        error: "Text is required"
      });
    }

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `
You are MayaBhed.

Return only JSON.

{
 "classification":"",
 "confidence":0,
 "summary":"",
 "reasons":[],
 "verificationAdvice":[]
}
`
          },
          {
            role: "user",
            content: text
          }
        ],
        temperature: 0.3
      });

    return res.status(200).json({
      success: true,
      result: completion.choices[0].message.content
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Analysis failed"
    });

  }
}