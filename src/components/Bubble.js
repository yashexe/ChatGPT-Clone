import Typewriter from 'typewriter-effect'

export const Bubble = ({ text, type }) => {
  console.log("Rendering bubble:", text, type); // Debugging

  return (
    <div className={`bubble-wrapper ${type}`}>
      <div className="bubble-text">
        <Typewriter
          onInit={typewriter => typewriter.typeString(text).start()}
          options={{ typeSpeed: 50, delay: 1 }}
        />
      </div>
    </div>
  )
}


