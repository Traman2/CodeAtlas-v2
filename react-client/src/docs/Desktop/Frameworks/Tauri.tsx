import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-tauri", title: "What is Tauri?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "architecture", title: "Architecture" },
    { id: "commands", title: "Commands & Native Access" },
    { id: "security", title: "Security" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'desktop-tauri',
    title: 'Tauri Guide',
    category: 'DESKTOP',
    path: '/alldocs/desktop/tauri',
    keywords: ['tauri', 'desktop', 'rust', 'frontend', 'security'],
    description: 'Build lightweight desktop apps with Tauri using web frontends and Rust backend.',
    searchableContent: `
        Tauri Guide
        Build lightweight desktop apps with web frontends and Rust backend
    `.trim()
};

const installTauri = `
# Install prerequisites
# - Node.js
# - Rust toolchain
# - For macOS: Xcode Command Line Tools
# - For Windows: Visual Studio C++ Build Tools

# Create a new Tauri app (with React frontend)
npm create tauri-app@latest
# Choose: React, Vite, TypeScript (or any framework you prefer)

# Navigate and run
cd my-tauri-app
npm install
npm run tauri dev
`;

const tauriConfig = `
// src-tauri/tauri.conf.json
{
  "$schema": "../node_modules/@tauri-apps/cli/schema.json",
  "package": {
    "productName": "MyTauriApp",
    "version": "1.0.0"
  },
  "tauri": {
    "bundle": {
      "identifier": "com.example.mytauriapp"
    },
    "windows": [
      {
        "title": "My Tauri App",
        "width": 1200,
        "height": 800,
        "resizable": true
      }
    ],
    "security": {
      "csp": null
    }
  }
}
`;

const rustCommand = `
// src-tauri/src/main.rs
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::command;

#[command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
`;

const frontendInvoke = `
// src/App.tsx
import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  async function handleGreet() {
    const message = await invoke<string>('greet', { name });
    setGreeting(message);
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleGreet}>Greet</button>
      <p>{greeting}</p>
    </div>
  );
}

export default App;
`;

const filesystem = `
import { readTextFile, writeFile, BaseDirectory } from '@tauri-apps/api/fs';

async function saveSettings(data: string) {
  await writeFile({
    contents: data,
    path: 'settings.json'
  }, { dir: BaseDirectory.App });
}

async function loadSettings() {
  const contents = await readTextFile('settings.json', { dir: BaseDirectory.App });
  return contents;
}
`;

const securityConfig = `
// src-tauri/tauri.conf.json
{
  "tauri": {
    "security": {
      "csp": "default-src 'self'; script-src 'self'; object-src 'none'; style-src 'self' 'unsafe-inline'"
    },
    "allowedOrigins": [
      "https://myapp.com",
      "tauri://localhost"
    ]
  }
}
`;

export default function TauriDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Tauri
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Build lightweight, secure desktop apps using any frontend framework and Rust backend.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:alpha-t" className="w-70 h-70 text-[#4E9F50]"/>
            </div>

            <h2 id="what-is-tauri" className="text-2xl font-semibold mt-12 mb-4">
                What is Tauri?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Tauri is a framework for building desktop apps using web frontends and Rust backend. It provides smaller
                bundle sizes and better performance compared to Electron by leveraging native webviews and Rust commands.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• Web frontend + Rust backend</li>
                            <li>• Tiny bundle sizes ( {"<"}10MB typical)</li>
                            <li>• Secure by default (preload only)</li>
                            <li>• Access to native APIs via commands</li>
                            <li>• Works with React, Vue, Svelte, etc.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <div className="mb-6">
                <CodeBlock code={installTauri} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Configure Tauri via <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">tauri.conf.json</code>:
            </p>

            <div className="mb-6">
                <CodeBlock code={tauriConfig} language="json" />
            </div>

            <h2 id="architecture" className="text-2xl font-semibold mt-12 mb-4">
                Architecture
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Tauri separates frontend (any web framework) and backend (Rust). You expose native functionality using commands.
            </p>

            <div className="mb-6">
                <CodeBlock code={rustCommand} language="rust" />
            </div>

            <div className="mb-6">
                <CodeBlock code={frontendInvoke} language="tsx" />
            </div>

            <h2 id="commands" className="text-2xl font-semibold mt-12 mb-4">
                Commands & Native Access
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Use Tauri APIs for filesystem, dialogs, notifications, and more:
            </p>

            <div className="mb-6">
                <CodeBlock code={filesystem} language="tsx" />
            </div>

            <h2 id="security" className="text-2xl font-semibold mt-12 mb-4">
                Security
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Tauri is secure by default. Configure content security policy and allowed origins:
            </p>

            <div className="mb-6">
                <CodeBlock code={securityConfig} language="json" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Keep Commands Focused</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Each command should handle a specific native task. Avoid exposing broad surface areas.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Validate Inputs</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Always validate data passed from the frontend to prevent injection attacks.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Use Autoupdates</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Configure Tauri updater for seamless updates across platforms.
                    </p>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/desktop/electron")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/desktop/macos")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:apple" width="40" height="40" className="text-[#000000]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Native - macOS</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

