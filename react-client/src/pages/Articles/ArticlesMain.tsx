import { useRef, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import WhyCodeAtlas, { sections as whyCodeAtlasSections } from "../../articles/Releases/WhyCodeAtlas"
import DocsV1Complete, { sections as docsV1CompleteSections } from "../../articles/Releases/DocsV1Complete"
import { Icon } from "@iconify/react"

export default function ArticlesMain() {
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
            case "why-code-atlas":
                return whyCodeAtlasSections
            case "docs-v1-complete":
                return docsV1CompleteSections
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

    return (
        <div className="flex flex-col h-dvh overflow-hidden bg-[#F9FAFB]">
            <div className="sticky top-0 z-10 bg-white">
                <Navbar defaultPage={"articles"}/>
            </div>
            <div className="flex flex-1 overflow-hidden">
                <div
                    ref={scrollbarRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="flex-1 flex flex-col mt-6 px-4 max-w-70 overflow-y-auto shrink-0 custom-scrollbar"
                >
                    <h1 className="px-2 font-semibold text-gray-800 uppercase text-sm mb-3">Releases</h1>
                    {/* Why I built Code atlas */}
                    <button
                        onClick={() => navigate("/articles/why-code-atlas")}
                        className={`${section === "why-code-atlas"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        <span>Why I Built Code Atlas</span>
                        <span className="text-xs text-[#7b7f85]">Dec 2</span>
                    </button>
                    {/* Docs Hub v1*/}
                    <button
                        onClick={() => navigate("/articles/docs-v1-complete")}
                        className={`${section === "docs-v1-complete"
                            ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
                            : "text-[#4B5563]"
                            } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
                    >
                        <span>Documentation Hub v1.0</span>
                        <span className="text-xs text-[#7b7f85]">Dec 17</span>
                    </button>
                    
                    <div className="mb-12" />
                </div>

                <div className="flex-1 overflow-y-auto content-scrollbar">
                    <div className="flex pt-6 gap-4">
                        <div className="flex-1 flex justify-center ">
                            <div className="max-w-170 w-full px-4 pb-40">
                                {section === "docs-v1-complete" && <DocsV1Complete />}
                                {section === "why-code-atlas" && <WhyCodeAtlas />}
                                {!section && (
                                    <div className="flex flex-col items-center justify-center mt-20">
                                        <Icon icon="material-symbols:newspaper" className="w-32 h-32 text-[#4c4b5c] mb-6" />
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Release Notes & Updates</h2>
                                        <p className="text-[#6b7280] text-center max-w-md leading-relaxed">
                                            Stay up to date with the latest features, improvements, and behind-the-scenes stories from Code Atlas. Select an article from the sidebar to start reading!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="sticky top-6 self-start pl-2 min-w-70 hidden xl:block">
                            <p className="text-[#4B5563] font-semibold mb-3">On this page</p>
                            <div className="flex flex-col">
                                {sectionsWithTop.map((sec) => (
                                    <button
                                        key={sec.id}
                                        onClick={() => scrollToSection(sec.id)}
                                        className={`cursor-pointer text-left py-1 pl-3 border-l-2 transition-all text-sm ${activeSection === sec.id
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
        </div>
    )
}