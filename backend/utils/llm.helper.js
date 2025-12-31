import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function rewriteArticle(original, ref1, ref2, urls = []) {
  const prompt = `
Original Article:
${original}

Reference Article 1:
${ref1}

Reference Article 2:
${ref2}

Rewrite original article:
- Improve SEO & readability
- Structure like references
- Use headings and sections
- DO NOT copy text
- Keep facts same

Add:

References:
${urls.map((u, i) => `${i + 1}. ${u}`).join("\n")}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }]
  });

  return response.choices[0].message.content;
}
