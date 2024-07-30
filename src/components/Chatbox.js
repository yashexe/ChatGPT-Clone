import { useState } from 'react'
import { getOpenAIResponse } from '../services/openAIService'

export const Chatbox = ({ onAddBubble }) => {
  const [input, setInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    try {
      onAddBubble(input, 'user');
      setInput('');
      setTimeout(async () => {
        try {
          const result = await getOpenAIResponse(input);
          onAddBubble(result, 'gpt');
        } catch (error) {
          console.error('Error fetching GPT response:', error);
        }
      }, 100); // 100ms delay
    } catch (error) {
      console.error('Error adding user bubble:', error);
    }
  }


  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="chatbox">
      <form onSubmit={handleSubmit} className='chatbox-form'>
        <textarea
          id='promptarea'
          placeholder="Enter your prompt here."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={input ? 'input-button-highlighted' : 'input-button'} type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
