import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-pandas", title: "What is Pandas?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "dataframes", title: "DataFrames" },
    { id: "data-operations", title: "Data Operations" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'dataanalytics-pandas',
    title: 'Pandas - Data Manipulation',
    category: 'DATAANALYTICS',
    path: '/alldocs/dataanalytics/pandas',
    keywords: ['pandas', 'data manipulation', 'dataframes', 'data analysis', 'csv', 'excel'],
    description: 'Complete guide to Pandas for data manipulation, cleaning, and analysis with DataFrames.',
    searchableContent: `
        Pandas data manipulation
        DataFrames data analysis
        CSV Excel data processing
    `.trim()
};

const pandasSetup = `
# Install Pandas
pip install pandas

# Import Pandas
import pandas as pd
import numpy as np
`;

const dataframeExample = `
import pandas as pd

# Create DataFrame from dictionary
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'David'],
    'age': [25, 30, 35, 40],
    'city': ['New York', 'London', 'Tokyo', 'Paris']
}
df = pd.DataFrame(data)

# Create DataFrame from CSV
df = pd.read_csv('data.csv')

# Create DataFrame from Excel
df = pd.read_excel('data.xlsx')

# Basic operations
print(df.head())        # First 5 rows
print(df.info())        # Data types and info
print(df.describe())    # Statistical summary
print(df.shape)         # (rows, columns)
`;

const dataOperations = `
import pandas as pd

# Read data
df = pd.read_csv('data.csv')

# Filtering
young_people = df[df['age'] < 30]
high_income = df[df['income'] > 50000]

# Grouping
grouped = df.groupby('city')['age'].mean()
grouped = df.groupby(['city', 'gender']).agg({
    'age': 'mean',
    'income': 'sum'
})

# Sorting
df_sorted = df.sort_values('age', ascending=False)

# Adding columns
df['age_group'] = pd.cut(df['age'], bins=[0, 30, 50, 100], labels=['Young', 'Middle', 'Old'])

# Handling missing values
df.dropna()              # Remove rows with missing values
df.fillna(0)             # Fill missing values with 0
df.fillna(df.mean())     # Fill with mean

# Merging DataFrames
df1 = pd.DataFrame({'key': ['A', 'B', 'C'], 'value1': [1, 2, 3]})
df2 = pd.DataFrame({'key': ['A', 'B', 'D'], 'value2': [4, 5, 6]})
merged = pd.merge(df1, df2, on='key', how='inner')
`;

export default function PandasDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">DATA ANALYTICS LIBRARIES</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Pandas - Data Manipulation
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Powerful library for data manipulation and analysis with DataFrames
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:database" className="w-70 h-70 text-[#150458]"/>
            </div>

            <h2 id="what-is-pandas" className="text-2xl font-semibold mt-12 mb-4">
                What is Pandas?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Pandas is a fast, powerful, flexible, and easy-to-use open-source data analysis and manipulation library 
                built on top of Python. It provides data structures and operations for manipulating numerical tables and 
                time series.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                The main data structure in Pandas is the DataFrame, which is a two-dimensional labeled data structure 
                with columns of potentially different types. It's similar to a spreadsheet or SQL table.
            </p>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <div className="mb-6">
                <CodeBlock code={pandasSetup} language="bash" />
            </div>

            <h2 id="dataframes" className="text-2xl font-semibold mt-12 mb-4">
                DataFrames
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Create and work with DataFrames:
            </p>

            <div className="mb-6">
                <CodeBlock code={dataframeExample} language="python" />
            </div>

            <h2 id="data-operations" className="text-2xl font-semibold mt-12 mb-4">
                Data Operations
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Common data operations with Pandas:
            </p>

            <div className="mb-6">
                <CodeBlock code={dataOperations} language="python" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Vectorized Operations</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Avoid loops when possible. Use Pandas' vectorized operations which are much faster. Use 
                            <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">.apply()</code> only when necessary.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Handle Missing Data Early</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Check for missing values with <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">df.isnull().sum()</code> 
                            and handle them appropriately before analysis.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Appropriate Data Types</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Convert columns to appropriate data types (e.g., <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">category</code> 
                            for categorical data) to save memory and improve performance.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:link" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Related Resources</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/numpy")} className="text-[#554DE2] hover:underline">NumPy for Numerical Computing</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/matplotlib")} className="text-[#554DE2] hover:underline">Visualize Data with Matplotlib</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/scikit-learn")} className="text-[#554DE2] hover:underline">Machine Learning with SciKit-learn</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/dataanalytics/scikit-learn")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/dataanalytics/numpy")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:function" width="40" height="40" className="text-[#4DABCF]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Libraries - NumPy</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

