import type { GuideMetadata } from '../../../types/GuideMetadata';
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import 'highlight.js/styles/atom-one-dark.css';

export const sections = [
    { id: "understanding-interface", title: "Understanding the Interface" },
    { id: "using-sidebar", title: "Using the Sidebar" },
    { id: "search-functionality", title: "Search Functionality" },
    { id: "code-blocks", title: "Understanding Code Blocks" },
    { id: "page-navigation", title: "Page Navigation" }
]

export const metadata: GuideMetadata = {
    id: 'welcome-howtouse',
    title: 'How to Use Code Atlas',
    category: 'WELCOME',
    path: '/alldocs/welcome/howtouse',
    keywords: ['how to use', 'tutorial', 'guide', 'instructions', 'navigation', 'getting started', 'sidebar', 'search', 'code blocks'],
    description: 'Learn how to navigate Code Atlas, use the search feature, understand code blocks, and make the most of all the available features.',
    searchableContent: `
        How to Use Code Atlas
        Master the Code Atlas interface and learn how to navigate effectively through all the documentation.
        Understanding the Interface
        Code Atlas has a clean three-column layout designed to help you focus on learning without distractions.
        Using the Sidebar
        The left sidebar is your navigation hub. Browse through categories like Get Started, Devices, App Logic, and Code Atlas Tools.
        Search Functionality
        Press the forward slash key to open search instantly. Type your query and get real-time results.
        Understanding Code Blocks
        Code blocks show you exactly what commands to run in your terminal. Learn how to copy and execute code examples.
        Page Navigation
        Use the On this page menu on the right to jump between sections quickly.
    `.trim()
};

const npmCodeExample = 

`
# Install a single package
npm install react

# Install multiple packages at once
npm install react react-dom react-router-dom

# Install a package as a dev dependency
npm install --save-dev typescript
`;

