import { useRef, useState, useEffect } from "react"
import { useParams, useNavigate, Navigate } from "react-router-dom"

import GithubGray from "/allDocs/GithubGray.svg"
import OpenOutside from "/allDocs/OpenOutside.svg"

import Overview, { sections as overviewSections } from "../../docs/Welcome/GetStarted/Overview"
import HowToUse, { sections as howToUseSections } from "../../docs/Welcome/GetStarted/HowToUse"
import WebDevDocs, { sections as webDevSections } from "../../docs/Welcome/Devices/WebDev"
import MobileDocs, { sections as mobileSections } from "../../docs/Welcome/Devices/Mobile"
import DesktopDocs, { sections as desktopSections } from "../../docs/Welcome/Devices/Desktop"
import CloudDocs, { sections as cloudSections } from "../../docs/Welcome/AppLogic/Cloud"
import BackendDocs, { sections as backendSections } from "../../docs/Welcome/AppLogic/Backend"
import DeploymentDocs, { sections as deploymentSections } from "../../docs/Welcome/AppLogic/Deployment"
import DataAnalyticsDocs, { sections as dataAnalyticsSections } from "../../docs/Welcome/AppLogic/DataAnalytics"
import APIFinderDocs, { sections as apiFinderSections } from "../../docs/Welcome/CodeAtlasTools/APIFinder"
import PlanningAgentDocs, { sections as planningAgentSections } from "../../docs/Welcome/CodeAtlasTools/PlanningAgent"
import CommonTemplatesDocs, { sections as commonTemplatesSections } from "../../docs/Welcome/AdditionalResources/CommonTemplates"
import SiteXmlDocs, { sections as siteXmlSections } from "../../docs/Welcome/AdditionalResources/SiteXml"

