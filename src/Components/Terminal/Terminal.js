import { useRef, useState } from 'react';
import Prompt from '../Prompt/Prompt';
import './Terminal.css'

const Terminal = ({...props}) => {

    // show the help message on page load
    const [previousInputs, setPreviousInputs] = useState(["help"]);

    const [currentInput, setCurrentInput] = useState("");

    const inputRef = useRef();

    const clearInput = () => {
        setTimeout(() => setPreviousInputs([]), 0)
    }

    const setInputFocused = (e) => {
        
        e.preventDefault();

        inputRef.current.focus();
    }

    const submitCommand = (e) => {

        if (e.keyCode === 13) {
            setPreviousInputs([...previousInputs, e.target.value]);

            e.target.value="";
            setCurrentInput(e.target.value);
        } else if (e.keyCode === 37 || e.keyCode === 37) {
            e.preventDefault();
        }
    }

    const handleInput = (e) => {
        e.preventDefault();

        setCurrentInput(e.target.value);
    }

    return(
        <div className='terminal' onClick={setInputFocused}>
            <input style={{position: "absolute", opacity: 0}} type={"text"} ref={inputRef} onChange={handleInput} onKeyDown={submitCommand}></input>

            <div className="header">
                <div className="button-container">
                    <span className="button b3">&#xf111; </span>
                    <span className="button b2">&#xf111; </span>
                    <span className="button b1">&#xf111; </span>
                </div>

                <div className="win-title">
                    <span>Terminal - louis@system</span>
                </div>

                <div style={{display: "hidden"}}>
                    <span className="button b3">&#xf111; </span>
                    <span className="button b2">&#xf111; </span>
                    <span className="button b1">&#xf111; </span>
                </div>
            </div>

            <div className='row-container'>
                { previousInputs.map( (str, key) => <Prompt inputText={str} key={key} isSubmitted={true} inputClearer={() => clearInput()}/>) }
                <Prompt inputText={currentInput} isSubmitted={false} inputClearer={clearInput}/>
            </div>
        </div>
    )
}

export default Terminal;