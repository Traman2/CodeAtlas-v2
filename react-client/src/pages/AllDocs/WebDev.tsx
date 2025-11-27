import { useRef, useState, useEffect } from "react"
import { useParams, useNavigate, Navigate } from "react-router-dom"

import GithubGray from "/allDocs/GithubGray.svg"
import OpenOutside from "/allDocs/OpenOutside.svg"

import Overview, { sections as overviewSections } from "../../docs/WebDev/GetStarted/Overview"
import Comparison, { sections as comparisonSections } from "../../docs/WebDev/GetStarted/Comparison"
import ReactDocs, { sections as reactSections } from "../../docs/WebDev/Frameworks/React"
import VueDocs, { sections as vueSections } from "../../docs/WebDev/Frameworks/Vue"
import AngularDocs, { sections as angularSections } from "../../docs/WebDev/Frameworks/Angular"
import RechartsDocs, { sections as rechartsSections } from "../../docs/WebDev/Tools/Recharts"
import ShadcnDocs, { sections as shadcnSections } from "../../docs/WebDev/Tools/Shadcn"
import TailwindDocs, { sections as tailwindSections } from "../../docs/WebDev/Tools/Tailwind"
import ViteDocs, { sections as viteSections } from "../../docs/WebDev/Tools/Vite"

export default function WebDev() {
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

    function getSections() {
        switch (section) {
            case "overview":
                return overviewSections
            case "comparison":
                return comparisonSections
            case "react":
                return reactSections
            case "vue":
                return vueSections
            case "angular":
                return angularSections
            case "recharts":
                return rechartsSections
            case "shadcn":
                return shadcnSections
            case "tailwind":
                return tailwindSections
            case "vite":
                return viteSections
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
            case "comparison":
                return <Comparison />
            case "react":
                return <ReactDocs />
            case "vue":
                return <VueDocs />
            case "angular":
                return <AngularDocs />
            case "recharts":
                return <RechartsDocs />
            case "shadcn":
                return <ShadcnDocs />
            case "tailwind":
                return <TailwindDocs />
            case "vite":
                return <ViteDocs />
            default:
                return <Navigate to="/alldocs/webdev/overview" replace />
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
                        onClick={() => navigate("/alldocs/webdev/overview")}
                        className={`${section === "overview"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/webdev/comparison")}
                        className={`${section === "comparison"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Comparison
                    </button>
                    
                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Frameworks</h1>
                    <button
                        onClick={() => navigate("/alldocs/webdev/react")}
                        className={`${section === "react"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        React
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/webdev/vue")}
                        className={`${section === "vue"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Vue
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/webdev/angular")}
                        className={`${section === "angular"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Angular
                    </button>
                    
                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Tools</h1>
                    <button
                        onClick={() => navigate("/alldocs/webdev/recharts")}
                        className={`${section === "recharts"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Recharts
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/webdev/shadcn")}
                        className={`${section === "shadcn"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        shadcn/ui
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/webdev/tailwind")}
                        className={`${section === "tailwind"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Tailwind CSS
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/webdev/vite")}
                        className={`${section === "vite"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Vite
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
