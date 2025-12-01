import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-electron", title: "What is Electron?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "structure", title: "Project Structure" },
    { id: "ipc", title: "IPC & Native APIs" },
    { id: "packaging", title: "Packaging & Distribution" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'desktop-electron',
    title: 'Electron Guide',
    category: 'DESKTOP',
    path: '/alldocs/desktop/electron',
    keywords: ['electron', 'desktop', 'javascript', 'typescript', 'ipc', 'packaging'],
    description: 'Build desktop apps with Electron using web technologies. Covers setup, IPC, native integrations, and packaging.',
    searchableContent: `
        Electron Guide
        Build desktop apps with HTML CSS JS
        IPC, Native APIs, Packaging
    `.trim()
};

const installElectron = `
# Create a new Electron app with Vite + React
npm create electron-vite@latest my-electron-app --template react

# Or manual setup
mkdir my-electron-app && cd my-electron-app
npm init -y
npm install electron concurrently wait-on cross-env
`;

const packageJson = `
{
  "main": "main.js",
  "scripts": {
    "start": "concurrently \\"npm:dev:*\\"",
    "dev:electron": "wait-on tcp:5173 && electron .",
    "dev:renderer": "cross-env BROWSER=none npm run dev:react",
    "dev:react": "vite"
  },
  "devDependencies": {
    "electron": "^30.0.0",
    "vite": "^5.0.0"
  }
}
`;

const mainProcess = `
// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile('dist/index.html');
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
`;

const preload = `
// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  onUpdate: (callback) => ipcRenderer.on('app:update', callback)
});
`;

const renderer = `\n// src/App.tsx\nimport { useEffect, useState } from 'react';\n\nfunction App() {\n  const [message, setMessage] = useState('');\n\n  const handleOpenFile = async () => {\n    const fileData = await window.electronAPI.openFile();\n    setMessage(fileData);\n  };\n\n  useEffect(() => {\n    const handler = (_event, update) => {\n      console.log('App update:', update);\n    };\n\n    window.electronAPI.onUpdate(handler);\n    return () => window.electronAPI.onUpdate(null);\n  }, []);\n\n  return (\n    <div>\n      <h1>Electron App</h1>\n      <button onClick={handleOpenFile}>Open File</button>\n      <p>{message}</p>\n    </div>\n  );\n}\n\nexport default App;\n`;

const ipcExample = `
// main process
ipcMain.handle('dialog:openFile', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile']
  });
  if (canceled) {
    return 'No file selected';
  }
  return filePaths[0];
});
`;

const packaging = `
# Install electron-builder
npm install --save-dev electron-builder

# package.json
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "build": "vite build",
    "dist": "npm run build && electron-builder"
  },
  "build": {
    "appId": "com.example.app",
    "mac": {
      "category": "public.app-category.productivity"
    },
    "win": {
      "target": "nsis"
    },
    "linux": {
      "target": "AppImage"
    }
  }
}
`;

export default function ElectronDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Electron
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Build cross-platform desktop apps using web technologies (HTML, CSS, JavaScript, TypeScript).
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:electron-framework" className="w-70 h-70 text-[#47848F]"/>
            </div>

            <h2 id="what-is-electron" className="text-2xl font-semibold mt-12 mb-4">
                What is Electron?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Electron combines Chromium (for rendering) and Node.js (for backend) to build desktop apps with web
                technologies. Apps like VS Code, Slack, and Discord use Electron.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• Cross-platform: Windows, macOS, Linux</li>
                            <li>• Uses web tech stack: React, Vue, etc.</li>
                            <li>• Access to native APIs via Node.js</li>
                            <li>• Large ecosystem and community</li>
                            <li>• Rapid development and prototyping</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <div className="mb-6">
                <CodeBlock code={installElectron} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Basic package.json for development scripts:
            </p>

            <div className="mb-6">
                <CodeBlock code={packageJson} language="json" />
            </div>

            <h2 id="structure" className="text-2xl font-semibold mt-12 mb-4">
                Project Structure
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Electron apps have a main process (Node.js) and renderer process (web UI). Use a preload script to safely
                expose APIs to the renderer.
            </p>

            <div className="mb-6">
                <CodeBlock code={mainProcess} language="javascript" />
            </div>

            <div className="mb-6">
                <CodeBlock code={preload} language="javascript" />
            </div>

            <div className="mb-6">
                <CodeBlock code={renderer} language="tsx" />
            </div>

            <h2 id="ipc" className="text-2xl font-semibold mt-12 mb-4">
                IPC & Native APIs
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Use IPC (Inter-Process Communication) to interact between renderer and main process for native features:
            </p>

            <div className="mb-6">
                <CodeBlock code={ipcExample} language="javascript" />
            </div>

            <h2 id="packaging" className="text-2xl font-semibold mt-12 mb-4">
                Packaging & Distribution
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Use electron-builder to package apps for different platforms:
            </p>

            <div className="mb-6">
                <CodeBlock code={packaging} language="json" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Packaging Tips</h3>
                <ul className="space-y-2 text-[#4B5563] text-sm">
                    <li>• Sign macOS builds with Developer ID for Gatekeeper</li>
                    <li>• Use auto-update (electron-updater) for seamless updates</li>
                    <li>• Optimize production builds with code splitting and tree shaking</li>
                </ul>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Keep Logic in Main Process</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Move filesystem, network, and native logic to the main process. The renderer should focus on UI.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Use Context Isolation</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Always enable contextIsolation and expose APIs via preload to avoid security issues.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Optimize Performance</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use lazy loading, reduce bundle size, and avoid unnecessary re-renders to improve performance.
                    </p>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/desktop/comparison")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/desktop/tauri")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:tauri" width="40" height="40" className="text-[#FFC131]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - Tauri</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

