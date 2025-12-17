import { Icon } from "@iconify/react";
import Navbar from "../../components/Navbar";

export default function APIFinderMain() {
    return (
        <div className="flex flex-col h-dvh overflow-hidden bg-[#F9FAFB]">
            <div className="sticky top-0 z-10 bg-white">
                <Navbar defaultPage="apiFinder"/>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="max-w-4xl mx-auto px-6 py-12">

                    {/* Hero Section */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 bg-[#eae9ff] text-[#4f46ff] border px-4 py-2 mb-4 font-semibold text-sm">
                            <Icon icon="material-symbols:auto-awesome" width="20" height="20" />
                            AI-POWERED
                        </div>
                        <h1 className="text-3xl font-semibold mb-4">
                            API Finder
                        </h1>
                        <p className="text-lg text-[#6b7280] leading-relaxed mb-6">
                            Describe what you're looking for, and our AI agent will find the most relevant API services
                            for your project—complete with descriptions, pricing, and comparison charts.
                        </p>
                    </div>

                    {/* Main Illustration */}
                    <div className="flex justify-center mb-12">
                        <Icon icon="material-symbols:travel-explore" className="w-64 h-64 text-[#1d1884]" />
                    </div>

                    {/* How It Works */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">
                            How It Works
                        </h2>
                        <div className="space-y-12">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                        <Icon icon="material-symbols:chat-bubble-outline" className="text-[#4f46ff]" width="24" height="24" />
                                        Describe Your Need
                                    </h3>
                                    <p className="text-[#6b7280] leading-relaxed">
                                        Simply tell us what functionality you're looking for—payment processing,
                                        email service, SMS, authentication, or any other API service.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                        <Icon icon="material-symbols:robot-2" className="text-[#4f46ff]" width="24" height="24" />
                                        AI Agent Searches
                                    </h3>
                                    <p className="text-[#6b7280] leading-relaxed">
                                        Our AI agent powered by LangGraph intelligently searches and analyzes
                                        multiple sources to find the best API services matching your requirements.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                        <Icon icon="material-symbols:analytics-outline" className="text-[#4f46ff]" width="24" height="24" />
                                        Get Detailed Results
                                    </h3>
                                    <p className="text-[#6b7280] leading-relaxed">
                                        Receive comprehensive information including descriptions, official website links,
                                        pricing charts, and comparison tables to help you make informed decisions.
                                    </p>
                                </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">
                            What You'll Get
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                                <div className="flex items-start gap-3">
                                    <Icon icon="material-symbols:description-outline" className="text-[#4f46ff]" width="28" height="28" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Full Descriptions</h3>
                                        <p className="text-[#7b7f85] text-sm">
                                            Detailed explanations of each API service, what it does, and its key features.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                                <div className="flex items-start gap-3">
                                    <Icon icon="material-symbols:link" className="text-[#4f46ff]" width="28" height="28" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Official Website Links</h3>
                                        <p className="text-[#7b7f85] text-sm">
                                            Direct links to official documentation and sign-up pages for easy access.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                                <div className="flex items-start gap-3">
                                    <Icon icon="material-symbols:payments-outline" className="text-[#4f46ff]" width="28" height="28" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Pricing Charts</h3>
                                        <p className="text-[#7b7f85] text-sm">
                                            Visual pricing breakdowns generated with Recharts to compare costs at a glance.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                                <div className="flex items-start gap-3">
                                    <Icon icon="material-symbols:compare-arrows" className="text-[#4f46ff]" width="28" height="28" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Comparison Tables</h3>
                                        <p className="text-[#7b7f85] text-sm">
                                            Side-by-side comparisons when multiple services are found, highlighting key differences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Flowchart section of how this feature works */}
                    <div className="bg-[#f6f6f6] p-8 border border-[#f0f0f0] mb-12">
                        <h2 className="text-2xl font-semibold mb-6">
                            Architecture Flow
                        </h2>

                        {/* Flow diagram */}
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                            {/* User Node */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-white border border-[#4f46ff] p-6 flex flex-col items-center gap-3 min-w-[180px]">
                                    <Icon icon="material-symbols:laptop-mac" width="50" height="50" className="text-[#4f46ff]" />
                                    <div className="text-center">
                                        <p className="font-semibold">User</p>
                                        <p className="text-xs text-[#7b7f85]">Makes Request</p>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow Right / Down */}
                            <div className="flex lg:flex-row flex-col items-center">
                                <Icon icon="material-symbols:arrow-forward" className="text-[#4f46ff] text-3xl hidden lg:block" />
                                <Icon icon="material-symbols:arrow-downward" className="text-[#4f46ff] text-3xl lg:hidden" />
                            </div>

                            {/* API Gateway Node */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-white border border-[#4f46ff] p-6 flex flex-col items-center gap-3 min-w-[180px]">
                                    <Icon icon="mdi:api" width="50" height="50" className="text-[#4f46ff]" />
                                    <div className="text-center">
                                        <p className="font-semibold">API Gateway</p>
                                        <p className="text-xs text-[#7b7f85]">Routes Request</p>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow Right / Down */}
                            <div className="flex lg:flex-row flex-col items-center">
                                <Icon icon="material-symbols:arrow-forward" className="text-[#4f46ff] text-3xl hidden lg:block" />
                                <Icon icon="material-symbols:arrow-downward" className="text-[#4f46ff] text-3xl lg:hidden" />
                            </div>

                            {/* LangGraph Node */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-white border border-[#4f46ff] p-6 flex flex-col items-center gap-4 min-w-[180px]">
                                    <div className="flex items-center gap-3">
                                        <Icon icon="simple-icons:langchain" width="40" height="40" className="text-[#4f46ff]" />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold">LangGraph</p>
                                        <p className="text-xs text-[#7b7f85]">Compare different providers and provide comparison tools</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional info */}
                        <div className="mt-8 pt-6 border-t border-[#e5e7eb]">
                            <h3 className="font-semibold mb-4">Visualization Technology</h3>
                            <div className="flex items-center gap-4">
                                <Icon icon="solar:chart-linear" width="40" height="40" className="text-[#FF6B6B]" />
                                <div>
                                    <p className="font-semibold">Recharts</p>
                                    <p className="text-sm text-[#6b7280]">Generates pricing charts and comparison visualizations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coming Soon CTA */}
                    <div className="bg-white p-10 border-2 border-[#4f46ff] relative">
                        <div className="absolute top-0 right-0 bg-[#4f46ff] text-white px-4 py-1 text-xs font-semibold">
                            BETA
                        </div>
                        <div className="flex justify-center mb-6">
                            <Icon icon="material-symbols:rocket-launch" width="80" height="80" className="text-[#4f46ff]" />
                        </div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Coming Soon
                        </h2>
                        <p className="text-[#6b7280] mb-6 leading-relaxed">
                            I'm still putting together the finishing touches on the API finder feature. To ensure a smooth experience with AI agents and render code, the release data has been extended to Jan 3rd, 2025
                        </p>
                        <p className="text-sm text-[#7b7f85]">
                            Expected launch: Q1 2025
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}