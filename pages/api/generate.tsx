import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function opendavi(req: any, res: any) {
  const { search } = req.body;
  console.log(search);
  // const completion = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: generatePrompt(search),
  //   temperature: 0.6,
  //   max_tokens: 2048,
  // });
  // console.log(completion.data.choices[0].text);
  res.status(200).json({ result: "ssss" });
}

function generatePrompt(search: any) {
  const capitalizedAnimal =
    search[0].toUpperCase() + search.slice(1).toLowerCase();
  return capitalizedAnimal;
}
