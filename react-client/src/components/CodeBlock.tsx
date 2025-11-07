import { useState } from 'react';
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

interface CodeBlockProps {
    code: string;
    language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        // Extract the actual code from the markdown string
        const codeMatch = code.match(/```[\w]*\n([\s\S]*?)\n```/);
        const actualCode = codeMatch ? codeMatch[1] : code;

        try {
            await navigator.clipboard.writeText(actualCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // Format code with proper language syntax if not already in markdown format
    const formattedCode = `\`\`\`${language}${code}\`\`\``;

    return (
        <div className="relative group">
            <button
                onClick={handleCopy}
                className="cursor-pointer absolute top-3 right-3 px-3 py-1.5 bg-[#3d4451] hover:bg-[#4f5666] text-white border border-[#5c677d] transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2 text-sm font-medium z-10"
                aria-label="Copy code to clipboard"
            >
                {copied ? (
                    <>
                        <Icon icon="mdi:check" width="16" height="16" />
                        Copied!
                    </>
                ) : (
                    <>
                        <Icon icon="mdi:content-copy" width="16" height="16" />
                        Copy
                    </>
                )}
            </button>
            <ReactMarkdown
                rehypePlugins={[rehypeHighlight]}
                remarkPlugins={[remarkGfm]}
            >
                {formattedCode}
            </ReactMarkdown>
        </div>
    );
}