import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import SyntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/zenburn'

type props = {
    value: string;
    language: string;
}

export const CodeBlock: React.FunctionComponent<props> = ({
    value,
    language
}) => (
    <SyntaxHighlighter
        language={language || ''}
        style={SyntaxStyle}
    >{value}</SyntaxHighlighter>
)
