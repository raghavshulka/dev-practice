import { config } from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
config({
  path: "./.env",
});
// console.log(process.env.GOOGLE_API_KEY)

const model = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  maxOutputTokens: 2048,
});

//no input prompt
// const noinputprompt = new ChatPromptTemplate({
//   inputVariables: [],
//   template: "tell me about you",
// });
// const formatedinput = await noinputprompt.format()

// console.log("output=>",formatedinput);


// const prompt = ChatPromptTemplate.fromMessages([
//   ["comedian", "Tell me a short joke "],
// ]);

// const res = await model.invoke([["human", "hi"]]);
// // console.log(res);
