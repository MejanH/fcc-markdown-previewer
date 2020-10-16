import Head from "next/head";
import { useState } from "react";
import marked from "marked";

export default function Home() {
  marked.setOptions({
    breaks: true,
  });

  const [markdown, setMarkdown] = useState(
    `# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](/image.jpg)
`
  );

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="heading">Markdown to HTML</h1>
        <div className="tool">
          <div className="input">
            <textarea
              id="editor"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              cols={80}
              rows={30}
            ></textarea>
          </div>
          <div className="preview">
            <div
              className="html"
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            />
          </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">
          by <strong>Muhammad Mejanul Haque</strong>
        </p>
      </footer>
    </div>
  );
}
