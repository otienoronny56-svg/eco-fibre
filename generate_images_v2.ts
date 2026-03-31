import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImages() {
  const prompts = [
    {
      id: "mission",
      prompt: "A happy Kenyan family in a modern home in Rongo, Kenya, sitting together on a sofa, using high-speed fiber internet on their laptops and tablets. The family members are of Kenyan ethnicity, smiling and engaged. Warm, bright, realistic photography style. 16:9 aspect ratio."
    },
    {
      id: "vision",
      prompt: "A group of young, diverse Kenyan tech professionals (men and women) in a modern office space in Kisii, Kenya, looking at a large screen showing a map of connected fiber networks across South Nyanza. They look inspired and forward-thinking. High quality, professional photography. 16:9 aspect ratio."
    },
    {
      id: "impact",
      prompt: "A young Kenyan student in a school uniform in a classroom in Rongo, Kenya, smiling brightly while using a laptop connected to high-speed internet. Other students are in the background. The scene shows the positive impact of digital connectivity on education. Realistic, inspiring photography. 16:9 aspect ratio."
    }
  ];

  const results: Record<string, string> = {};

  for (const p of prompts) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: p.prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: "1K"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          results[p.id] = part.inlineData.data;
        }
      }
    } catch (error) {
      console.error(`Error generating ${p.id}:`, error);
    }
  }

  console.log("GENERATED_IMAGES_START");
  console.log(JSON.stringify(results));
  console.log("GENERATED_IMAGES_END");
}

generateImages();
