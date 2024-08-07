import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

export const getOpenAIResponse = async (prompt) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-3.5-turbo', // Specify the model here
        messages: [{ role: 'user', content: prompt }], // Adjust for chat model
        max_tokens: 100, // Adjust as needed
        temperature: 0.5, // Adjust as needed
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
};
