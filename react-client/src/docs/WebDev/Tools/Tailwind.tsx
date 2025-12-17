import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';
import ArticleFeedback from "@/components/ArticleFeedback";

export const sections = [
    { id: "what-is-tailwind", title: "What is Tailwind CSS?" },
    { id: "react-integration", title: "React Integration" },
    { id: "vue-integration", title: "Vue Integration" },
    { id: "angular-integration", title: "Angular Integration" },
    { id: "configuration", title: "Configuration" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'webdev-tools-tailwind',
    title: 'Tailwind CSS - Utility-First CSS',
    category: 'WEBDEV',
    path: '/alldocs/webdev/tools/tailwind',
    keywords: ['tailwind', 'css', 'utility-first', 'styling', 'react', 'vue', 'angular'],
    description: 'Learn how to integrate and use Tailwind CSS in React, Vue, and Angular applications.',
    searchableContent: `
        Tailwind CSS Utility-First
        React Vue Angular styling
    `.trim()
};

const reactInstall = `
# Install Tailwind CSS in React/Vite project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# This creates:
# - tailwind.config.js
# - postcss.config.js
`;

const reactConfig = `
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46ff',
      },
    },
  },
  plugins: [],
}

// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

const reactUsage = `
// React Component using Tailwind
function Button({ children, variant = 'default' }) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors'
  const variantClasses = {
    default: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10'
  }
  
  return (
    <button className={\`\${baseClasses} \${variantClasses[variant]}\`}>
      {children}
    </button>
  )
}

function Card() {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Card Title</h2>
      <p className="text-gray-600">Card content goes here</p>
      <Button variant="default">Click Me</Button>
    </div>
  )
}
`;

const vueInstall = `
# Install Tailwind CSS in Vue project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
`;

const vueConfig = `
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// src/style.css
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

const vueUsage = `
<!-- Vue Component using Tailwind -->
<template>
  <div class="max-w-sm rounded-lg shadow-lg bg-white p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-2">Card Title</h2>
    <p class="text-gray-600">Card content goes here</p>
    <button 
      :class="buttonClasses"
      @click="handleClick"
    >
      Click Me
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})

const buttonClasses = computed(() => {
  const base = 'px-4 py-2 rounded-lg font-medium transition-colors'
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  }
  return \`\${base} \${variants[props.variant]}\`
})

function handleClick() {
  console.log('Button clicked!')
}
</script>
`;

const angularInstall = `
# Install Tailwind CSS in Angular project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
`;

const angularConfig = `
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// angular.json - Add to styles array
"styles": [
  "src/styles.css"
]

// src/styles.css
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

const angularUsage = `
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="max-w-sm rounded-lg shadow-lg bg-white p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Card Title</h2>
      <p class="text-gray-600">Card content goes here</p>
      <button 
        [class]="getButtonClasses()"
        (click)="handleClick()"
      >
        Click Me
      </button>
    </div>
  \`
})
export class AppComponent {
  variant: string = 'default';
  
  getButtonClasses(): string {
    const base = 'px-4 py-2 rounded-lg font-medium transition-colors';
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
    };
    return \`\${base} \${variants[this.variant]}\`;
  }
  
  handleClick() {
    console.log('Button clicked!');
  }
}
`;

const advancedConfig = `
// tailwind.config.js - Advanced configuration
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... more shades
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
`;

const customComponents = `
// Using @layer to create custom component classes
// src/index.css or styles.css

@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors;
  }
  
  .btn-primary {
    @apply bg-blue-600 text-white hover:bg-blue-700;
  }
  
  .btn-outline {
    @apply border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white;
  }
  
  .card {
    @apply max-w-sm rounded-lg shadow-lg bg-white p-6;
  }
}

// Then use in components
<button class="btn btn-primary">Click Me</button>
<div class="card">Card content</div>
`;

export default function TailwindDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">TOOLS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Tailwind CSS - Utility-First CSS
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Learn how to integrate Tailwind CSS in React, Vue, and Angular for rapid UI development
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:tailwind" className="w-70 h-70 text-[#06B6D4]"/>
            </div>

            <h2 id="what-is-tailwind" className="text-2xl font-semibold mt-12 mb-4">
                What is Tailwind CSS?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build
                custom designs quickly. Instead of writing custom CSS, you compose utility classes directly in
                your HTML/JSX.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Tailwind works with any framework and has become the most popular CSS framework. It's highly
                customizable, purges unused CSS in production, and provides excellent developer experience.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• Utility-first approach (no custom CSS needed)</li>
                            <li>• Highly customizable via config file</li>
                            <li>• Purges unused CSS in production (small bundle size)</li>
                            <li>• Works with any framework</li>
                            <li>• Excellent IntelliSense support</li>
                            <li>• Responsive design utilities built-in</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="react-integration" className="text-2xl font-semibold mt-12 mb-4">
                React Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Tailwind CSS works seamlessly with React. Here's how to set it up:
            </p>

            <div className="mb-6">
                <CodeBlock code={reactInstall} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Configure Tailwind and add it to your CSS:
            </p>

            <div className="mb-6">
                <CodeBlock code={reactConfig} language="js" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Now use Tailwind classes in your React components:
            </p>

            <div className="mb-6">
                <CodeBlock code={reactUsage} language="tsx" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">React Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">className</code> (not <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">class</code>)</li>
                    <li>• Combine classes using template literals or libraries like <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">clsx</code></li>
                    <li>• Use conditional classes with ternary operators or object notation</li>
                    <li>• Install Tailwind IntelliSense extension for VS Code</li>
                </ul>
            </div>

            <h2 id="vue-integration" className="text-2xl font-semibold mt-12 mb-4">
                Vue Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Tailwind CSS works great with Vue. The setup is similar to React:
            </p>

            <div className="mb-6">
                <CodeBlock code={vueInstall} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Configure Tailwind:
            </p>

            <div className="mb-6">
                <CodeBlock code={vueConfig} language="js" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Use Tailwind classes in Vue templates:
            </p>

            <div className="mb-6">
                <CodeBlock code={vueUsage} language="vue" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Vue Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">class</code> binding for dynamic classes</li>
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">computed</code> properties for complex class logic</li>
                    <li>• Combine static and dynamic classes: <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">class="static-class" :class="dynamicClass"</code></li>
                    <li>• Scoped styles work alongside Tailwind</li>
                </ul>
            </div>

            <h2 id="angular-integration" className="text-2xl font-semibold mt-12 mb-4">
                Angular Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Tailwind CSS integrates well with Angular. Here's the setup:
            </p>

            <div className="mb-6">
                <CodeBlock code={angularInstall} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Configure Tailwind and add to Angular:
            </p>

            <div className="mb-6">
                <CodeBlock code={angularConfig} language="js" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Use Tailwind classes in Angular templates:
            </p>

            <div className="mb-6">
                <CodeBlock code={angularUsage} language="typescript" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Angular Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">[class]</code> binding for dynamic classes</li>
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">ngClass</code> for conditional classes</li>
                    <li>• Create methods in components to generate class strings</li>
                    <li>• Tailwind works with Angular's component styles</li>
                </ul>
            </div>

            <h2 id="configuration" className="text-2xl font-semibold mt-12 mb-4">
                Configuration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Tailwind is highly customizable. You can extend the default theme, add custom colors, fonts,
                spacing, and more.
            </p>

            <div className="mb-6">
                <CodeBlock code={advancedConfig} language="js" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                You can also create custom component classes using <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">@layer</code>:
            </p>

            <div className="mb-6">
                <CodeBlock code={customComponents} language="css" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Configuration Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Always use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">extend</code> instead of overriding theme</li>
                    <li>• Configure <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">content</code> paths correctly for purging</li>
                    <li>• Use plugins for additional functionality (forms, typography, etc.)</li>
                    <li>• Customize colors to match your brand</li>
                </ul>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use Responsive Prefixes</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use responsive prefixes (<code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">sm:</code>, <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">md:</code>, <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">lg:</code>) for mobile-first design.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Extract Reusable Patterns</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">@layer components</code> to create reusable component classes for common patterns.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Use Arbitrary Values Sparingly</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        While Tailwind supports arbitrary values (<code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">w-[500px]</code>), prefer using the default scale or extending the theme.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Keep Classes Readable</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        For components with many classes, consider extracting to component classes or using a class management utility.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">5. Enable JIT Mode</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Tailwind 3+ uses JIT (Just-In-Time) mode by default, which generates classes on-demand. This is faster and produces smaller CSS files.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Framework Comparison</h3>
                <div className="space-y-3 text-[#4B5563]">
                    <div>
                        <strong>React:</strong> Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">className</code> prop. Works seamlessly with JSX.
                    </div>
                    <div>
                        <strong>Vue:</strong> Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">class</code> binding. Can combine static and dynamic classes.
                    </div>
                    <div>
                        <strong>Angular:</strong> Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">[class]</code> or <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">ngClass</code>. Works with component styles.
                    </div>
                </div>
            </div>

            <div className="mt-36"/>
            <ArticleFeedback articleId="/alldocs/webdev/tailwindcss"/>

            <div className="gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/webdev/angular")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/webdev/vite")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:lightning-bolt" width="40" height="40" className="text-[#646CFF]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Tools - Vite</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

