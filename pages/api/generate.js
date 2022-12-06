import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix =
`
generate a post written in the style of Naval Ravikant. Don't just list the points.  Please make sure the post goes in-depth on the topic and shows that the writer did their research. Dont mention anything about the author.


  `

const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.8,
    max_tokens: 2500,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  // I build Prompt #2.
  const secondPrompt =
  `
  write a tweet thread from the text below with atleast 6 tweets in the style of Shann Puri whose twitter id of @shaanvp. Please make sure the post goes in-depth on the topic and shows that the writer did their research. Make the first few tweets very curious so that the user continues to read the next tweets. Dont mention anything about the author. remove urls if present. Include a new line after each tweet


  `
  console.log(`API: ${secondPrompt}${basePromptOutput.text}`)
  // I call the OpenAI API a second time with Prompt #2
  const secondPromptCompletion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: `${secondPrompt}${basePromptOutput.text}`,
    // I set a higher temperature for this one. Up to you!
    temperature: 0.85,
		// I also increase max_tokens.
    max_tokens: 1250,
  });

  // Get the output
  const secondPromptOutput = secondPromptCompletion.data.choices.pop();

  // Send over the Prompt #2's output to our UI instead of Prompt #1's.
  res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;
