import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-data-analytics", title: "What is Data Analytics?" },
    { id: "data-libraries", title: "Data Science Libraries" },
    { id: "machine-learning", title: "Machine Learning" },
    { id: "getting-started", title: "Getting Started" }
]

export const metadata: GuideMetadata = {
    id: 'dataanalytics-overview',
    title: 'Data Analytics Overview',
    category: 'DATAANALYTICS',
    path: '/alldocs/dataanalytics/overview',
    keywords: ['data analytics', 'data science', 'machine learning', 'pytorch', 'scikit-learn', 'pandas', 'numpy', 'matplotlib'],
    description: 'Introduction to data analytics, machine learning, and data science libraries including PyTorch, SciKit-learn, Pandas, NumPy, and Matplotlib.',
    searchableContent: `
        Data Analytics Overview
        Machine learning data science
        PyTorch SciKit-learn Pandas NumPy
    `.trim()
};

export default function DataAnalyticsOverview() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Data Analytics Overview
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Your comprehensive guide to data analytics, machine learning, and data science with Python
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:chart-line" className="w-70 h-70 text-[#1d1884]"/>
            </div>

            <h2 id="what-is-data-analytics" className="text-2xl font-semibold mt-12 mb-4">
                What is Data Analytics?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Data analytics is the process of examining, cleaning, transforming, and modeling data to discover useful 
                information, draw conclusions, and support decision-making. It involves using statistical methods, machine 
                learning algorithms, and visualization techniques to extract insights from data.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Python has become the dominant language for data analytics and machine learning, with a rich ecosystem of 
                libraries for data manipulation, analysis, visualization, and machine learning.
            </p>

            <h2 id="data-libraries" className="text-2xl font-semibold mt-12 mb-4">
                Data Science Libraries
            </h2>

            <div className="grid grid-cols-1 gap-4 mb-8">
                <button 
                    onClick={() => navigate("/alldocs/dataanalytics/pytorch")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:brain" width="40" height="40" className="text-[#EE4C2C] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">PyTorch</h3>
                        <p className="text-[#7b7f85] text-left">
                            Deep learning framework for building neural networks. Includes pre-trained models like ResNet, 
                            and is widely used in research and production. Perfect for computer vision and NLP tasks.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/dataanalytics/scikit-learn")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:chart-scatter-plot" width="40" height="40" className="text-[#F7931E] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">SciKit-learn</h3>
                        <p className="text-[#7b7f85] text-left">
                            Machine learning library with tools for classification, regression, clustering, and more. 
                            Includes linear regression, decision trees, and many other algorithms. Great for traditional ML.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/dataanalytics/pandas")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:database" width="40" height="40" className="text-[#150458] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Pandas</h3>
                        <p className="text-[#7b7f85] text-left">
                            Data manipulation and analysis library. Provides data structures like DataFrames for working 
                            with structured data. Essential for data cleaning and preprocessing.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/dataanalytics/numpy")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:calculator" width="40" height="40" className="text-[#4DABCF] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">NumPy</h3>
                        <p className="text-[#7b7f85] text-left">
                            Fundamental library for numerical computing. Provides arrays and mathematical functions. 
                            Foundation for many other data science libraries.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/dataanalytics/matplotlib")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:chart-bar" width="40" height="40" className="text-[#11557C] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Matplotlib</h3>
                        <p className="text-[#7b7f85] text-left">
                            Visualization library for creating charts, graphs, and plots. Create line plots, bar charts, 
                            histograms, scatter plots, and more. Essential for data visualization.
                        </p>
                    </div>
                </button>
            </div>

            <h2 id="machine-learning" className="text-2xl font-semibold mt-12 mb-4">
                Machine Learning
            </h2>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Deep Learning</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use PyTorch for deep learning tasks. Build neural networks, use pre-trained models like ResNet 
                            for image classification, and train custom models. See our <button onClick={() => navigate("/alldocs/dataanalytics/pytorch")} className="text-[#554DE2] hover:underline">PyTorch guide</button> for more.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Traditional Machine Learning</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use SciKit-learn for traditional ML algorithms. Implement linear regression, classification, 
                            clustering, and more. See our <button onClick={() => navigate("/alldocs/dataanalytics/scikit-learn")} className="text-[#554DE2] hover:underline">SciKit-learn guide</button> for examples.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Data Processing</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use Pandas and NumPy for data manipulation, cleaning, and preprocessing. Essential steps before 
                            applying machine learning algorithms.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Visualization</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use Matplotlib to visualize data and model results. Create charts to understand data patterns 
                            and communicate insights effectively.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Ready to dive into data analytics? Here's a recommended learning path:
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-6">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Recommended Learning Path</h3>
                        <ol className="space-y-2 text-[#4B5563]">
                            <li className="leading-relaxed">
                                <strong>1. Learn NumPy:</strong> Start with NumPy for numerical computing. It's the foundation 
                                for many other libraries.
                            </li>
                            <li className="leading-relaxed">
                                <strong>2. Master Pandas:</strong> Learn Pandas for data manipulation. Essential for working 
                                with structured data.
                            </li>
                            <li className="leading-relaxed">
                                <strong>3. Visualize with Matplotlib:</strong> Use Matplotlib to create charts and understand 
                                your data visually.
                            </li>
                            <li className="leading-relaxed">
                                <strong>4. Start with SciKit-learn:</strong> Learn traditional machine learning with SciKit-learn. 
                                Start with linear regression and classification.
                            </li>
                            <li className="leading-relaxed">
                                <strong>5. Explore Deep Learning:</strong> Move to PyTorch for deep learning. Use pre-trained 
                                models like ResNet and build custom neural networks.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/dataanalytics/pytorch")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:brain" width="32" height="32" className="text-[#EE4C2C]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Start with PyTorch</h3>
                            <p className="text-[#6b7280] text-sm text-left">Deep learning and neural networks</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={() => navigate("/alldocs/dataanalytics/scikit-learn")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:chart-scatter-plot" width="32" height="32" className="text-[#F7931E]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Learn SciKit-learn</h3>
                            <p className="text-[#6b7280] text-sm text-left">Traditional machine learning</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <p className="mt-8 mb-8 leading-relaxed text-[#6b7280]">
                Data analytics and machine learning are powerful tools for extracting insights from data. Start with the 
                fundamentals, practice with real datasets, and gradually move to more advanced techniques. Happy analyzing! 📊
            </p>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/dataanalytics/pytorch")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:brain" width="40" height="40" className="text-[#EE4C2C]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - PyTorch</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

