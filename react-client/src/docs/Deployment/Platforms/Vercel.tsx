import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-vercel", title: "What is Vercel?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "deployment", title: "Deployment" },
    { id: "serverless-functions", title: "Serverless Functions" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'deployment-vercel',
    title: 'Vercel - Frontend Deployment Platform',
    category: 'DEPLOYMENT',
    path: '/alldocs/deployment/vercel',
    keywords: ['vercel', 'deployment', 'frontend', 'nextjs', 'react', 'serverless', 'edge'],
    description: 'Complete guide to deploying frontend applications with Vercel including Next.js, React, and serverless functions.',
    searchableContent: `
        Vercel deployment platform
        Frontend deployment Next.js React
        Serverless functions edge network
    `.trim()
};

const vercelSetup = `
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from current directory
vercel

# Deploy to production
vercel --prod
`;

const vercelJson = `
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" }
      ]
    }
  ]
}
`;

const serverlessExample = `
// api/hello.js (Node.js)
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Vercel!' });
}

// api/users.ts (TypeScript)
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  response.status(200).json({
    users: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ]
  });
}
`;

export default function VercelDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">DEPLOYMENT PLATFORMS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Vercel - Frontend Deployment Platform
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Deploy frontend frameworks and static sites with automatic deployments, edge network, and serverless functions
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:vercel" className="w-70 h-70 text-[#000000]"/>
            </div>

            <h2 id="what-is-vercel" className="text-2xl font-semibold mt-12 mb-4">
                What is Vercel?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Vercel is a cloud platform for frontend frameworks and static sites. It provides automatic deployments 
                from Git, a global edge network, serverless functions, and excellent developer experience. Vercel is 
                created by the team behind Next.js.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Vercel is perfect for deploying Next.js, React, Vue, Angular, and other frontend frameworks. It handles 
                build optimization, CDN distribution, and serverless functions automatically.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use Vercel?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Automatic Deployments:</strong> Deploy automatically on every Git push</li>
                            <li>• <strong>Edge Network:</strong> Global CDN for fast content delivery</li>
                            <li>• <strong>Serverless Functions:</strong> Build API routes without managing servers</li>
                            <li>• <strong>Zero Configuration:</strong> Works out of the box with popular frameworks</li>
                            <li>• <strong>Preview Deployments:</strong> Get preview URLs for every pull request</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Deploy your application using the Vercel CLI or connect your GitHub repository:
            </p>

            <div className="mb-6">
                <CodeBlock code={vercelSetup} language="bash" />
            </div>

            <h2 id="deployment" className="text-2xl font-semibold mt-12 mb-4">
                Deployment Configuration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Configure your deployment with <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">vercel.json</code>:
            </p>

            <div className="mb-6">
                <CodeBlock code={vercelJson} language="json" />
            </div>

            <h2 id="serverless-functions" className="text-2xl font-semibold mt-12 mb-4">
                Serverless Functions
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Create API routes as serverless functions in the <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">api</code> directory:
            </p>

            <div className="mb-6">
                <CodeBlock code={serverlessExample} language="javascript" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Environment Variables</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Store sensitive data in Vercel environment variables. Configure them in the dashboard or via CLI.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Optimize Builds</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use Vercel's build optimizations. For Next.js, enable Image Optimization and use the Edge Runtime 
                            when appropriate.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Preview Deployments</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Leverage preview deployments for testing. Every pull request gets its own deployment URL for 
                            easy testing and review.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Integrate with Backend</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            For full-stack applications, connect to backend services. Deploy backends to 
                            <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS</button>, 
                            <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure</button>, or 
                            <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP</button> and 
                            connect via API.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:link" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Related Resources</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <button onClick={() => navigate("/alldocs/deployment/comparison")} className="text-[#554DE2] hover:underline">Compare Deployment Platforms</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">Deploy Backend to AWS</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/webdev/react")} className="text-[#554DE2] hover:underline">React Development</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/deployment/overview")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/deployment/docker")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:docker" width="40" height="40" className="text-[#2496ED]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Tools - Docker</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

