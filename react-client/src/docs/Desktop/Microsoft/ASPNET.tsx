import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "overview", title: "What is ASP.NET?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "minimal-api", title: "Minimal API Example" },
    { id: "desktop-integration", title: "Integrating with Desktop Apps" },
    { id: "signalr", title: "Real-time Updates" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'desktop-aspnet',
    title: 'ASP.NET for Desktop Apps',
    category: 'DESKTOP',
    path: '/alldocs/desktop/aspnet',
    keywords: ['asp.net', 'api', '.net', 'desktop integration', 'signalr'],
    description: 'Learn how to build ASP.NET backend services that power desktop applications, including APIs, authentication, and real-time updates.',
    searchableContent: `
        ASP.NET for Desktop
        Build APIs for desktop apps
        Minimal API, SignalR
    `.trim()
};

const installAspNet = `
# Create new ASP.NET Web API
dotnet new webapi -n DesktopApi
cd DesktopApi

# Run in development
dotnet run

# The API will run on https://localhost:5001 by default
`;

const minimalApi = `
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/health", () => new { status = "ok", timestamp = DateTime.UtcNow });

app.MapPost("/settings", (SettingsRequest request) =>
{
    // Save settings, integrate with desktop client
    return Results.Ok(new { success = true });
});

app.Run();

record SettingsRequest(string Theme, bool AutoUpdate);
`;

const desktopIntegration = `
// Electron / React Native / .NET desktop app calling ASP.NET API
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:5001',
  timeout: 5000
});

async function saveSettings(settings) {
  await api.post('/settings', settings);
}

async function getHealth() {
  const { data } = await api.get('/health');
  return data;
}
`;

const signalR = `\n// Program.cs\nbuilder.Services.AddSignalR();\n\nvar app = builder.Build();\napp.MapHub<DesktopHub>(\"/desktopHub\");\napp.Run();\n\n// DesktopHub.cs\nusing Microsoft.AspNetCore.SignalR;\n\npublic class DesktopHub : Hub\n{\n    public async Task SendUpdate(string message)\n    {\n        await Clients.All.SendAsync(\"ReceiveUpdate\", message);\n    }\n}\n\n// Desktop client (JavaScript)\nimport * as signalR from '@microsoft/signalr';\n\nconst connection = new signalR.HubConnectionBuilder()\n  .withUrl('https://localhost:5001/desktopHub')\n  .build();\n\nconnection.on('ReceiveUpdate', (message) => {\n  console.log('Update:', message);\n});\n\nawait connection.start();\nawait connection.invoke('SendUpdate', 'Desktop app connected');\n`;

export default function AspNetDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">MICROSOFT STACK</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                ASP.NET for Desktop Apps
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Build backend APIs and real-time services with ASP.NET to power your desktop applications.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:server" className="w-70 h-70 text-[#4B5563]"/>
            </div>

            <h2 id="overview" className="text-2xl font-semibold mt-12 mb-4">
                Why ASP.NET for Desktop?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Desktop apps often need backend services for authentication, data storage, synchronization, and
                real-time communication. ASP.NET provides a performant, type-safe way to build APIs that integrate
                seamlessly with .NET desktop apps and other clients.
            </p>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <div className="mb-6">
                <CodeBlock code={installAspNet} language="bash" />
            </div>

            <h2 id="minimal-api" className="text-2xl font-semibold mt-12 mb-4">
                Minimal API Example
            </h2>

            <div className="mb-6">
                <CodeBlock code={minimalApi} language="csharp" />
            </div>

            <h2 id="desktop-integration" className="text-2xl font-semibold mt-12 mb-4">
                Integrating with Desktop Apps
            </h2>

            <div className="mb-6">
                <CodeBlock code={desktopIntegration} language="tsx" />
            </div>

            <h2 id="signalr" className="text-2xl font-semibold mt-12 mb-4">
                Real-time Updates with SignalR
            </h2>

            <div className="mb-6">
                <CodeBlock code={signalR} language="csharp" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use HTTPS Everywhere</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Desktop apps often run on user machines. Always communicate with your ASP.NET API over HTTPS
                        to protect data in transit.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Implement Authentication</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use JWT tokens, OAuth, or Microsoft Identity to authenticate desktop apps.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Handle Offline Support</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Cache data locally and sync with ASP.NET APIs when network connectivity is available.
                    </p>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/desktop/dotnet")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/desktop/visualstudio")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:visual-studio" width="40" height="40" className="text-[#5C2D91]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Tools - Visual Studio</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

