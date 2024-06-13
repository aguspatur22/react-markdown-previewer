import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://github.com/aguspatur22), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo](https://www.svgrepo.com/show/354259/react.svg)
`

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div className="header">
        <h1>Markdown Previewer</h1>
        <p>Write markdown and see the preview!</p>
      </div>
      <div className="container">
        <textarea
          className="markdown-textarea"
          name="editor"
          id="editor"
          onChange={(e) => setMarkdownText(e.target.value)}
          value={markdownText}
        ></textarea>
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default App