export default function DocsHowToUse() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>
            <h1 className="text-3xl font-semibold mt-2 mb-4">How to Use Code Atlas</h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Master the interface and learn how to navigate like a pro
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Code Atlas is designed to be simple and intuitive, but knowing a few tricks will help you learn faster
                and find exactly what you need. Let's walk through how everything works!
            </p>

            {/* Understanding the Interface */}
            <h2 id="understanding-interface" className="text-2xl font-semibold mt-12 mb-4">
                Understanding the Interface
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Code Atlas has a clean, three-column layout designed to help you focus on learning without distractions.
                Here's what each section does:
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] flex gap-4 items-start">
                    <Icon icon="mdi:view-column" width="34" height="34" className="text-[#554DE2] shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Left Sidebar - Navigation</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            This is your main navigation hub. Browse through categories like "Get Started," "Devices," "App Logic,"
                            and "Code Atlas Tools." Click on any topic to view its documentation. The active page is highlighted
                            in purple so you always know where you are.
                        </p>
                    </div>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] flex gap-4 items-start">
                    <Icon icon="mdi:file-document" width="34" height="34" className="text-[#554DE2] shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Center Content - Main Documentation</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            The middle section is where you'll spend most of your time reading. All the guides, tutorials,
                            and code examples are displayed here. Scroll through to read everything, or use the right sidebar
                            to jump to specific sections.
                        </p>
                    </div>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] flex gap-4 items-start">
                    <Icon icon="mdi:list-box-outline" width="34" height="34" className="text-[#554DE2] shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Right Sidebar - "On This Page"</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            This handy menu shows all the major sections on the current page. Click any section to instantly
                            jump to it—perfect for quickly finding specific information without scrolling. The current section
                            you're viewing is highlighted in purple.
                        </p>
                    </div>
                </div>
            </div>

            {/* Using the Sidebar */}
            <h2 id="using-sidebar" className="text-2xl font-semibold mt-12 mb-4">
                Using the Sidebar Navigation
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                The sidebar is organized into clear categories that group related topics together. Here's how to make
                the most of it:
            </p>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Start with "Get Started"</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            If you're brand new, begin with the "Get Started" section at the top. It explains what Code Atlas
                            is, how to use it (you're here now!), and gives you a summary of what's available.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Browse by Device Type</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Under "Devices," you'll find guides for Web Development (websites), Mobile (phone apps), and Desktop
                            (computer applications). Click on the platform you want to build for.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Explore App Logic</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Ready to build the backend? The "App Logic" section covers Cloud platforms, Backend development,
                            Deployment strategies, and Data Analytics. These guides help you handle everything behind the scenes.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Check Out the Tools</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Under "Code Atlas Tools," you'll find our API Finder (to discover useful APIs) and Planning Agent
                            (to help you choose the right tech stack). These save you tons of research time!
                        </p>
                    </div>
                </div>
            </div>

            {/* Search Functionality */}
            <h2 id="search-functionality" className="text-2xl font-semibold mt-12 mb-4">
                Search Functionality
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Sometimes you know exactly what you're looking for. That's where search comes in handy!
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-6">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:magnify" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-3">How to Search</h3>
                        <div className="space-y-3 text-[#4B5563] leading-relaxed">
                            <p>
                                <strong>Keyboard Shortcut:</strong> Press the{" "}
                                <kbd className="px-2 py-1 bg-white rounded border border-gray-300 font-mono text-sm">/</kbd>
                                {" "}key anywhere on the site to instantly open the search modal.
                            </p>
                            <p>
                                <strong>Click to Search:</strong> You can also click the search bar at the top of the page.
                            </p>
                            <p>
                                <strong>Type Your Query:</strong> Start typing what you're looking for—like "React hooks,"
                                "deploy to AWS," or "Python basics." Results appear in real-time as you type!
                            </p>
                            <p>
                                <strong>Navigate Results:</strong> Click on any result to jump directly to that guide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:check-circle" width="20" height="20" className="text-green-600" />
                        Good Search Examples
                    </h4>
                    <ul className="text-sm text-[#4B5563] space-y-1">
                        <li>• "React getting started"</li>
                        <li>• "deploy to Vercel"</li>
                        <li>• "Node.js backend"</li>
                        <li>• "mobile app development"</li>
                    </ul>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:information" width="20" height="20" className="text-blue-600" />
                        Search Tips
                    </h4>
                    <ul className="text-sm text-[#4B5563] space-y-1">
                        <li>• Be specific but simple</li>
                        <li>• Use technology names</li>
                        <li>• Try different keywords</li>
                        <li>• Check spelling if no results</li>
                    </ul>
                </div>
            </div>

            {/* Understanding Code Blocks */}
            <h2 id="code-blocks" className="text-2xl font-semibold mt-12 mb-4">
                Understanding Code Blocks
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Throughout Code Atlas, you'll see code blocks that show you exactly what commands to run in your terminal
                or what code to write. Here's how to read and use them on your laptop:
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-6">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:console" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">What Are Code Blocks?</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            Code blocks are the dark boxes with colored text that show commands or code snippets. They're
                            formatted with syntax highlighting to make them easier to read. You can copy the code directly
                            from these blocks and paste it into your terminal or code editor!
                        </p>
                    </div>
                </div>
            </div>

            <p className="mb-4 leading-relaxed">
                Here's an example of what code blocks look like. This one shows how to install packages using npm
                (Node Package Manager). <strong>Hover over the code block and click the "Copy" button</strong> in the
                top-right corner to copy the code to your clipboard!
            </p>

            <div className="mb-6">
                <CodeBlock code={npmCodeExample} language="bash" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-3">How to Use Code Blocks</h3>
                        <ol className="space-y-2 text-[#4B5563]">
                            <li className="leading-relaxed">
                                <strong>1. Open Your Terminal:</strong> On Windows, use Command Prompt or PowerShell.
                                On Mac/Linux, use Terminal. VS Code has a built-in terminal you can use too!
                            </li>
                            <li className="leading-relaxed">
                                <strong>2. Copy the Command:</strong> Hover over the code block and copy the text. Don't
                                include the <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">#</code> symbol—that's
                                just a comment explaining what the command does.
                            </li>
                            <li className="leading-relaxed">
                                <strong>3. Paste and Run:</strong> Paste the command into your terminal and press Enter.
                                Wait for it to finish (you might see a progress bar or loading animation).
                            </li>
                            <li className="leading-relaxed">
                                <strong>4. Check for Success:</strong> If everything worked, you'll see a success message.
                                If there's an error, read the message carefully—it usually tells you what went wrong!
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Page Navigation */}
            <h2 id="page-navigation" className="text-2xl font-semibold mt-12 mb-4">
                Navigating Within a Page
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Once you're on a guide, there are a few ways to move around and find specific information:
            </p>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-start gap-3">
                        <Icon icon="mdi:format-list-bulleted" width="24" height="24" className="text-[#554DE2] shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-lg mb-2">"On This Page" Menu</h3>
                            <p className="text-[#4B5563] leading-relaxed">
                                Look at the right sidebar—it lists all the major sections on the current page. Click any section
                                name to scroll directly to it. The section you're currently reading is highlighted in purple.
                                This is super helpful for long guides!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-start gap-3">
                        <Icon icon="mdi:mouse" width="24" height="24" className="text-[#554DE2] shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Smooth Scrolling</h3>
                            <p className="text-[#4B5563] leading-relaxed">
                                You can always scroll through the page normally with your mouse or trackpad. The scrollbar appears
                                when you hover over the content area. Read at your own pace—there's no rush!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-start gap-3">
                        <Icon icon="mdi:link-variant" width="24" height="24" className="text-[#554DE2] shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Internal Links</h3>
                            <p className="text-[#4B5563] leading-relaxed">
                                Throughout the guides, you'll see purple underlined links. These connect to related topics
                                or other sections. Click them to explore related content and deepen your understanding!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-8 mb-8 leading-relaxed text-[#6b7280]">
                That's it! You now know how to navigate Code Atlas like a pro. Remember, the interface is designed to stay
                out of your way so you can focus on learning. If you ever get lost, just hit that{" "}
                <kbd className="px-2 py-1 bg-gray-200 rounded border border-gray-300 font-mono text-sm">/</kbd> key
                and search for what you need. Happy learning! 🎉
            </p>
        </>
    )
}