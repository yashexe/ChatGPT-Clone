import { Bubble } from './Bubble'

export const GPTResponse = ({ bubbles }) => {
  return (
    <div className='gpt-response'>
      {bubbles.map((bubble, index) => (
        <Bubble key={`${bubble.type}-${index}`} text={bubble.text} type={bubble.type} />
      ))}
    </div>
  )
}
