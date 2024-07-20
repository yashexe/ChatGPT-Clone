import Typewriter from 'typewriter-effect'

export const GPTResponse = ({response}) => {
    return (
        <div className='gpt-response'>
            {response && (
            <div className="response">
                <Typewriter key={response}
                onInit={typewriter => typewriter.typeString(response).start()}
                options={{typeSpeed: 50, delay: 1}}
                />
            </div>
            )}
        </div>
    );
}