const terminal = document.querySelector(".term");

const promptTemplate = `
<span style="color: #b8bb26;">➜</span>
<span style="color: #458588;">louis</span>
<span style="color: #fabd2f;">~/louisc-me</span>
<span style="color: #cc241d;">&#xe725;</span>
<span style="color: #83a598;">{</span><span style="color: #cc241d">master</span><span style="color: #83a598;">}</span>
<span style="color: #458588;"> &#xfb26;</span>
<input id="prompt" autocomplete="off"/>`;

const files = [ "about.md", "links.html", "tech.js", "projects.cpp" ];

let prompt;

const unknownCommand = args => {
    const msg = `<span>bash: ${args[0]}: command not found</span>`;

    return msg;
}

const help = args => {
    if (args.length == 1) {
        return `<div class="term-row">
                <span>&#xf778; Help</span><br>
                <br>
                <span><span style="color: #458588;">ls:</span> list the current directory</span><br>
                <span><span style="color: #458588;">clear:</span> clears the terminal</span><br>
                <span><span style="color: #458588;">cat</span> <span style="font-style: italic; color: #cc241d;">file</span>: display contents of file</span><br>
            </div>`
    } else {
        return `Error: help: invalid option '${args[1]}'`
    }
}

const ls = args => {
    if (args.length == 1) {
        return `<div class="term-row">
                <span><span style="color: var(--gruv-blue)">&#xe5fe;</span> louisc-me <span style="color: var(--gruv-red)">&#xe726;</span> <span style="color: var(--gruv-light-yellow)">master</span></span><br>
                <span><span style="color: var(--gruv-blue)">├──</span> <span style="color: var(--gruv-red)">&#xe73e;</span> about.md</span><br>
                <span><span style="color: var(--gruv-blue)">├──</span> <span style="color: var(--gruv-orange)">&#xe736;</span> links.html</span><br>
                <span><span style="color: var(--gruv-blue)">├──</span> <span style="color: var(--gruv-light-yellow)">&#xe74e;</span> tech.js</span><br>
                <span><span style="color: var(--gruv-blue)">└──</span> <span style="color: var(--gruv-fg)">&#xe7a8;</span> projects.rs</span><br>
            </div>`
    } else {
        if (args[1][0] === '-') {
            return `<span>Error: ls: invalid option '${args[1]}'</span>`
        }

        return `<span>Error: ls: no directory named '${args[1]}'</span>`
    }
}

const about = `<div class="term-row">
                <span>Hi! 👋 I'm Louis, a student from the UK hoping to study Maths and Computer Science at University.</span><br>
                <br>
                <span><span style="color: var(--gruv-blue)">&#xe5fe;</span> Interests</span><br>
                <span><span style="color: var(--gruv-blue)">├──</span> <span style="color: var(--gruv-yellow)">&#xfc82; </span>Maths</span><br>
                <span><span style="color: var(--gruv-blue)">├──</span> <span style="color: var(--gruv-orange)">&#xf2db; </span>Computer Science (ai, graphics, algorithms)</span><br>
                <span><span style="color: var(--gruv-blue)">├──</span> <span style="color: var(--gruv-light-blue)">&#xf11b; </span>Game Design</span><br>
                <span><span style="color: var(--gruv-blue)">├──</span> <span style="color: var(--gruv-purple)">&#xf128; </span>Problem Solving</span><br>
                    <span><span style="color: var(--gruv-blue)">└──</span> <span style="color: var(--gruv-green)">&#xfb67; </span>Science</span><br>
            </div>`;
const links = `<div class="term-row">
                <span><span style="color: var(--gruv-blue)">&#xfa9e;</span> Links</span><br>
                <span>
                    <span style="color: var(--gruv-blue)">├──</span>
                    <span style="color: var(--gruv-purple)">&#xfb6e; </span>
                    Discord: <a href="#">NullPointer#9293</a>
                </span><br>
                <span>
                    <span style="color: var(--gruv-blue)">├──</span>
                    <span style="color: var(--gruv-light-blue)">&#xfa43; </span>
                    Twitter: <a href="https://twitter.com/louisjdcharles">louisjdcharles</a>
                </span><br>
                <span>
                    <span style="color: var(--gruv-blue)">├──</span>
                    <span style="color: var(--gruv-light-grey)">&#xe709; </span>
                    GitHub: <a href="https://github.com/louisjdcharles">louisjdcharles</a></span><br>
                <span>
                    <span style="color: var(--gruv-blue)">└──</span>
                    <span style="color: var(--gruv-green)">&#xf1bc; </span>
                    Spotify: <a href="https://open.spotify.com/user/p1ehruqz4vdblluh6bl32nslq?si=0b825ceee35e4b94&nd=1">louisjdcharles</a>
                </span><br>
            </div>`;
