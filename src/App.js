import './styles/App.css'
import { Header } from './components/Header'
import { GPTResponse } from './components/GPTResponse'
import { Chatbox } from './components/Chatbox'

import { useState } from 'react'

function App() {
  const [bubbles, setBubbles] = useState([])

  const addBubble = (text, type) => {
    console.log(`Adding bubble: ${text}, type: ${type}`); // Debugging
    setBubbles([...bubbles, { text, type }])
  }

  return (
    <div className="App">
      <Header />
      <GPTResponse bubbles={bubbles} />
      <Chatbox onAddBubble={addBubble} />
    </div>
  )
}

export default App
