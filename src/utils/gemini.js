const { GoogleGenerativeAI } = require("@google/generative-ai");

export const geminiResponse = async (message) => {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    return text;

  } catch (error) {
    console.error("Error with Gemini API");
    console.error(error);
    return null;
  }
};




// async function run() {

// }

// run();
