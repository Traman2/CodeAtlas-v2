export const sections = [
    { id: "analytics-platforms", title: "Analytics Platforms" },
    { id: "data-technologies", title: "Data Technologies" }
]

export default function DataAnalyticsDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">APP LOGIC</p>
            <h1 className="text-3xl font-semibold mt-2">Data Analytics</h1>
            <p className="mt-2">
                Explore data processing, analysis, and visualization tools. Learn how to
                extract insights from data using modern analytics platforms and libraries.
            </p>

            <h2 id="analytics-platforms" className="text-2xl font-semibold mt-8 mb-4">Analytics Platforms</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Python Data Stack</h3>
                    <p className="mt-2 text-gray-700">
                        Powerful libraries for data analysis. Work with Pandas for data manipulation,
                        NumPy for numerical computing, and Matplotlib/Seaborn for visualization.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Apache Spark</h3>
                    <p className="mt-2 text-gray-700">
                        Unified analytics engine for large-scale data processing. Handle big
                        data workloads with distributed computing capabilities.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Tableau & Power BI</h3>
                    <p className="mt-2 text-gray-700">
                        Business intelligence and visualization tools. Create interactive
                        dashboards and reports for data-driven decision making.
                    </p>
                </div>
            </div>

            <h2 id="data-technologies" className="text-2xl font-semibold mt-8 mb-4">Data Technologies</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>SQL and database querying techniques</li>
                <li>Data warehousing with Snowflake and Redshift</li>
                <li>Real-time analytics with streaming platforms</li>
                <li>Machine learning integration</li>
                <li>ETL pipelines and data orchestration</li>
            </ul>
        </>
    )
}
