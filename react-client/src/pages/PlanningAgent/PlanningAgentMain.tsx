import { Icon } from "@iconify/react";
import Navbar from "../../components/Navbar";

export default function PlanningAgentMain() {
    return (
        <div className="flex flex-col h-dvh overflow-hidden bg-[#F9FAFB]">
            <div className="sticky top-0 z-10 bg-white">
                <Navbar defaultPage="planningAgent"/>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="max-w-4xl mx-auto px-6 py-12">

                    {/* Hero Section */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 bg-[#eae9ff] text-[#4f46ff] border px-4 py-2 mb-4 font-semibold text-sm">
                            <Icon icon="material-symbols:auto-awesome" width="20" height="20" />
                            AI-POWERED
                        </div>
                        <h1 className="text-3xl font-semibold mb-4">
                            Planning Agent
                        </h1>
                        <p className="text-lg text-[#6b7280] leading-relaxed mb-6">
                            Have a conversation with our AI agent about your project idea. It will intelligently design
                            a complete tech stack layout, showing you which technologies to use and exactly how they
                            should integrate with each other.
                        </p>
                    </div>

                    {/* Main Illustration */}
                    <div className="flex justify-center mb-12">
                        <Icon icon="material-symbols:account-tree" className="w-64 h-64 text-[#1d1884]" />
                    </div>

                    {/* How It Works */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">
                            How It Works
                        </h2>
                        <div className="space-y-12">
                            <div>
                                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                    <Icon icon="material-symbols:forum" className="text-[#4f46ff]" width="24" height="24" />
                                    Start a Conversation
                                </h3>
                                <p className="text-[#6b7280] leading-relaxed">
                                    Tell the agent about your project in natural language. Whether you're building a
                                    social media app, an e-commerce platform, or a dashboard, just describe what you
                                    want to build and the agent will ask clarifying questions.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                    <Icon icon="material-symbols:smart-toy" className="text-[#4f46ff]" width="24" height="24" />
                                    Agent Analyzes & Designs
                                </h3>
                                <p className="text-[#6b7280] leading-relaxed">
                                    The AI agent powered by LangGraph analyzes your requirements, considers best
                                    practices, scalability needs, and modern development patterns to design the optimal
                                    tech stack for your specific use case.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                    <Icon icon="material-symbols:view-cozy" className="text-[#4f46ff]" width="24" height="24" />
                                    Visual Flow Grid Generated
                                </h3>
                                <p className="text-[#6b7280] leading-relaxed">
                                    Watch as the agent populates a visual flow grid showing your complete stack layout—
                                    frontend, backend, database, cloud services, and deployment tools. Each component
                                    includes integration guidance explaining how the parts connect together.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* What You'll Get */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">
                            What You'll Get
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                                <div className="flex items-start gap-3">
                                    <Icon icon="material-symbols:layers" className="text-[#4f46ff]" width="28" height="28" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Complete Stack Layout</h3>
                                        <p className="text-[#7b7f85] text-sm">
                                            Visual representation of your entire tech stack organized by layers—
                                            frontend, backend, database, and infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                                <div className="flex items-start gap-3">
                                    <Icon icon="material-symbols:integration-instructions" className="text-[#4f46ff]" width="28" height="28" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Integration Guidance</h3>
                                        <p className="text-[#7b7f85] text-sm">
                                            Clear explanations of how each technology connects to others—from
                                            API calls to database connections to deployment pipelines.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                                <div className="flex items-start gap-3">
                                    <Icon icon="material-symbols:lightbulb" className="text-[#4f46ff]" width="28" height="28" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Best Practice Recommendations</h3>
                                        <p className="text-[#7b7f85] text-sm">
                                            Technology suggestions based on industry best practices, scalability
                                            considerations, and your specific project requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                                <div className="flex items-start gap-3">
                                    <Icon icon="material-symbols:edit-document" className="text-[#4f46ff]" width="28" height="28" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Conversational Refinement</h3>
                                        <p className="text-[#7b7f85] text-sm">
                                            Modify and adjust your stack through conversation—swap technologies,
                                            adjust complexity, or explore alternative approaches.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Example Stack Grid Preview */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">
                            Example Stack Visualization
                        </h2>
                        <div className="bg-[#f6f6f6] p-8 border border-[#f0f0f0]">
                            <div className="space-y-6">
                                {/* Frontend Layer */}
                                <div className="bg-white border border-[#4f46ff] p-6 flex flex-col items-center">
                                    <p className="text-xs font-semibold text-[#7b7f85] mb-3">FRONTEND</p>
                                    <div className="flex gap-3">
                                        <div className="bg-[#f6f6f6] border border-[#4f46ff] px-4 py-3 flex items-center gap-2">
                                            <Icon icon="logos:react" width="24" height="24" />
                                            <span className="font-semibold text-sm">React</span>
                                        </div>
                                        <div className="bg-[#f6f6f6] border border-[#4f46ff] px-4 py-3 flex items-center gap-2">
                                            <Icon icon="logos:tailwindcss-icon" width="24" height="24" />
                                            <span className="font-semibold text-sm">Tailwind CSS</span>
                                        </div>
                                        <div className="bg-[#f6f6f6] border border-[#4f46ff] px-4 py-3 flex items-center gap-2">
                                            <Icon icon="logos:vitejs" width="24" height="24" />
                                            <span className="font-semibold text-sm">Vite</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Icon icon="material-symbols:arrow-downward" className="text-[#4f46ff] text-2xl" />
                                </div>

                                {/* Backend Layer */}
                                <div className="bg-white border border-[#4f46ff] p-6 flex flex-col items-center">
                                    <p className="text-xs font-semibold text-[#7b7f85] mb-3">BACKEND</p>
                                    <div className="flex gap-3">
                                        <div className="bg-[#f6f6f6] border border-[#4f46ff] px-4 py-3 flex items-center gap-2">
                                            <Icon icon="logos:nodejs-icon" width="24" height="24" />
                                            <span className="font-semibold text-sm">Node.js</span>
                                        </div>
                                        <div className="bg-[#f6f6f6] border border-[#4f46ff] px-4 py-3 flex items-center gap-2">
                                            <Icon icon="simple-icons:express" width="24" height="24" />
                                            <span className="font-semibold text-sm">Express</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Icon icon="material-symbols:arrow-downward" className="text-[#4f46ff] text-2xl" />
                                </div>

                                {/* Database Layer */}
                                <div className="bg-white border border-[#4f46ff] p-6 flex flex-col items-center">
                                    <p className="text-xs font-semibold text-[#7b7f85] mb-3">DATABASE</p>
                                    <div className="flex gap-3">
                                        <div className="bg-[#f6f6f6] border border-[#4f46ff] px-4 py-3 flex items-center gap-2">
                                            <Icon icon="logos:postgresql" width="24" height="24" />
                                            <span className="font-semibold text-sm">PostgreSQL</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Icon icon="material-symbols:arrow-downward" className="text-[#4f46ff] text-2xl" />
                                </div>

                                {/* Deployment Layer */}
                                <div className="bg-white border border-[#4f46ff] p-6 flex flex-col items-center">
                                    <p className="text-xs font-semibold text-[#7b7f85] mb-3">DEPLOYMENT</p>
                                    <div className="flex gap-3">
                                        <div className="bg-[#f6f6f6] border border-[#4f46ff] px-4 py-3 flex items-center gap-2">
                                            <Icon icon="logos:aws" width="24" height="24" />
                                            <span className="font-semibold text-sm">AWS</span>
                                        </div>
                                        <div className="bg-[#f6f6f6] border border-[#4f46ff] px-4 py-3 flex items-center gap-2">
                                            <Icon icon="logos:docker-icon" width="24" height="24" />
                                            <span className="font-semibold text-sm">Docker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Architecture Flow */}
                    <div className="bg-[#f6f6f6] p-8 border border-[#f0f0f0] mb-12">
                        <h2 className="text-2xl font-semibold mb-6">
                            Architecture Flow
                        </h2>

                        {/* Flow diagram */}
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                            {/* User Node */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-white border border-[#4f46ff] p-6 flex flex-col items-center gap-3 min-w-[180px]">
                                    <Icon icon="material-symbols:chat" width="50" height="50" className="text-[#4f46ff]" />
                                    <div className="text-center">
                                        <p className="font-semibold">User</p>
                                        <p className="text-xs text-[#7b7f85]">Describes Project</p>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow Right / Down */}
                            <div className="flex lg:flex-row flex-col items-center">
                                <Icon icon="material-symbols:arrow-forward" className="text-[#4f46ff] text-3xl hidden lg:block" />
                                <Icon icon="material-symbols:arrow-downward" className="text-[#4f46ff] text-3xl lg:hidden" />
                            </div>

                            {/* API Gateway Node */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-white border border-[#4f46ff] p-6 flex flex-col items-center gap-3 min-w-[180px]">
                                    <Icon icon="mdi:api" width="50" height="50" className="text-[#4f46ff]" />
                                    <div className="text-center">
                                        <p className="font-semibold">API Gateway</p>
                                        <p className="text-xs text-[#7b7f85]">Routes Conversation</p>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow Right / Down */}
                            <div className="flex lg:flex-row flex-col items-center">
                                <Icon icon="material-symbols:arrow-forward" className="text-[#4f46ff] text-3xl hidden lg:block" />
                                <Icon icon="material-symbols:arrow-downward" className="text-[#4f46ff] text-3xl lg:hidden" />
                            </div>

                            {/* Lambda + LangGraph Node */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-white border border-[#4f46ff] p-6 flex flex-col items-center gap-4 min-w-[180px]">
                                    <div className="flex items-center gap-3">
                                        <Icon icon="logos:aws-lambda" width="40" height="40" />
                                        <span className="text-[#4f46ff] font-bold">+</span>
                                        <Icon icon="simple-icons:langchain" width="40" height="40" className="text-[#1C3C3C]" />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold">Lambda + LangGraph</p>
                                        <p className="text-xs text-[#7b7f85]">Stack Planning</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional info */}
                        <div className="mt-8 pt-6 border-t border-[#e5e7eb]">
                            <h3 className="font-semibold mb-4">Conversational AI Technology</h3>
                            <div className="flex items-center gap-4">
                                <Icon icon="simple-icons:langchain" width="40" height="40" className="text-[#1C3C3C]" />
                                <div>
                                    <p className="font-semibold">LangGraph Framework</p>
                                    <p className="text-sm text-[#6b7280]">Stateful, multi-actor agent framework for building complex conversational AI workflows</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coming Soon CTA */}
                    <div className="bg-white p-10 border-2 border-[#4f46ff] relative">
                        <div className="absolute top-0 right-0 bg-[#4f46ff] text-white px-4 py-1 text-xs font-semibold">
                            BETA
                        </div>
                        <div className="flex justify-center mb-6">
                            <Icon icon="material-symbols:rocket-launch" width="80" height="80" className="text-[#4f46ff]" />
                        </div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Coming Soon
                        </h2>
                        <p className="text-[#6b7280] mb-6 leading-relaxed">
                            The Planning Agent is currently under development. This conversational AI tool will help you
                            design the perfect tech stack for your project through natural dialogue, with visual flow
                            grids showing exactly how everything connects.
                        </p>
                        <p className="text-sm text-[#7b7f85]">
                            Expected launch: Q1 2025
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}