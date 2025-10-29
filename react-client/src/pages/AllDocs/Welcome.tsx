import { useState, useRef } from "react"

import GithubGray from "/allDocs/GithubGray.svg"
import OpenOutside from "/allDocs/OpenOutside.svg"
import Portfolio from "/allDocs/Portfolio.svg"

import DocsOverview from "../../docs/Welcome/GetStarted/Overview"
import DocsHowToUse from "../../docs/Welcome/GetStarted/HowToUse"
import ComponentSummary from "../../docs/Welcome/GetStarted/ComponentSummary"
import WebDevDocs from "../../docs/Welcome/Devices/WebDev"
import MobileDocs from "../../docs/Welcome/Devices/Mobile"
import DesktopDocs from "../../docs/Welcome/Devices/Desktop"
import CloudDocs from "../../docs/Welcome/AppLogic/Cloud"
import BackendDocs from "../../docs/Welcome/AppLogic/Backend"
import DeploymentDocs from "../../docs/Welcome/AppLogic/Deployment"
import DataAnalyticsDocs from "../../docs/Welcome/AppLogic/DataAnalytics"
import APIFinderDocs from "../../docs/Welcome/CodeAtlasTools/APIFinder"
import PlanningAgentDocs from "../../docs/Welcome/CodeAtlasTools/PlanningAgent"
import CommonTemplatesDocs from "../../docs/Welcome/AdditionalResources/CommonTemplates"
import SiteXmlDocs from "../../docs/Welcome/AdditionalResources/SiteXml"

export default function Welcome() {
    const [activeTab, setActiveTab] = useState<string>("overview")
    const scrollbarRef = useRef<HTMLDivElement>(null)

    const handleMouseEnter = () => {
        if (scrollbarRef.current) {
            scrollbarRef.current.classList.add("scrollbar-visible")
        }
    }

    const handleMouseLeave = () => {
        if (scrollbarRef.current) {
            scrollbarRef.current.classList.remove("scrollbar-visible")
        }
    }

    function renderDocs() {
        switch (activeTab) {
            case "overview":
                return <DocsOverview />
            case "howToUse":
                return <DocsHowToUse />
            case "componentSummary":
                return <ComponentSummary />
            case "webDev":
                return <WebDevDocs />
            case "mobile":
                return <MobileDocs />
            case "desktop":
                return <DesktopDocs />
            case "cloud":
                return <CloudDocs />
            case "backend":
                return <BackendDocs />
            case "deployment":
                return <DeploymentDocs />
            case "dataAnalytics":
                return <DataAnalyticsDocs />
            case "apiFinder":
                return <APIFinderDocs />
            case "planningAgent":
                return <PlanningAgentDocs />
            case "commonTemplates":
                return <CommonTemplatesDocs />
            case "siteXml":
                return <SiteXmlDocs />
            default:
                return <DocsOverview />
        }
    }

    return (
        <>
            <div className="flex flex-1 h-full overflow-hidden">
                <div
                    ref={scrollbarRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="flex-1 flex flex-col pt-4 px-4 max-w-70 overflow-y-auto shrink-0 custom-scrollbar"
                >
                    <a target="_blank" href="https://github.com/traman2/codeatlas" className="cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src={GithubGray} />
                            <p className="text-[#4B5563]">Github Repo</p>
                        </div>
                        <img src={OpenOutside} />
                    </a>
                    {/* <a target="_blank" href="https://tejasraman.com" className="cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src={Portfolio} />
                            <p className="text-[#4B5563]">Portfolio</p>
                        </div>
                        <img src={OpenOutside} />
                    </a> */}
                    {/* Main Welcome Links */}
                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Get Started</h1>
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`${activeTab === "overview"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab("howToUse")}
                        className={`${activeTab === "howToUse"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        How to use
                    </button>
                    <button
                        onClick={() => setActiveTab("componentSummary")}
                        className={`${activeTab === "componentSummary"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Component summary
                    </button>

                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Devices</h1>
                    <button
                        onClick={() => setActiveTab("webDev")}
                        className={`${activeTab === "webDev"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Web Dev
                    </button>
                    <button
                        onClick={() => setActiveTab("mobile")}
                        className={`${activeTab === "mobile"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Mobile
                    </button>
                    <button
                        onClick={() => setActiveTab("desktop")}
                        className={`${activeTab === "desktop"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Desktop
                    </button>

                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">App Logic</h1>
                    <button
                        onClick={() => setActiveTab("cloud")}
                        className={`${activeTab === "cloud"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Cloud
                    </button>
                    <button
                        onClick={() => setActiveTab("backend")}
                        className={`${activeTab === "backend"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Backend
                    </button>
                    <button
                        onClick={() => setActiveTab("deployment")}
                        className={`${activeTab === "deployment"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Deployment
                    </button>
                    <button
                        onClick={() => setActiveTab("dataAnalytics")}
                        className={`${activeTab === "dataAnalytics"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Data Analytics
                    </button>

                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Code Atlas Tools</h1>
                    <button
                        onClick={() => setActiveTab("apiFinder")}
                        className={`${activeTab === "apiFinder"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        API Finder
                    </button>
                    <button
                        onClick={() => setActiveTab("planningAgent")}
                        className={`${activeTab === "planningAgent"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Planning Agent
                    </button>

                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Additional Resources</h1>
                    <button
                        onClick={() => setActiveTab("commonTemplates")}
                        className={`${activeTab === "commonTemplates"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Common Templates Repo
                    </button>
                    <button
                        onClick={() => setActiveTab("siteXml")}
                        className={`${activeTab === "siteXml"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Site XML file
                    </button>
                    <div className="mb-12" />
                </div>

                <div className="flex-1 overflow-y-auto content-scrollbar">
                    <div className="flex pt-4 gap-4">
                        <div className="flex-1 flex justify-center">
                            <div className="max-w-170 px-4">
                                {renderDocs()}
                            </div>
                        </div>

                        <div className="sticky top-4 self-start pl-2 min-w-70 hidden xl:block">
                            <p className="text-[#4B5563] font-semibold">On this page</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}