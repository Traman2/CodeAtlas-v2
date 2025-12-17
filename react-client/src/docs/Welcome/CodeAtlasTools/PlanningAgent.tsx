import { Icon } from '@iconify/react';
import type { GuideMetadata } from '../../../types/GuideMetadata';
import { useNavigate } from "react-router-dom";
import ArticleFeedback from '@/components/ArticleFeedback';

export const sections = [
    { id: "key-features", title: "Key Features" },
    { id: "use-cases", title: "Use Cases" }
]

export const metadata: GuideMetadata = {
    id: 'planningagent',
    title: 'Planning Agent',
    category: 'WELCOME',
    path: '/alldocs/welcome/planningagent',
    keywords: ['planning', 'agent', 'tech stack', 'architecture', 'ai', 'project', 'roadmap', 'technology selection'],
    description: 'An intelligent assistant to help you plan and architect your software projects. Generate structured project plans with technology recommendations.',
    searchableContent: `
        Planning Agent
        An intelligent assistant to help you plan and architect your software projects. The Planning Agent analyzes requirements and generates structured project plans with technology recommendations.
        Key Features
        Project Architecture
        Get recommendations for system architecture based on your project requirements. Includes suggestions for frontend, backend, database, and infrastructure choices.
        Technology Stack Selection
        Receive personalized technology stack recommendations based on project scope, team size, timeline, and scalability requirements.
        Task Breakdown
        Break down complex projects into manageable tasks and milestones. Get estimated timelines and dependencies between tasks.
        Use Cases
        Planning new application development
        Modernizing legacy systems
        Evaluating technology alternatives
        Creating development roadmaps
        Estimating project timelines and resources
    `.trim()
};

export default function PlanningAgentDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">CODE ATLAS TOOLS</p>
            <h1 className="text-3xl font-semibold mt-2">Planning Agent</h1>
            <p className="mt-2">
                An intelligent assistant to help you plan and architect your software projects.
                The Planning Agent analyzes requirements and generates structured project plans
                with technology recommendations.
            </p>

            <h2 id="key-features" className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Project Architecture</h3>
                    <p className="mt-2 text-gray-700">
                        Get recommendations for system architecture based on your project requirements.
                        Includes suggestions for frontend, backend, database, and infrastructure choices.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Technology Stack Selection</h3>
                    <p className="mt-2 text-gray-700">
                        Receive personalized technology stack recommendations based on project scope,
                        team size, timeline, and scalability requirements.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Task Breakdown</h3>
                    <p className="mt-2 text-gray-700">
                        Break down complex projects into manageable tasks and milestones. Get
                        estimated timelines and dependencies between tasks.
                    </p>
                </div>
            </div>

            <h2 id="use-cases" className="text-2xl font-semibold mt-8 mb-4">Use Cases</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>Planning new application development</li>
                <li>Modernizing legacy systems</li>
                <li>Evaluating technology alternatives</li>
                <li>Creating development roadmaps</li>
                <li>Estimating project timelines and resources</li>
            </ul>

            <ArticleFeedback articleId="/alldocs/welcome/planningAgent"/>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/welcome/apifinder")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/welcome/commontemplates")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:file-code" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Additional Resources - Common Templates</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

        </>
    )
}
