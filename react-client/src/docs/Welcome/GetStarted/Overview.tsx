
export default function DocsOverview() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>
            <h1 className="text-3xl font-semibold mt-2">What is Code Atlas?</h1>
            <p className="mt-2">
                CodeAtlas is a documentation hub designed to help developers
                navigate various technology stacks across different platforms
                and application logic layers. Whether you're building web applications,
                mobile apps, desktop software, or managing backend infrastructure,
                CodeAtlas provides organized resources and guidance.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Links</h2>
            <div className="flex flex-col gap-2">
                <a href="#how-to-use" className="text-[#554DE2] hover:underline">How to Use Code Atlas</a>
                <a href="#component-summary" className="text-[#554DE2] hover:underline">Component Summary</a>
                <a href="https://github.com/traman2/codeatlas" target="_blank" rel="noopener noreferrer" className="text-[#554DE2] hover:underline">GitHub Repository</a>
                <a href="https://tejasraman.com" target="_blank" rel="noopener noreferrer" className="text-[#554DE2] hover:underline">Developer Portfolio</a>
            </div>
        </>
    )
}