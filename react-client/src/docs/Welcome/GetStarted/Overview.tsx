import { useNavigate } from "react-router-dom"

export const sections = [
    { id: "quick-links", title: "Quick Links" }
]

export default function DocsOverview() {
    const navigate = useNavigate();

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

            <h2 id="quick-links" className="text-2xl font-semibold mt-8 mb-4">Quick Links</h2>
            <div className="flex flex-col gap-2">
                <button onClick={() => navigate("/alldocs/welcome/howtouse")} className="text-[#554DE2] hover:underline self-start cursor-pointer">How to Use Code Atlas</button>
                <button onClick={() => navigate("/alldocs/welcome/componentsummary")} className="text-[#554DE2] hover:underline self-start cursor-pointer">Component Summary</button>
                <a href="https://github.com/traman2/codeatlas" target="_blank" rel="noopener noreferrer" className="text-[#554DE2] hover:underline">GitHub Repository</a>
            </div>
        </>
    )
}