const tech = `<div class="term-row">
                <span><span style="color: var(--gruv-blue)">&#xf493;</span> Technologies</span><br>
                <span>
                    <span style="color: var(--gruv-blue)">├──</span>
                    <span style="color: var(--gruv-blue)">&#xe7ba; </span>
                    MERN Stack (MongoDB, Express, React, NodeJS)
                </span><br>
                <span>
                    <span style="color: var(--gruv-blue)">├──</span>
                    <span style="color: var(--gruv-light-yellow)">&#xe73c; </span>
                    Very familiar with python and c#
                </span><br>
                <span>
                    <span style="color: var(--gruv-blue)">├──</span>
                    <span style="color: var(--gruv-yellow)">&#xe74e; </span>
                    Familiar with Rust, C++, JavaScript, TypeScript
                </span><br>
                <span>
                    <span style="color: var(--gruv-blue)">├──</span>
                    <span style="color: var(--gruv-light-red)">&#xe738; </span>
                    Experience using Java
                </span><br>
                <span>
                    <span style="color: var(--gruv-blue)">├──</span>
                    <span style="color: var(--gruv-light-gray)">&#xe721; </span>
                    Experience using the Unity game engine
                </span><br>
                <span>
                    <span style="color: var(--gruv-blue)">├──</span>
                    <span style="color: var(--gruv-light-orange)">&#xe706; </span>
                    Data Science and machine learning tools in python
                </span><br>
                
                <span>
                    <span style="color: var(--gruv-blue)">└──</span>
                    <span style="color: var(--gruv-green)">&#xfa62; </span>
                    Familiar with the modern OpenGL pipeline
                </span><br>
            </div>
`;
const projects = `<div class="term-row"><span>See what im working on on <a href="https://github.com/louisjdcharles">GitHub</a></span></div>`;

const clear = () => {
    terminal.innerHTML = "";
}

const cat = args => {
    if (args.length == 1) {
        return `<span>Error: cat: no file supplied.</span>`
    }

    if (args[1][0] == "-") {
        return `<span>Error: cat: invalid option '${args[1]}'</span>`
    }
    
    switch (args[1]) {
        case "about.md":
            return about;
            break;
        case "links.html":
            return links;
            break;
        case "tech.js":
            return tech;
            break;
        case "projects.rs":
            return projects;
            break;
        
        default:
            return `<span>Error: cat: no such file '${args[1]}'</span>`
            break;

    }
}

const processCommand = text => {
    text = text.trim();

    if (text !== "") {
        args = text.split(/\s+/);
        
        console.log(args);

        let msg;

        switch (args[0]) {
            case "help":
                msg = help(args);
                break;
            case "ls":
                msg = ls(args);
                break;
            case "cat":
                msg = cat(args);
                break;
            case "clear":
                clear();
                break;
            default:
                msg = unknownCommand(args);
                break;
        }
        
        if (msg !== undefined) {
            const el = document.createElement("div");
            el.className = ".term-row";

            el.innerHTML = msg;

            terminal.appendChild(el);
        }
    }

    prompt = newPrompt();
}

const newPrompt = () => {
    const el = document.createElement("div");
    el.className = ".term-row";

    el.innerHTML = promptTemplate;

    const input = el.querySelector("#prompt");

    terminal.appendChild(el);
    
    input.addEventListener("keyup", evt => {
        if (evt.keyCode === 13) {
            evt.preventDefault();

            evt.target.disabled = true;
            
            processCommand(evt.target.value);
        }
    });

    input.focus();

    return el;
}

prompt = newPrompt();
