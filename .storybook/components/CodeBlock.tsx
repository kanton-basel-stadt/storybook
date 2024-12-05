import React from 'react'
import hljs from 'highlight.js'

interface CodeBlockProps {
  children: string
  className?: string
}

/**
 * Highlights code using Highlight.js.
 * @param code - The code to highlight.
 * @param language - The language of the code.
 * @returns The highlighted HTML string.
 */
const highlightCode = (code: string, language?: string): string => {
  if (language && hljs.getLanguage(language)) {
    return hljs.highlight(code, { language }).value
  }
  return hljs.highlightAuto(code).value
}

/**
 * Custom CodeBlock component for syntax highlighting.
 * @param props - Component props.
 * @returns JSX.Element
 */
const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = className?.replace('language-', '') || ''

  const highlightedCode = highlightCode(children.trim(), language)

  async function copyCode() {
    const type = "text/plain"
    const blob = new Blob([children.trim()], { type })
    const data = [new ClipboardItem({ [type]: blob })]
    await navigator.clipboard.write(data)
  }

  if (children.trim().includes("\n")) {
    // Multi-line child, probably not inline
    return (
      <div className="mb-20">
        <pre className={ `hljs ${ language } block mb-5` }>
          <code dangerouslySetInnerHTML={ {__html: highlightedCode} }/>
        </pre>

        <div className="flex justify-end">
          <button className="font-sans button is-sm" onClick={copyCode}>
            Copy code
          </button>
        </div>
      </div>
    )
  }

  return (
    <pre className={ `hljs ${ language} inline`}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  )
}

export default CodeBlock
