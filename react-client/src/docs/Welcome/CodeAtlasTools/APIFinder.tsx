import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';
import ArticleFeedback from "@/components/ArticleFeedback";

export const sections = [
    { id: "how-to-use-api-finder", title: "How to Use API Finder" },
    { id: "popular-api-categories", title: "Popular API Categories" }
]

export const metadata: GuideMetadata = {
    id: 'apifinder',
    title: 'API Finder',
    category: 'WELCOME',
    path: '/alldocs/welcome/apifinder',
    keywords: ['api', 'finder', 'tool', 'search', 'discover', 'payment', 'maps', 'weather', 'stripe', 'paypal'],
    description: 'Discover and explore APIs for your projects. The API Finder helps you search through thousands of public APIs across various categories.',
    searchableContent: `
        API Finder
        Discover and explore APIs for your projects. The API Finder helps you search through thousands of public APIs across various categories to integrate third-party services into your applications.
        How to Use API Finder
        Search by Category
        Browse APIs organized by category such as Weather, Finance, Social Media, Maps, Authentication, and more. Filter results to find exactly what you need.
        API Documentation
        View detailed documentation for each API including endpoints, authentication methods, rate limits, and example requests/responses.
        Integration Examples
        Get started quickly with code examples in multiple programming languages. See how to authenticate and make your first API call.
        Popular API Categories
        Payment Processing (Stripe, PayPal, Square)
        Maps & Geolocation (Google Maps, Mapbox)
        Weather & Climate Data
        Social Media Integration
        Email & SMS Services
        Authentication & Authorization
    `.trim()
};

export default function APIFinderDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">CODE ATLAS TOOLS</p>
            <h1 className="text-3xl font-semibold mt-2">API Finder</h1>
            <p className="mt-2">
                Discover and explore APIs for your projects. The API Finder helps you search
                through thousands of public APIs across various categories to integrate
                third-party services into your applications.
            </p>

            <h2 id="how-to-use-api-finder" className="text-2xl font-semibold mt-8 mb-4">How to Use API Finder</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Search by Category</h3>
                    <p className="mt-2 text-gray-700">
                        Browse APIs organized by category such as Weather, Finance, Social Media,
                        Maps, Authentication, and more. Filter results to find exactly what you need.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">API Documentation</h3>
                    <p className="mt-2 text-gray-700">
                        View detailed documentation for each API including endpoints, authentication
                        methods, rate limits, and example requests/responses.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Integration Examples</h3>
                    <p className="mt-2 text-gray-700">
                        Get started quickly with code examples in multiple programming languages.
                        See how to authenticate and make your first API call.
                    </p>
                </div>
            </div>

            <h2 id="popular-api-categories" className="text-2xl font-semibold mt-8 mb-4">Popular API Categories</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>Payment Processing (Stripe, PayPal, Square)</li>
                <li>Maps & Geolocation (Google Maps, Mapbox)</li>
                <li>Weather & Climate Data</li>
                <li>Social Media Integration</li>
                <li>Email & SMS Services</li>
                <li>Authentication & Authorization</li>
            </ul>

            <ArticleFeedback articleId="/alldocs/welcome/apifinder"/>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/welcome/dataanalytics")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/welcome/planningagent")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:robot" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Code Atlas Tools - Planning Agent</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}
