import { useState, useRef } from "react"
import GithubGray from "/allDocs/GithubGray.svg"
import OpenOutside from "/allDocs/OpenOutside.svg"
import Portfolio from "/allDocs/Portfolio.svg"

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
                    <a target="_blank" href="https://tejasraman.com" className="cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src={Portfolio} />
                            <p className="text-[#4B5563]">Portfolio</p>
                        </div>
                        <img src={OpenOutside} />
                    </a>
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

                <div className="flex-1 overflow-y-auto">
                    <div className="flex pt-4 gap-4">
                        <div className="flex-1 flex justify-center">
                            <div className="max-w-170">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam possimus
                                autem placeat ad soluta vel et! Dicta optio ratione voluptatem placeat ipsum
                                blanditiis ab, commodi hic cupiditate dolor impedit repellat magni cumque voluptatibus in a dolorem numquam deserunt! Iure earum eius quasi sunt accusamus quia placeat pariatur illo ad in. Officiis, cupiditate totam nemo dolorem numquam unde suscipit doloribus iste nesciunt? Tenetur mollitia ipsa eligendi magni eveniet rerum, expedita, aspernatur qui laborum error quo dicta vero similique reiciendis suscipit. Rerum iste obcaecati nobis impedit adipisci veritatis. Animi, harum asperiores. Quasi facere ad tempore, quod molestias perferendis veniam non dolor voluptates aut repellat neque sit et sunt dignissimos error accusamus consequatur. Illo debitis eaque, eos fugiat iste aspernatur doloremque inventore! Perferendis temporibus, eligendi eaque iusto et nesciunt nihil voluptas quibusdam sit corrupti deleniti, ipsum architecto consequatur quae optio ratione ducimus harum hic possimus voluptatum nisi! Magnam fugiat iusto tenetur sit, ratione reiciendis praesentium quis? Exercitationem non amet culpa natus eum ut ab provident corporis recusandae nihil voluptate modi quam et, beatae facilis iure debitis fugit quo ipsum cupiditate enim repellendus necessitatibus. Illo deserunt quam, suscipit fugit aliquid laborum nihil quos obcaecati perspiciatis. Consectetur, similique doloribus! Nobis quasi beatae nisi quae vel laboriosam suscipit iusto sequi ad ullam. Vero nostrum blanditiis quia, reiciendis expedita ipsam sint aut molestias aspernatur sapiente corrupti provident error sunt veniam totam quidem velit nihil explicabo commodi distinctio reprehenderit. Minus laudantium necessitatibus amet. Impedit aliquam eum dicta architecto quas distinctio minus! Quae animi ipsum placeat mollitia, nostrum consequuntur dolores debitis omnis sequi possimus adipisci repudiandae delectus nobis eaque dolorem, quod recusandae porro deleniti perspiciatis numquam! Quod assumenda ducimus dolores atque earum doloribus repellat, provident ipsum, eos tempora odit! Magni labore molestias accusamus in ratione autem corrupti dolorum, possimus odit expedita voluptatum, asperiores placeat sed totam consequatur nesciunt ex nostrum! Voluptatibus quis aliquam consectetur esse quaerat doloremque facilis sit nulla veritatis, incidunt ullam quos, ipsam architecto tenetur nobis sint a iure commodi quod minima facere. Necessitatibus illo, tenetur et aperiam velit veniam sint dolores magnam quo, doloremque ut dignissimos neque temporibus. Doloremque culpa placeat adipisci, voluptate voluptatum consequuntur incidunt commodi cumque maiores assumenda eveniet! Reprehenderit, assumenda. Repellat velit architecto dolorum beatae illum iusto soluta nemo ab neque, culpa eum nesciunt dolorem, dolore voluptatum nostrum placeat aut odio quis molestias fugit! Maiores sint rerum distinctio nulla corrupti nisi consequuntur voluptatibus quia sit natus ratione porro ex quae excepturi sapiente veritatis doloribus, architecto similique nemo? Error adipisci consequuntur in esse consequatur quae sapiente possimus alias quo. Odio impedit dolorum consequuntur ad possimus earum ex veritatis. Voluptatibus accusamus vero similique minus sint! Deleniti, ullam odio enim explicabo alias blanditiis unde eaque! Quia molestias minus dolorum. Eos ducimus natus iste saepe inventore, accusantium, quaerat libero nam repellat numquam, eveniet facere! Nobis natus praesentium magni officia accusantium cum obcaecati, incidunt provident nemo deleniti excepturi reiciendis soluta? Facilis sed architecto quasi corporis ducimus, facere illo quidem accusamus quam non soluta, rerum fugit placeat atque, repudiandae error assumenda odit cupiditate nostrum. Nihil dolor nostrum quas.
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