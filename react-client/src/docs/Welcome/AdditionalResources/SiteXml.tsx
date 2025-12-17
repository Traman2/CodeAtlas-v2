import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';
import ArticleFeedback from "@/components/ArticleFeedback";

export const sections = [
    { id: "what-is-a-sitemap", title: "What is a Sitemap?" },
    { id: "implementation-guide", title: "Implementation Guide" }
]

export const metadata: GuideMetadata = {
    id: 'sitexml',
    title: 'Site XML & Sitemaps',
    category: 'WELCOME',
    path: '/alldocs/welcome/sitexml',
    keywords: ['xml', 'sitemap', 'seo', 'metadata', 'google search console', 'crawlability', 'indexing'],
    description: 'Understanding and utilizing XML sitemaps for your web applications. Learn how to generate, optimize, and submit sitemaps to improve SEO.',
    searchableContent: `
        Site XML File
        Understanding and utilizing XML sitemaps for your web applications. Learn how to generate, optimize, and submit sitemaps to improve your site's search engine visibility and crawlability.
        What is a Sitemap?
        Purpose and Benefits
        XML sitemaps help search engines discover and index your website's pages. They provide metadata about each URL including last modification date, update frequency, and priority.
        Sitemap Structure
        Learn the XML structure of sitemaps including URL entries, namespaces, and optional tags. Understand best practices for organizing large sitemaps.
        Generation Tools
        Discover tools and libraries for automatically generating sitemaps in various frameworks like Next.js, Django, and WordPress.
        Implementation Guide
        Creating XML sitemaps for static and dynamic sites
        Submitting sitemaps to Google Search Console
        Handling large sitemaps with sitemap indexes
        Image and video sitemaps for rich content
        Monitoring sitemap errors and coverage
    `.trim()
};

export default function SiteXmlDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">ADDITIONAL RESOURCES</p>
            <h1 className="text-3xl font-semibold mt-2">Site XML File</h1>
            <p className="mt-2">
                Understanding and utilizing XML sitemaps for your web applications. Learn
                how to generate, optimize, and submit sitemaps to improve your site's
                search engine visibility and crawlability.
            </p>

            <h2 id="what-is-a-sitemap" className="text-2xl font-semibold mt-8 mb-4">What is a Sitemap?</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Purpose and Benefits</h3>
                    <p className="mt-2 text-gray-700">
                        XML sitemaps help search engines discover and index your website's pages.
                        They provide metadata about each URL including last modification date,
                        update frequency, and priority.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Sitemap Structure</h3>
                    <p className="mt-2 text-gray-700">
                        Learn the XML structure of sitemaps including URL entries, namespaces,
                        and optional tags. Understand best practices for organizing large sitemaps.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Generation Tools</h3>
                    <p className="mt-2 text-gray-700">
                        Discover tools and libraries for automatically generating sitemaps in
                        various frameworks like Next.js, Django, and WordPress.
                    </p>
                </div>
            </div>

            <h2 id="implementation-guide" className="text-2xl font-semibold mt-8 mb-4">Implementation Guide</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>Creating XML sitemaps for static and dynamic sites</li>
                <li>Submitting sitemaps to Google Search Console</li>
                <li>Handling large sitemaps with sitemap indexes</li>
                <li>Image and video sitemaps for rich content</li>
                <li>Monitoring sitemap errors and coverage</li>
            </ul>

            <ArticleFeedback articleId="/alldocs/welcome/sitexml"/>

            <div className="gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/welcome/commontemplates")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}
