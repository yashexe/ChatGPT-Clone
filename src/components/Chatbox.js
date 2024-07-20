import { getOpenAIResponse } from '../services/openAIService'

import { useState } from 'react'

export const Chatbox = ({ onResponse }) => {
  const [input, setInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    try {
      setInput('')
      const result = await getOpenAIResponse(input)
      onResponse(result)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  //Allow for text area to be submitted with "Enter" key, unless using Shift+Enter
  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="chatbox">
      <form onSubmit={handleSubmit} className='chatbox-form'>
        <textarea id='promptarea' placeholder="Enter your prompt here."
          value={input} 
          onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown}
        />
        <button className={input ? 'input-button-highlighted' : 'input-button'} type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}