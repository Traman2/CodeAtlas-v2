import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-backend", title: "What is Backend Development?" },
    { id: "backend-frameworks", title: "Backend Frameworks" },
    { id: "backend-concepts", title: "Backend Concepts" },
    { id: "getting-started", title: "Getting Started" }
]

export const metadata: GuideMetadata = {
    id: 'backend-overview',
    title: 'Backend Development Overview',
    category: 'BACKEND',
    path: '/alldocs/backend/overview',
    keywords: ['backend', 'server', 'api', 'rest', 'graphql', 'nodejs', 'python', 'java', 'overview'],
    description: 'Introduction to backend development including REST APIs, databases, authentication, and popular backend frameworks.',
    searchableContent: `
        Backend Development Overview
        Server-side development APIs
        REST GraphQL databases
    `.trim()
};

export default function BackendOverview() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Backend Development Overview
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Your comprehensive guide to server-side development, APIs, databases, and backend frameworks
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:server" className="w-70 h-70 text-[#1d1884]"/>
            </div>

            <h2 id="what-is-backend" className="text-2xl font-semibold mt-12 mb-4">
                What is Backend Development?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Backend development involves building the server-side of applications—the part that users don't see but 
                that powers everything. Backend developers create APIs, manage databases, handle authentication, process 
                business logic, and ensure applications can scale.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                While frontend developers focus on what users see and interact with, backend developers focus on the logic, 
                data processing, and infrastructure that make applications work. The backend handles requests from the 
                frontend, processes data, interacts with databases, and sends responses back.
            </p>

            <h2 id="backend-frameworks" className="text-2xl font-semibold mt-12 mb-4">
                Backend Frameworks
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                There are many backend frameworks available, each suited for different use cases and programming languages:
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
                <button 
                    onClick={() => navigate("/alldocs/backend/express")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:nodejs" width="40" height="40" className="text-[#339933] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Node.js & Express</h3>
                        <p className="text-[#7b7f85] text-left">
                            JavaScript runtime for server-side development. Express is a minimal web framework for Node.js. 
                            Perfect for building REST APIs and real-time applications.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/backend/fastapi")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:language-python" width="40" height="40" className="text-[#3776AB] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">FastAPI</h3>
                        <p className="text-[#7b7f85] text-left">
                            Modern Python web framework for building APIs. Fast, easy to use, and includes automatic API 
                            documentation. Great for microservices and high-performance APIs.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/backend/django")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:language-python" width="40" height="40" className="text-[#3776AB] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Django</h3>
                        <p className="text-[#7b7f85] text-left">
                            High-level Python web framework that encourages rapid development. Includes ORM, admin panel, 
                            and many built-in features. Perfect for full-stack web applications.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/backend/flask")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:language-python" width="40" height="40" className="text-[#3776AB] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Flask</h3>
                        <p className="text-[#7b7f85] text-left">
                            Lightweight Python web framework. Minimal and flexible, giving you control over your application 
                            structure. Great for small to medium applications and APIs.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/backend/springboot")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:language-java" width="40" height="40" className="text-[#ED8B00] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Spring Boot</h3>
                        <p className="text-[#7b7f85] text-left">
                            Java framework for building production-ready applications. Enterprise-grade features with 
                            convention over configuration. Excellent for large-scale applications.
                        </p>
                    </div>
                </button>
            </div>

            <h2 id="backend-concepts" className="text-2xl font-semibold mt-12 mb-4">
                Backend Concepts
            </h2>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">REST APIs</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Representational State Transfer (REST) is an architectural style for designing web services. 
                            REST APIs use HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Databases</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Backend applications need to store and retrieve data. You'll work with SQL databases (PostgreSQL, 
                            MySQL) and NoSQL databases (MongoDB, Redis) depending on your needs.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Authentication & Authorization</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Secure your APIs with authentication (verifying who users are) and authorization (determining 
                            what they can do). Common methods include JWT tokens, OAuth, and session-based auth.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Middleware</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Middleware functions execute during the request-response cycle. They can handle logging, 
                            authentication, error handling, and request parsing.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Ready to start building backends? Here's a recommended learning path:
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-6">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Recommended Learning Path</h3>
                        <ol className="space-y-2 text-[#4B5563]">
                            <li className="leading-relaxed">
                                <strong>1. Choose a Language:</strong> Start with a language you're comfortable with. 
                                JavaScript (Node.js) is great if you know frontend JavaScript. Python is excellent for beginners.
                            </li>
                            <li className="leading-relaxed">
                                <strong>2. Learn HTTP Basics:</strong> Understand HTTP methods, status codes, headers, and 
                                how client-server communication works.
                            </li>
                            <li className="leading-relaxed">
                                <strong>3. Pick a Framework:</strong> Choose a framework like Express (Node.js) or FastAPI 
                                (Python) and build a simple REST API.
                            </li>
                            <li className="leading-relaxed">
                                <strong>4. Learn Database Basics:</strong> Understand SQL or NoSQL databases. Start with 
                                a simple database like SQLite or PostgreSQL.
                            </li>
                            <li className="leading-relaxed">
                                <strong>5. Add Authentication:</strong> Implement user authentication and authorization 
                                using JWT tokens or sessions.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/backend/comparison")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:chart-bar" width="32" height="32" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Framework Comparison</h3>
                            <p className="text-[#6b7280] text-sm text-left">Compare backend frameworks</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={() => navigate("/alldocs/backend/express")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:nodejs" width="32" height="32" className="text-[#339933]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Start with Express</h3>
                            <p className="text-[#6b7280] text-sm text-left">Learn Node.js backend development</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <p className="mt-8 mb-8 leading-relaxed text-[#6b7280]">
                Backend development is a crucial skill for building modern applications. Start with one framework, master 
                the fundamentals, and then explore others to expand your toolkit. Happy coding! 🚀
            </p>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/backend/comparison")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:chart-bar" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Backend Framework Comparison</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

