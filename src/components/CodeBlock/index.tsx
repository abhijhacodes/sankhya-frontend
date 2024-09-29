"use client";

import SyntaxHighlighter from "react-syntax-highlighter";

const CodeBlock = ({ children, language }: { children: string; language: string }) => {
    return <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>;
};

export default CodeBlock;
