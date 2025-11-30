import { useRef, useState, useEffect } from "react"
import { useParams, useNavigate, Navigate } from "react-router-dom"

import GithubGray from "/allDocs/GithubGray.svg"
import OpenOutside from "/allDocs/OpenOutside.svg"

import Overview, { sections as overviewSections } from "../../docs/DataAnalytics/GetStarted/Overview"
import PyTorchDocs, { sections as pytorchSections } from "../../docs/DataAnalytics/Frameworks/PyTorch"
import SciKitLearnDocs, { sections as scikitlearnSections } from "../../docs/DataAnalytics/Frameworks/SciKitLearn"
import PandasDocs, { sections as pandasSections } from "../../docs/DataAnalytics/Libraries/Pandas"
import NumPyDocs, { sections as numpySections } from "../../docs/DataAnalytics/Libraries/NumPy"
import MatplotlibDocs, { sections as matplotlibSections } from "../../docs/DataAnalytics/Libraries/Matplotlib"

export default function DataAnalytics() {
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
            case "pytorch":
                return pytorchSections
            case "scikit-learn":
                return scikitlearnSections
            case "pandas":
                return pandasSections
            case "numpy":
                return numpySections
            case "matplotlib":
                return matplotlibSections
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
            case "pytorch":
                return <PyTorchDocs />
            case "scikit-learn":
                return <SciKitLearnDocs />
            case "pandas":
                return <PandasDocs />
            case "numpy":
                return <NumPyDocs />
            case "matplotlib":
                return <MatplotlibDocs />
            default:
                return <Navigate to="/alldocs/dataanalytics/overview" replace />
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
                        onClick={() => navigate("/alldocs/dataanalytics/overview")}
                        className={`${section === "overview"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Overview
                    </button>
                    
                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Frameworks</h1>
                    <button
                        onClick={() => navigate("/alldocs/dataanalytics/pytorch")}
                        className={`${section === "pytorch"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        PyTorch
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/dataanalytics/scikit-learn")}
                        className={`${section === "scikit-learn"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        SciKit-learn
                    </button>
                    
                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mt-6 mb-3">Libraries</h1>
                    <button
                        onClick={() => navigate("/alldocs/dataanalytics/pandas")}
                        className={`${section === "pandas"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Pandas
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/dataanalytics/numpy")}
                        className={`${section === "numpy"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        NumPy
                    </button>
                    <button
                        onClick={() => navigate("/alldocs/dataanalytics/matplotlib")}
                        className={`${section === "matplotlib"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        Matplotlib
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
