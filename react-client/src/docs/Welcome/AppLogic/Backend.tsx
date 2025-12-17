import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';
import ArticleFeedback from "@/components/ArticleFeedback";

export const sections = [
    { id: "backend-frameworks", title: "Backend Frameworks" },
    { id: "backend-essentials", title: "Backend Essentials" }
]

export const metadata: GuideMetadata = {
    id: 'backend',
    title: 'Backend Development',
    category: 'WELCOME',
    path: '/alldocs/welcome/backend',
    keywords: ['backend', 'server', 'api', 'node', 'express', 'fastapi', 'django', 'rest', 'graphql', 'flask', 'spring boot'],
    description: 'Master server-side development with various languages and frameworks. Build robust APIs, manage databases, and implement authentication and authorization.',
    searchableContent: `
        Backend Development
        Master server-side development with various languages and frameworks. Build robust APIs, manage databases, and implement authentication and authorization.
        Backend Frameworks
        Node.js & Express
        JavaScript runtime for server-side development. Build fast, scalable APIs with Express.js and the Node.js ecosystem.
        Django & Flask
        Python web frameworks for rapid development. Django offers batteries-included approach while Flask provides flexibility and simplicity.
        Spring Boot
        Java framework for building production-ready applications. Enterprise-grade features with convention over configuration.
        Backend Essentials
        RESTful API design and GraphQL
        Database management (SQL and NoSQL)
        Authentication with JWT and OAuth
        Caching strategies with Redis
        Message queues and background jobs
    `.trim()
};

export default function BackendDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">APP LOGIC</p>
            <h1 className="text-3xl font-semibold mt-2">Backend Development</h1>
            <p className="mt-2">
                Master server-side development with various languages and frameworks. Build
                robust APIs, manage databases, and implement authentication and authorization.
            </p>

            <h2 id="backend-frameworks" className="text-2xl font-semibold mt-8 mb-4">Backend Frameworks</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Node.js & Express</h3>
                    <p className="mt-2 text-gray-700">
                        JavaScript runtime for server-side development. Build fast, scalable
                        APIs with Express.js and the Node.js ecosystem.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Django & Flask</h3>
                    <p className="mt-2 text-gray-700">
                        Python web frameworks for rapid development. Django offers batteries-included
                        approach while Flask provides flexibility and simplicity.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Spring Boot</h3>
                    <p className="mt-2 text-gray-700">
                        Java framework for building production-ready applications. Enterprise-grade
                        features with convention over configuration.
                    </p>
                </div>
            </div>

            <h2 id="backend-essentials" className="text-2xl font-semibold mt-8 mb-4">Backend Essentials</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>RESTful API design and GraphQL</li>
                <li>Database management (SQL and NoSQL)</li>
                <li>Authentication with JWT and OAuth</li>
                <li>Caching strategies with Redis</li>
                <li>Message queues and background jobs</li>
            </ul>

            <ArticleFeedback articleId="/alldocs/welcome/backend"/>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/welcome/cloud")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/welcome/deployment")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:rocket-launch" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">App Logic - Deployment</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}
