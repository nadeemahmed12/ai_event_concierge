import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

async function generateProposal(description) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
      You are an event planning assistant.

      Based on this event:

      "${description}"

      Return ONLY valid JSON.
      Do not use markdown.
      Do not use code blocks.
      Do not include any text before or after JSON.

      {
        "venueName":"",
        "location":"",
        "estimatedCost":"",
        "whyItFits":""
      }
    `,
  });

  return response.text;
}

export default generateProposal;
