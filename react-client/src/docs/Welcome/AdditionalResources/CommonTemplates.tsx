export const sections = [
    { id: "template-categories", title: "Template Categories" },
    { id: "available-templates", title: "Available Templates" }
]

export default function CommonTemplatesDocs() {
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
        </>
    )
}
