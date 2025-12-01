import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-react", title: "What is React?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "your-first-component", title: "Your First Component" },
    { id: "jsx-syntax", title: "Understanding JSX" },
    { id: "hooks", title: "React Hooks" },
    { id: "state-management", title: "State Management" },
    { id: "virtual-dom", title: "Virtual DOM" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'webdev-react',
    title: 'React Guide',
    category: 'WEBDEV',
    path: '/alldocs/webdev/react',
    keywords: ['react', 'javascript', 'jsx', 'hooks', 'components', 'state management', 'virtual dom', 'getting started'],
    description: 'Complete guide to React including getting started, JSX, hooks, state management, and best practices.',
    searchableContent: `
        React Guide
        Learn React from scratch
        Getting started with React
        JSX syntax
        React Hooks
        State management
        Virtual DOM
    `.trim()
};

const installReact = `
# Create a new React app with Vite (recommended)
npm create vite@latest my-react-app -- --template react

# Navigate to the project directory
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev
`;

const firstComponent = `
// src/App.jsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default App
`;

const jsxExample = `
// JSX allows you to write HTML-like syntax in JavaScript
function Greeting({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to React</p>
    </div>
  )
}

// This JSX compiles to:
// React.createElement('div', null,
//   React.createElement('h1', null, 'Hello, ', name, '!'),
//   React.createElement('p', null, 'Welcome to React')
// )
`;

const hooksExample = `
import { useState, useEffect } from 'react'

function UserProfile({ userId }) {
  // useState hook for managing component state
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // useEffect hook for side effects (API calls, subscriptions, etc.)
  useEffect(() => {
    async function fetchUser() {
      setLoading(true)
      const response = await fetch(\`/api/users/\${userId}\`)
      const userData = await response.json()
      setUser(userData)
      setLoading(false)
    }

    fetchUser()
  }, [userId]) // Only re-run if userId changes

  if (loading) return <div>Loading...</div>
  if (!user) return <div>User not found</div>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
`;

const stateManagement = `
import { useState, useReducer } from 'react'

// Simple state with useState
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

// Complex state with useReducer
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      throw new Error()
  }
}

function AdvancedCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}
`;

const componentExample = `
// Functional Component (Modern React)
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  )
}

// Using the component
function App() {
  return (
    <div>
      <Welcome name="Alice" age={25} />
      <Welcome name="Bob" age={30} />
    </div>
  )
}
`;

