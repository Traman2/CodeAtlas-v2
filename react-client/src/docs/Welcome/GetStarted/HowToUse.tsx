export const sections = [
    { id: "navigate-by-category", title: "Navigate by Category" },
    { id: "getting-started-guide", title: "Getting Started Guide" }
]

export default function DocsHowToUse() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>
            <h1 className="text-3xl font-semibold mt-2">How to use Code Atlas</h1>
            <p className="mt-2">
                Look at the multitude of documents that contain information on getting
                started with all the common technologies. These are all the current docs
                for every tech stack I've used so far, so the database might not contain
                what you're looking for
            </p>

            <h2 id="navigate-by-category" className="text-2xl font-semibold mt-8 mb-4">Navigate by Category</h2>
            <div className="flex flex-col gap-2">
                <a href="#devices" className="text-[#554DE2] hover:underline">Devices (Web Dev, Mobile, Desktop)</a>
                <a href="#app-logic" className="text-[#554DE2] hover:underline">App Logic (Cloud, Backend, Deployment, Data Analytics)</a>
                <a href="#tools" className="text-[#554DE2] hover:underline">Code Atlas Tools (API Finder, Planning Agent)</a>
                <a href="#resources" className="text-[#554DE2] hover:underline">Additional Resources</a>
            </div>

            <h2 id="getting-started-guide" className="text-2xl font-semibold mt-8 mb-4">Getting Started Guide</h2>
            <ol className="list-decimal list-inside mt-2 space-y-2">
                <li>Browse the navigation menu on the left to find your technology stack</li>
                <li>Click on any section to view detailed documentation and resources</li>
                <li>Use the search functionality to quickly find specific topics</li>
                <li>Check out the Tools section for helpful utilities like API Finder</li>
            </ol>
        </>
    )
}