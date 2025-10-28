import { useState } from "react"
import { useNavigate } from "react-router-dom"
import allDocsNavClicked from "/global/allDocsNavClicked.svg";
import allDocsNavNotClicked from "/global/allDocsNavNotClicked.svg";
import articlesNavClicked from "/global/articlesNavClicked.svg";
import articlesNavNotClicked from "/global/articlesNavNotClicked.svg";
import apiNavClicked from "/global/apiNavClicked.svg";
import apiNavNotClicked from "/global/apiNavNotClicked.svg";
import planningAgentNavClicked from "/global/planningAgentNavClicked.svg";
import planningAgentNavNotClicked from "/global/planningAgentNavNotClicked.svg";
import CodeAtlasMainLogo from "/global/CodeAtlasMainLogo.svg";
import DarkMode from "/global/DarkMode.svg";
import Github from "/global/Github.svg";

type PageType = "allDocs" | "articles" | "apiFinder" | "planningAgent";

interface Props {
    defaultPage: PageType;
}

export default function Navbar({defaultPage} : Props) {
    const [activeTab, setActiveTab] = useState(defaultPage)
    const navigate = useNavigate();

    return (
        <>
            <nav className="flex px-6 py-2 justify-between items-center gap-6">
                <div className="flex gap-8">
                    <div className="flex gap-3">
                        <img src={CodeAtlasMainLogo} className="w-10"/>
                        <div className="flex flex-col">
                            <h1 className="font-black uppercase tracking-tight">Code Atlas</h1>
                            <p className="text-[10px] font-bold text-[#4B5563]/80">ULTIMATE TECH DOCS TOOL</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => {setActiveTab("allDocs"); navigate("/AllDocs")}}
                            className={`cursor-pointer flex gap-2 items-center px-5 font-semibold text-sm transition-all duration-200 ${
                                activeTab === "allDocs"
                                    ? "bg-[#554DE2] text-white shadow-lg shadow-[#554DE2]/25 border-2 border-[#554DE2]"
                                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md"
                            }`}
                        >
                            <img src={activeTab === "allDocs" ? allDocsNavClicked : allDocsNavNotClicked} className="w-5"/>
                            All Docs
                        </button>
                        <button
                            onClick={() => {setActiveTab("articles"); navigate("/Articles")}}
                            className={`cursor-pointer flex gap-2 items-center px-5 font-semibold text-sm transition-all duration-200 ${
                                activeTab === "articles"
                                    ? "bg-[#554DE2] text-white shadow-lg shadow-[#554DE2]/25 border-2 border-[#554DE2]"
                                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md"
                            }`}
                        >
                            <img src={activeTab === "articles" ? articlesNavClicked : articlesNavNotClicked} className="w-5"/>
                            Articles
                        </button>
                        <button
                            onClick={() => {setActiveTab("apiFinder"); navigate("/APIFinder")}}
                            className={`cursor-pointer flex gap-2 items-center px-5 font-semibold text-sm transition-all duration-200 ${
                                activeTab === "apiFinder"
                                    ? "bg-[#554DE2] text-white shadow-lg shadow-[#554DE2]/25 border-2 border-[#554DE2]"
                                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md"
                            }`}
                        >
                            <img src={activeTab === "apiFinder" ? apiNavClicked : apiNavNotClicked} className="w-5"/>
                            API Finder
                        </button>
                        <button
                            onClick={() => {setActiveTab("planningAgent"); navigate("/PlanningAgent")}}
                            className={`cursor-pointer flex gap-2 items-center px-5 font-semibold text-sm transition-all duration-200 ${
                                activeTab === "planningAgent"
                                    ? "bg-[#554DE2] text-white shadow-lg shadow-[#554DE2]/25 border-2 border-[#554DE2]"
                                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md"
                            }`}
                        >
                            <img src={activeTab === "planningAgent" ? planningAgentNavClicked : planningAgentNavNotClicked} className="w-5"/>
                            Planning Agent
                        </button>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="cursor-pointer">
                        <img src={DarkMode} />
                    </button>
                    <button className="cursor-pointer">
                        <img src={Github} />
                    </button>
                </div>
            </nav>
        </>
    )
}