
export default function SiteXmlDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">ADDITIONAL RESOURCES</p>
            <h1 className="text-3xl font-semibold mt-2">Site XML File</h1>
            <p className="mt-2">
                Understanding and utilizing XML sitemaps for your web applications. Learn
                how to generate, optimize, and submit sitemaps to improve your site's
                search engine visibility and crawlability.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What is a Sitemap?</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Implementation Guide</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>Creating XML sitemaps for static and dynamic sites</li>
                <li>Submitting sitemaps to Google Search Console</li>
                <li>Handling large sitemaps with sitemap indexes</li>
                <li>Image and video sitemaps for rich content</li>
                <li>Monitoring sitemap errors and coverage</li>
            </ul>
        </>
    )
}
