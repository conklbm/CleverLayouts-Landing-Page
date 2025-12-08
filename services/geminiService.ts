import { GoogleGenAI } from "@google/genai";

export const generateSampleAudit = async (url: string, focusArea: string): Promise<string> => {
  if (!process.env.API_KEY) {
    // Fallback for demo purposes if no key is provided
    return `## Quick Audit for ${url}\n\n**First Impression:** The headline lacks punch. It talks about "solutions" instead of "problems solved."\n\n**Optimization Tip:** Change your CTA color to contrast with the background. Currently, it blends in.\n\n**${focusArea} Analysis:** There is too much friction here. Simplify the form fields from 5 to 2.`;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      You are a world-class conversion rate optimization (CRO) expert. 
      The user wants a "mini-audit" for a landing page at this URL: ${url}.
      
      Focus specifically on this area: ${focusArea}.
      
      Provide a 3-bullet point "Roast" of what they are likely doing wrong based on common industry mistakes for this type of page, and 1 actionable high-impact fix.
      Keep the tone professional but punchy, direct, and slightly ruthless (to sell the need for a full audit).
      
      Format with Markdown.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate analysis. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate audit");
  }
};