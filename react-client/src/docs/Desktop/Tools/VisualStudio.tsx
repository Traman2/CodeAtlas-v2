import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "overview", title: "Visual Studio vs VS Code" },
    { id: "visual-studio", title: "Visual Studio" },
    { id: "vs-code", title: "Visual Studio Code" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'desktop-tools-visualstudio',
    title: 'Visual Studio & VS Code',
    category: 'DESKTOP',
    path: '/alldocs/desktop/tools/visualstudio',
    keywords: ['visual studio', 'vs code', 'ide', 'editor'],
    description: 'Compare Visual Studio and VS Code for desktop development, with recommended extensions and workflows.',
    searchableContent: `
        Visual Studio vs VS Code
        Desktop development tooling
    `.trim()
};

const workloads = `
# Install Visual Studio workloads (Windows)
# Recommended workloads for desktop dev:
# - .NET Desktop Development
# - Universal Windows Platform development (WinUI)
# - .NET Multi-platform App UI development (MAUI)
# - ASP.NET and web development

# Install via command line
vs_installer.exe --add Microsoft.VisualStudio.Workload.ManagedDesktop
`;

const vscodeExtensions = `
# Recommended VS Code extensions
ms-dotnettools.csharp              // C# support
ms-dotnettools.vscode-dotnet-pack    // SDK helpers
ms-vscode.vscode-typescript-next     // Better TS support for Electron/Tauri
tauri-apps.tauri-vscode              // Tauri tooling
`;

export default function VisualStudioDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">TOOLS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Visual Studio & VS Code
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Choose the right Microsoft tooling for desktop development: full-featured Visual Studio or lightweight VS Code.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:microsoft-visual-studio" className="w-70 h-70 text-[#5C2D91]"/>
            </div>

            <h2 id="overview" className="text-2xl font-semibold mt-12 mb-4">
                Visual Studio vs VS Code
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold mb-2">Visual Studio</h3>
                    <ul className="text-sm text-[#4B5563] space-y-1">
                        <li>• Windows-only (Mac version exists but limited)</li>
                        <li>• Full IDE with designers, profilers, deployment</li>
                        <li>• Best for .NET, WinUI, WPF, MAUI</li>
                    </ul>
                </div>
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold mb-2">Visual Studio Code</h3>
                    <ul className="text-sm text-[#4B5563] space-y-1">
                        <li>• Cross-platform (Win, macOS, Linux)</li>
                        <li>• Lightweight, extension-driven</li>
                        <li>• Ideal for Electron/Tauri, web tooling</li>
                    </ul>
                </div>
            </div>

            <h2 id="visual-studio" className="text-2xl font-semibold mt-12 mb-4">
                Visual Studio Setup
            </h2>

            <div className="mb-6">
                <CodeBlock code={workloads} language="bash" />
            </div>

            <h2 id="vs-code" className="text-2xl font-semibold mt-12 mb-4">
                VS Code Setup
            </h2>

            <div className="mb-6">
                <CodeBlock code={vscodeExtensions} language="bash" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Match Tool to Project</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use Visual Studio for .NET-heavy apps and VS Code for web-tech frameworks like Electron/Tauri.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Sync Settings</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use Settings Sync (VS Code) or account settings (Visual Studio) to keep tooling consistent across devices.
                    </p>
                </div>
            </div>
        </>
    )
}

