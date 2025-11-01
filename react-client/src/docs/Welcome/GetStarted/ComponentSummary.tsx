import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "core-components", title: "Core Components" },
    { id: "feature-categories", title: "Feature Categories" }
]

export const metadata: GuideMetadata = {
    id: 'welcome-componentsummary',
    title: 'Component Summary',
    category: 'WELCOME',
    path: '/alldocs/welcome/componentsummary',
    keywords: ['components', 'summary', 'overview', 'features', 'navigation', 'documentation viewer'],
    description: 'Summary of available components and features in Code Atlas platform.',
    searchableContent: `
        Component Summary
        This section provides an overview of all the major components and features available in Code Atlas. Understanding these components will help you navigate and utilize the platform more effectively.
        Core Components
        Navigation Menu
        The left sidebar contains all navigation links organized by category. Categories include Devices, App Logic, Tools, and Additional Resources.
        Documentation Viewer
        The main content area displays documentation for your selected topic. Each doc includes code examples, best practices, and helpful resources.
        Quick Links Panel
        The right sidebar shows quick links to sections within the current page, making it easy to jump to specific topics.
        Feature Categories
        Device Documentation: Web Development, Mobile Apps, Desktop Applications
        Application Logic: Cloud Services, Backend Systems, Deployment Strategies
        Data & Analytics: Data processing, visualization, and analytics tools
        Developer Tools: API Finder, Planning Agent, and productivity utilities
    `.trim()
};

export default function ComponentSummary() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>
            <h1 className="text-3xl font-semibold mt-2">Component Summary</h1>
            <p className="mt-2">
                This section provides an overview of all the major components and features
                available in Code Atlas. Understanding these components will help you navigate
                and utilize the platform more effectively.
            </p>

            <h2 id="core-components" className="text-2xl font-semibold mt-8 mb-4">Core Components</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Navigation Menu</h3>
                    <p className="mt-2 text-gray-700">
                        The left sidebar contains all navigation links organized by category.
                        Categories include Devices, App Logic, Tools, and Additional Resources.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Documentation Viewer</h3>
                    <p className="mt-2 text-gray-700">
                        The main content area displays documentation for your selected topic.
                        Each doc includes code examples, best practices, and helpful resources.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Quick Links Panel</h3>
                    <p className="mt-2 text-gray-700">
                        The right sidebar shows quick links to sections within the current page,
                        making it easy to jump to specific topics.
                    </p>
                </div>
            </div>

            <h2 id="feature-categories" className="text-2xl font-semibold mt-8 mb-4">Feature Categories</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>Device Documentation: Web Development, Mobile Apps, Desktop Applications</li>
                <li>Application Logic: Cloud Services, Backend Systems, Deployment Strategies</li>
                <li>Data & Analytics: Data processing, visualization, and analytics tools</li>
                <li>Developer Tools: API Finder, Planning Agent, and productivity utilities</li>
            </ul>
        </>
    )
}