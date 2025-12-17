import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';
import ArticleFeedback from "@/components/ArticleFeedback";

export const sections = [
    { id: "what-is-vite", title: "What is Vite?" },
    { id: "react-integration", title: "React Integration" },
    { id: "vue-integration", title: "Vue Integration" },
    { id: "angular-integration", title: "Angular Integration" },
    { id: "configuration", title: "Configuration" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'webdev-tools-vite',
    title: 'Vite - Build Tool',
    category: 'WEBDEV',
    path: '/alldocs/webdev/tools/vite',
    keywords: ['vite', 'build tool', 'bundler', 'hmr', 'react', 'vue', 'angular'],
    description: 'Learn how to use Vite as a build tool in React, Vue, and Angular applications.',
    searchableContent: `
        Vite Build Tool
        React Vue Angular build setup
    `.trim()
};

const reactVite = `
# Create a new React project with Vite
npm create vite@latest my-react-app -- --template react

# Or with TypeScript
npm create vite@latest my-react-app -- --template react-ts

# Navigate and install
cd my-react-app
npm install

# Start dev server
npm run dev

# Build for production
npm run build
`;

const reactViteConfig = `
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
`;

const vueVite = `
# Create a new Vue project with Vite
npm create vite@latest my-vue-app -- --template vue

# Or with TypeScript
npm create vite@latest my-vue-app -- --template vue-ts

# Navigate and install
cd my-vue-app
npm install

# Start dev server
npm run dev

# Build for production
npm run build
`;

const vueViteConfig = `
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
        },
      },
    },
  },
})
`;

const angularVite = `
# Note: Angular has its own CLI, but you can use Vite with Angular
# However, the recommended approach is using Angular CLI

# Standard Angular setup (uses Webpack internally)
ng new my-angular-app
cd my-angular-app
ng serve

# For Vite with Angular, use @analogjs/vite-plugin-angular
# This is an advanced setup and not officially supported
`;

const angularViteConfig = `
// vite.config.ts (Advanced - not officially supported)
import { defineConfig } from 'vite'
import angular from '@analogjs/vite-plugin-angular'

export default defineConfig({
  plugins: [angular()],
  resolve: {
    mainFields: ['module', 'main'],
  },
})
`;

const angularStandard = `
// angular.json (Standard Angular CLI configuration)
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "optimization": true,
            "sourceMap": false,
            "styles": ["src/styles.css"]
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "port": 4200
          }
        }
      }
    }
  }
}
`;

const vitePlugins = `
// vite.config.js - Common plugins
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    }),
    visualizer(), // Bundle analyzer
  ],
})
`;

const viteEnv = `
// .env.development
VITE_API_URL=http://localhost:3000/api
VITE_APP_TITLE=My App

// .env.production
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App

// Access in code
const apiUrl = import.meta.env.VITE_API_URL
const appTitle = import.meta.env.VITE_APP_TITLE

// TypeScript support
// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
`;

const viteOptimization = `
// vite.config.js - Performance optimizations
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        },
      },
    },
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
      },
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
`;

export default function ViteDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">TOOLS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Vite - Build Tool
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Learn how to use Vite for lightning-fast development and optimized production builds
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:lightning-bolt" className="w-70 h-70 text-[#646CFF]"/>
            </div>

            <h2 id="what-is-vite" className="text-2xl font-semibold mt-12 mb-4">
                What is Vite?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Vite (French for "fast") is a next-generation frontend build tool created by Evan You (creator of Vue).
                It provides an extremely fast development experience with near-instant server start and lightning-fast
                Hot Module Replacement (HMR).
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Vite uses native ES modules in development (no bundling needed!) and Rollup for optimized production
                builds. It's framework-agnostic and works with React, Vue, Svelte, and more.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Lightning-fast HMR:</strong> Updates appear instantly in the browser</li>
                            <li>• <strong>Instant server start:</strong> No bundling in development</li>
                            <li>• <strong>Optimized builds:</strong> Uses Rollup for production</li>
                            <li>• <strong>Framework-agnostic:</strong> Works with React, Vue, Svelte, etc.</li>
                            <li>• <strong>TypeScript support:</strong> Built-in TypeScript support</li>
                            <li>• <strong>Plugin ecosystem:</strong> Rich plugin system</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="react-integration" className="text-2xl font-semibold mt-12 mb-4">
                React Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Vite is the recommended build tool for new React projects. It's faster than Create React App and
                provides a better developer experience.
            </p>

            <div className="mb-6">
                <CodeBlock code={reactVite} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Customize Vite configuration:
            </p>

            <div className="mb-6">
                <CodeBlock code={reactViteConfig} language="js" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">React Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">@vitejs/plugin-react</code> for React support</li>
                    <li>• Configure path aliases for cleaner imports</li>
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">import.meta.env</code> for environment variables</li>
                    <li>• Install <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">vite-plugin-eslint</code> for ESLint integration</li>
                </ul>
            </div>

            <h2 id="vue-integration" className="text-2xl font-semibold mt-12 mb-4">
                Vue Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Vite was created by the Vue team and is the official build tool for Vue 3. It provides the best
                experience for Vue development.
            </p>

            <div className="mb-6">
                <CodeBlock code={vueVite} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Vue-specific Vite configuration:
            </p>

            <div className="mb-6">
                <CodeBlock code={vueViteConfig} language="js" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Vue Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">@vitejs/plugin-vue</code> for Vue support</li>
                    <li>• Configure manual chunks for better code splitting</li>
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">vite-plugin-vue-devtools</code> for Vue DevTools</li>
                    <li>• Single File Components work seamlessly with Vite</li>
                </ul>
            </div>

            <h2 id="angular-integration" className="text-2xl font-semibold mt-12 mb-4">
                Angular Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Angular uses its own CLI which internally uses Webpack. While Vite can be used with Angular through
                third-party plugins, the recommended approach is to use Angular CLI for official support and features.
            </p>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-6">
                <h3 className="font-semibold text-lg mb-3">⚠️ Important Note</h3>
                <p className="text-[#4B5563] leading-relaxed">
                    Angular CLI is the official and recommended way to build Angular applications. It provides
                    features like dependency injection, AOT compilation, and module system that work best with
                    Webpack. Using Vite with Angular is possible but not officially supported and may have limitations.
                </p>
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Standard Angular setup (recommended):
            </p>

            <div className="mb-6">
                <CodeBlock code={angularStandard} language="json" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Advanced: Using Vite with Angular (not officially supported):
            </p>

            <div className="mb-6">
                <CodeBlock code={angularVite} language="bash" />
            </div>

            <div className="mb-6">
                <CodeBlock code={angularViteConfig} language="ts" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Angular Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">ng serve</code> for development</li>
                    <li>• Angular CLI uses Webpack internally (optimized for Angular)</li>
                    <li>• Configure build options in <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">angular.json</code></li>
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">ng build --prod</code> for production builds</li>
                </ul>
            </div>

            <h2 id="configuration" className="text-2xl font-semibold mt-12 mb-4">
                Configuration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Vite is highly configurable. Here are some common configurations:
            </p>

            <div className="space-y-6 mb-8">
                <div>
                    <h3 className="font-semibold text-lg mb-3">Common Plugins</h3>
                    <div className="mb-6">
                        <CodeBlock code={vitePlugins} language="js" />
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">Environment Variables</h3>
                    <div className="mb-6">
                        <CodeBlock code={viteEnv} language="js" />
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">Performance Optimization</h3>
                    <div className="mb-6">
                        <CodeBlock code={viteOptimization} language="js" />
                    </div>
                </div>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use Path Aliases</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Configure path aliases in <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">vite.config.js</code> for cleaner imports.
                        Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">@/</code> instead of relative paths.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Optimize Dependencies</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">optimizeDeps</code> to pre-bundle dependencies
                        that aren't ES modules. This speeds up the first load.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Configure Code Splitting</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">manualChunks</code> in Rollup options to
                        split vendor code and improve caching.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Use Environment Variables</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Store configuration in <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">.env</code> files. Remember
                        to prefix with <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">VITE_</code> for client-side access.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">5. Enable Source Maps in Development</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Source maps help with debugging. Enable them in development but disable in production
                        for smaller bundle sizes.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Framework Comparison</h3>
                <div className="space-y-3 text-[#4B5563]">
                    <div>
                        <strong>React:</strong> Vite is the recommended build tool. Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">npm create vite@latest</code> to get started.
                    </div>
                    <div>
                        <strong>Vue:</strong> Vite is the official build tool for Vue 3. It's built by the Vue team and provides the best experience.
                    </div>
                    <div>
                        <strong>Angular:</strong> Use Angular CLI (which uses Webpack). Vite support is experimental and not officially recommended.
                    </div>
                </div>
            </div>
            <div className="mt-36"/>
            <ArticleFeedback articleId="/alldocs/webdev/vite"/>

            <div className="gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/webdev/tailwind")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/webdev/recharts")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:chart-line" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Tools - Recharts</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

