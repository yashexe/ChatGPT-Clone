import chatgptImg from '../assets/chatgpt.png'
import githubImg from '../assets/github.png'

export const Header = () =>  {

    return (
        <div className="header">
        <div className="icons">
            <a href="/">
                <img src={chatgptImg} alt="Homepage"/>
            </a>
            <a href="https://github.com/yashexe">
                <img src={githubImg} alt="GitHub Link"/>
            </a>
        </div>
        <p className='title'><b>GPT3.5 Turbo</b> by yashexe</p>
        </div>
    );
}