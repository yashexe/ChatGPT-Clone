import './styles/App.css'
import { Header } from './components/Header'
import { GPTResponse } from './components/GPTResponse'
import { Chatbox } from './components/Chatbox'

import { useState } from 'react'

function App() {
  const [response, setResponse] = useState('')

  return (
    <div className="App">
      <Header />
      <GPTResponse response={response} />
      <Chatbox onResponse={setResponse} />
    </div>
  )
}

export default App