export default function Welcome() {
    const { section } = useParams<{ section: string }>()
    const navigate = useNavigate()
    const scrollbarRef = useRef<HTMLDivElement>(null)
    const [activeSection, setActiveSection] = useState<string>("")

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

    // Get sections based on current doc
    function getSections() {
        switch (section) {
            case "overview":
                return overviewSections
            case "howtouse":
                return howToUseSections
            case "webdev":
                return webDevSections
            case "mobile":
                return mobileSections
            case "desktop":
                return desktopSections
            case "cloud":
                return cloudSections
            case "backend":
                return backendSections
            case "deployment":
                return deploymentSections
            case "dataanalytics":
                return dataAnalyticsSections
            case "apifinder":
                return apiFinderSections
            case "planningagent":
                return planningAgentSections
            case "commontemplates":
                return commonTemplatesSections
            case "sitexml":
                return siteXmlSections
            default:
                return [{ id: "", title: "" }]
        }
    }

    const currentSections = getSections()

    // Add "Top of page" to sections
    const sectionsWithTop = [
        { id: "top-of-page", title: "Top of page" },
        ...currentSections
    ]

    useEffect(() => {
        const contentContainer = document.querySelector('.content-scrollbar')
        if (!contentContainer) return

        const handleScroll = () => {
            if (contentContainer.scrollTop < 50) {
                setActiveSection("top-of-page")
                return
            }

            const sectionElements = currentSections
                .map(sec => ({
                    id: sec.id,
                    element: document.getElementById(sec.id)
                }))
                .filter(item => item.element !== null)
            let activeId = "top-of-page"

            for (let i = 0; i < sectionElements.length; i++) {
                const element = sectionElements[i].element
                if (!element) continue
                const rect = element.getBoundingClientRect()
                if (rect.top <= 200) {
                    activeId = sectionElements[i].id
                } else {
                    break
                }
            }

            setActiveSection(activeId)
        }

        contentContainer.addEventListener('scroll', handleScroll)
        // Set initial state
        handleScroll()

        return () => {
            contentContainer.removeEventListener('scroll', handleScroll)
        }
    }, [currentSections])

    const scrollToSection = (sectionId: string) => {
        if (sectionId === "top-of-page") {
            const contentContainer = document.querySelector('.content-scrollbar')
            if (contentContainer) {
                contentContainer.scrollTo({ top: 0, behavior: "smooth" })
            }
        } else {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        }
    }

    function renderDocs() {
        switch (section) {
            case "overview":
                return <Overview />
            case "howtouse":
                return <HowToUse />
            case "webdev":
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
            case "dataanalytics":
                return <DataAnalyticsDocs />
            case "apifinder":
                return <APIFinderDocs />
            case "planningagent":
                return <PlanningAgentDocs />
            case "commontemplates":
                return <CommonTemplatesDocs />
            case "sitexml":
                return <SiteXmlDocs />
            default:
                return <Navigate to="/apifinder" replace />
        }
    }

    return (
        <>
            <div className="flex flex-1 h-full overflow-hidden">
                <div
                    ref={scrollbarRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="flex-1 flex flex-col pt-6 px-4 max-w-70 overflow-y-auto shrink-0 custom-scrollbar"
                >
                    <a target="_blank" href="https://github.com/traman2/codeatlas" className="cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src={GithubGray} />
                            <p className="text-[#4B5563]">Github Repo</p>
                        </div>
                        <img src={OpenOutside} />
                    </a>
                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Get Started</h1>
                    <button
                        onClick={() => navigate("/alldocs/welcome/overview")}
                        className={`${section === "overview"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/welcome/howtouse")}
                        className={`${section === "howtouse"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        How to use
                    </button>
                    
                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Devices</h1>
                    <button
                        onClick={() => navigate("/alldocs/welcome/webdev")}
                        className={`${section === "webdev"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Web Dev
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/welcome/mobile")}
                        className={`${section === "mobile"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Mobile
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/welcome/desktop")}
                        className={`${section === "desktop"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Desktop
                    </button>

                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">App Logic</h1>
                    <button
                        onClick={() => navigate("/alldocs/welcome/cloud")}
                        className={`${section === "cloud"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Cloud
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/welcome/backend")}
                        className={`${section === "backend"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Backend
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/welcome/deployment")}
                        className={`${section === "deployment"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Deployment
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/welcome/dataanalytics")}
                        className={`${section === "dataanalytics"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Data Analytics
                    </button>

                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Code Atlas Tools</h1>
                    <button
                        onClick={() => navigate("/alldocs/welcome/apifinder")}
                        className={`${section === "apifinder"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        API Finder
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/welcome/planningagent")}
                        className={`${section === "planningagent"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Planning Agent
                    </button>

                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Additional Resources</h1>
                    <button
                        onClick={() => navigate("/alldocs/welcome/commontemplates")}
                        className={`${section === "commontemplates"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Common Templates Repo
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/welcome/sitexml")}
                        className={`${section === "sitexml"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Site XML file
                    </button>
                    <div className="mb-12" />
                </div>

                <div className="flex-1 overflow-y-auto content-scrollbar">
                    <div className="flex pt-6 gap-4">
                        <div className="flex-1 flex justify-center">
                            <div className="max-w-170 w-full px-4 pb-40">
                                {renderDocs()}
                            </div>
                        </div>
                        <div className="sticky top-6 self-start pl-2 min-w-70 hidden xl:block">
                            <p className="text-[#4B5563] font-semibold mb-3">On this page</p>
                            <div className="flex flex-col">
                                {sectionsWithTop.map((sec) => (
                                    <button
                                        key={sec.id}
                                        onClick={() => scrollToSection(sec.id)}
                                        className={`cursor-pointer text-left py-1 pl-3 border-l-2 transition-all text-sm ${
                                            activeSection === sec.id
                                                ? "border-[#4f46ff] text-[#4f46ff] font-semibold"
                                                : "border-gray-200 text-[#4B5563] hover:text-gray-900"
                                        }`}
                                    >
                                        {sec.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}