import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "template-categories", title: "Template Categories" },
    { id: "available-templates", title: "Available Templates" }
]

export const metadata: GuideMetadata = {
    id: 'commontemplates',
    title: 'Common Templates Repository',
    category: 'WELCOME',
    path: '/alldocs/welcome/commontemplates',
    keywords: ['templates', 'boilerplate', 'starter', 'examples', 'mern', 'mean', 'jamstack', 'nextjs', 'react'],
    description: 'Access a curated collection of project templates and boilerplates to kickstart your development. Save time with pre-configured setups.',
    searchableContent: `
        Common Templates Repository
        Access a curated collection of project templates and boilerplates to kickstart your development. Save time with pre-configured setups for common technology stacks and project types.
        Template Categories
        Web Application Templates
        Ready-to-use templates for React, Vue, Angular, and Next.js applications. Includes routing, state management, and styling setups.
        Backend API Templates
        Node.js, Django, Flask, and Spring Boot templates with authentication, database connections, and API structure pre-configured.
        Full-Stack Templates
        Complete application templates with frontend and backend integrated. Includes MERN, MEAN, and JAMstack configurations.
        Available Templates
        React + TypeScript + Tailwind CSS starter
        Next.js with authentication and database
        Express.js REST API with JWT auth
        Django REST framework template
        Mobile app templates for React Native
        Electron desktop app boilerplate
    `.trim()
};

export default function CommonTemplatesDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">ADDITIONAL RESOURCES</p>
            <h1 className="text-3xl font-semibold mt-2">Common Templates Repository</h1>
            <p className="mt-2">
                Access a curated collection of project templates and boilerplates to
                kickstart your development. Save time with pre-configured setups for
                common technology stacks and project types.
            </p>

            <h2 id="template-categories" className="text-2xl font-semibold mt-8 mb-4">Template Categories</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Web Application Templates</h3>
                    <p className="mt-2 text-gray-700">
                        Ready-to-use templates for React, Vue, Angular, and Next.js applications.
                        Includes routing, state management, and styling setups.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Backend API Templates</h3>
                    <p className="mt-2 text-gray-700">
                        Node.js, Django, Flask, and Spring Boot templates with authentication,
                        database connections, and API structure pre-configured.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Full-Stack Templates</h3>
                    <p className="mt-2 text-gray-700">
                        Complete application templates with frontend and backend integrated.
                        Includes MERN, MEAN, and JAMstack configurations.
                    </p>
                </div>
            </div>

            <h2 id="available-templates" className="text-2xl font-semibold mt-8 mb-4">Available Templates</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>React + TypeScript + Tailwind CSS starter</li>
                <li>Next.js with authentication and database</li>
                <li>Express.js REST API with JWT auth</li>
                <li>Django REST framework template</li>
                <li>Mobile app templates for React Native</li>
                <li>Electron desktop app boilerplate</li>
            </ul>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/welcome/planningagent")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/welcome/sitexml")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:file-xml-box" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Additional Resources - Site XML</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}
