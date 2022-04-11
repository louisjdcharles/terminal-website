import './Prompt.css'

const Prompt = ({inputText, isSubmitted, ...props}) => {

    const renderCursor = () => {
        if (!isSubmitted) {
            return (
                <span className='Cursor'>|</span>
            );
        }
    }

    const renderOutput = () => {
        if (isSubmitted) {
            return (
                <span>Command Output!</span>
            )
        }
    }

    const renderInput = () => Array.from(inputText).map((v, k) => <span key={k}>{v !== " " ? v : <>&nbsp;</>}</span>)

    return (
        <div className='Prompt'>
            <span style ={{color: "#b8bb26"}}>➜ </span>
            <span style= {{color: "#458588"}}>louis </span>
            <span style= {{color: "#fabd2f"}}>~/louisc-me </span>
            <span style= {{color: "#cc241d"}}>&#xe725; </span>
            <span style= {{color: "#83a598"}}>{"{"}</span><span style ={{color: "#cc241d"}}>master</span><span style ={{color: "#83a598"}}>{"}"}</span>
            <span style= {{color: "#458588"}}> &#xfb26; </span>
            {renderInput()}{renderCursor()}<br />
            {renderOutput()}
        </div>
    )
}

export default Prompt;