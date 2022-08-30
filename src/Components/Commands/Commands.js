import { About, Links, Projects, Tech } from "./Files";

const HelpCommand = () => {
    return (
        <>
            <br/>
            <span>&#xf778; Help</span>
            <br />
            <br />
            <span><span style={{color: "#458588"}}>ls:</span> list the current directory</span><br />
            <span><span style={{color: "#458588"}}>clear:</span> clears the terminal</span><br />
            <span><span style={{color: "#458588"}}>cat</span> <span style={{fontStyle: "italic", color: "#cc241d"}}>file</span>: display contents of file</span><br></br>
        </>
    );
}

const LsCommand = (args) => {
    return (
        <>
            <br/>
            <span><span style={{color: "var(--gruv-blue)"}}>&#xe5fe;</span> louisc-me <span style={{color: "var(--gruv-red)"}}>&#xe726;</span> <span style={{color: "var(--gruv-light-yellow)"}}>master</span></span><br/>
            <span><span style={{color: "var(--gruv-blue)"}}>├──</span> <span style={{color: "var(--gruv-red)"}}>&#xe73e;</span> about.md</span><br/>
            <span><span style={{color: "var(--gruv-blue)"}}>├──</span> <span style={{color: "var(--gruv-orange)"}}>&#xe736;</span> links.html</span><br/>
            <span><span style={{color: "var(--gruv-blue)"}}>├──</span> <span style={{color: "var(--gruv-light-yellow)"}}>&#xe74e;</span> tech.js</span><br/>
            <span><span style={{color: "var(--gruv-blue)"}}>└──</span> <span style={{color: "var(--gruv-fg)"}}>&#xe7a8;</span> projects.rs</span><br/>
        </>
    );
}

const CatCommand = (args) => {
    if (args.length === 1) {
        return <span>Error: cat: no file supplied.</span>
    }

    if (args[1][0] === "-") {
        return <span>Error: cat: invalid option "{args[1]}"</span>
    }

    switch (args[1]) {
        case "about.md":
            return <><br/>{About}</>;
        case "links.html":
            return <><br/>{Links}</>;
        case "tech.js":
            return <><br/>{Tech}</>;
        case "projects.rs":
            return <><br/>{Projects}</>;
        
        default:
            return <span>Error: cat: no such file "{args[1]}"</span>

    }
}

const UnknownCommand = (args) => {
    return (
        <>
        <br />
        <span>Error: Command "{args}" does not exist</span>
        </>
    )
}

const CommandRunner = ({input, inputClearer, ...props}) => {
    let result = <></>

    input = input.trim()

    let args = input.split(/\s+/);

    switch (args[0]) {
        case "":
            break;
        case "help":
            result = HelpCommand();
            break;
        case "ls":
            result = LsCommand(args);
            break;
        case "cat":
            result = CatCommand(args);
            break;
        case "clear":
            inputClearer();
            break;
        default:
            result = UnknownCommand(args);
            break;
    }

    return (
        <span>{result}</span>
    )
}

export {CommandRunner}