export default function ReactDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                React
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                A JavaScript library for building user interfaces. Learn how to create interactive UIs with React.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:react" className="w-70 h-70 text-[#61DAFB]"/>
            </div>

            <h2 id="what-is-react" className="text-2xl font-semibold mt-12 mb-4">
                What is React?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                React is a JavaScript library created by Facebook (now Meta) for building user interfaces, particularly
                web applications. It was first released in 2013 and has since become the most popular frontend framework
                in the world.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                React's core philosophy is based on <strong>components</strong>—reusable pieces of code that return
                HTML-like syntax called JSX. React uses a <strong>virtual DOM</strong> to efficiently update only the
                parts of the page that have changed, making it fast and efficient.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Component-Based:</strong> Build encapsulated components that manage their own state</li>
                            <li>• <strong>Declarative:</strong> Describe what the UI should look like, React handles the how</li>
                            <li>• <strong>Learn Once, Write Anywhere:</strong> Use React for web, mobile (React Native), and desktop</li>
                            <li>• <strong>Rich Ecosystem:</strong> Massive community and library ecosystem</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                The easiest way to get started with React is using Vite, a modern build tool that's faster than
                Create React App. Here's how to set up your first React project:
            </p>

            <div className="mb-6">
                <CodeBlock code={installReact} language="bash" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                After running <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">npm run dev</code>,
                open your browser to the URL shown in the terminal (usually <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">http://localhost:5173</code>).
                You should see your React app running!
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Prerequisites</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            Before starting with React, you should be comfortable with:
                        </p>
                        <ul className="mt-2 space-y-1 text-[#4B5563]">
                            <li>• HTML and CSS</li>
                            <li>• JavaScript (ES6+ features like arrow functions, destructuring, modules)</li>
                            <li>• Basic understanding of the DOM</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="your-first-component" className="text-2xl font-semibold mt-12 mb-4">
                Your First Component
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                In React, everything is a component. A component is a JavaScript function that returns JSX (HTML-like syntax).
                Here's a simple example:
            </p>

            <div className="mb-6">
                <CodeBlock code={firstComponent} language="jsx" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                This component uses the <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">useState</code> hook
                to manage a counter. When you click the button, the count increases. This demonstrates React's reactivity—
                when state changes, React automatically re-renders the component to show the new value.
            </p>

            <div className="mb-6">
                <CodeBlock code={componentExample} language="jsx" />
            </div>

            <h2 id="jsx-syntax" className="text-2xl font-semibold mt-12 mb-4">
                Understanding JSX
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code in JavaScript. It makes
                React components more readable and easier to write. JSX gets compiled to regular JavaScript function calls.
            </p>

            <div className="mb-6">
                <CodeBlock code={jsxExample} language="jsx" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">JSX Rules</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• <strong>Return a single element:</strong> Wrap multiple elements in a fragment <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">&lt;&gt;&lt;/&gt;</code> or a div</li>
                    <li>• <strong>Use className instead of class:</strong> Since "class" is a reserved word in JavaScript</li>
                    <li>• <strong>Use camelCase for attributes:</strong> <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">onClick</code> instead of <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">onclick</code></li>
                    <li>• <strong>Embed expressions with curly braces:</strong> <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">{'{name}'}</code> to insert JavaScript values</li>
                </ul>
            </div>

            <h2 id="hooks" className="text-2xl font-semibold mt-12 mb-4">
                React Hooks
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Hooks are functions that let you "hook into" React features like state and lifecycle methods from
                functional components. They were introduced in React 16.8 and are now the standard way to write React code.
            </p>

            <div className="mb-6">
                <CodeBlock code={hooksExample} language="jsx" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:hook" width="20" height="20" className="text-[#61DAFB]" />
                        useState
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Manages component state. Returns the current state value and a function to update it.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:hook" width="20" height="20" className="text-[#61DAFB]" />
                        useEffect
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Handles side effects like API calls, subscriptions, or DOM manipulation. Runs after render.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:hook" width="20" height="20" className="text-[#61DAFB]" />
                        useContext
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Accesses React context values without prop drilling. Great for global state.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:hook" width="20" height="20" className="text-[#61DAFB]" />
                        useMemo
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Memoizes expensive calculations. Only recalculates when dependencies change.
                    </p>
                </div>
            </div>

            <h2 id="state-management" className="text-2xl font-semibold mt-12 mb-4">
                State Management
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                State management is crucial in React applications. React provides built-in hooks for managing state,
                and for more complex applications, you can use libraries like Redux or Zustand.
            </p>

            <div className="mb-6">
                <CodeBlock code={stateManagement} language="jsx" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">State Management Options</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• <strong>useState:</strong> For simple component-level state</li>
                    <li>• <strong>useReducer:</strong> For complex state logic with multiple sub-values</li>
                    <li>• <strong>Context API:</strong> For sharing state across multiple components</li>
                    <li>• <strong>Redux:</strong> For large applications with complex state management needs</li>
                    <li>• <strong>Zustand:</strong> Lightweight alternative to Redux with simpler API</li>
                </ul>
            </div>

            <h2 id="virtual-dom" className="text-2xl font-semibold mt-12 mb-4">
                Virtual DOM
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                The Virtual DOM is one of React's key features. It's a JavaScript representation of the real DOM that
                React keeps in memory. When state changes, React creates a new Virtual DOM tree, compares it with the
                previous one (a process called "diffing"), and updates only the changed parts in the real DOM.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Virtual DOM?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Performance:</strong> Updating the real DOM is slow. Virtual DOM updates are faster</li>
                            <li>• <strong>Efficiency:</strong> React batches updates and only changes what's necessary</li>
                            <li>• <strong>Predictability:</strong> You describe the UI state, React figures out the updates</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Keep Components Small and Focused</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Each component should have a single responsibility. If a component is doing too much, break it
                        into smaller components.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Use Functional Components</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Functional components with hooks are the modern way to write React. Class components are
                        legacy and should only be used when necessary.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Lift State Up When Needed</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        If multiple components need the same state, lift it to their closest common ancestor. For
                        global state, consider Context API or a state management library.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Use Keys in Lists</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Always provide a unique <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">key</code> prop
                        when rendering lists. This helps React identify which items have changed.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">5. Optimize with useMemo and useCallback</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">useMemo</code> for expensive
                        calculations and <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">useCallback</code> for
                        functions passed as props to prevent unnecessary re-renders.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Next Steps</h3>
                <p className="text-[#4B5563] leading-relaxed mb-3">
                    Now that you understand the basics of React, here's what to learn next:
                </p>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• React Router for navigation</li>
                    <li>• Context API for global state</li>
                    <li>• Custom hooks for reusable logic</li>
                    <li>• Testing with React Testing Library</li>
                    <li>• Performance optimization techniques</li>
                </ul>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/webdev/comparison")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/webdev/vue")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:vuejs" width="40" height="40" className="text-[#4FC08D]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - Vue</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

