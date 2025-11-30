import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-numpy", title: "What is NumPy?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "arrays", title: "Arrays" },
    { id: "operations", title: "Operations" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'dataanalytics-numpy',
    title: 'NumPy - Numerical Computing',
    category: 'DATAANALYTICS',
    path: '/alldocs/dataanalytics/numpy',
    keywords: ['numpy', 'numerical computing', 'arrays', 'mathematics', 'linear algebra'],
    description: 'Complete guide to NumPy for numerical computing with arrays and mathematical operations.',
    searchableContent: `
        NumPy numerical computing
        Arrays mathematics linear algebra
        Foundation for data science
    `.trim()
};

const numpySetup = `
# Install NumPy
pip install numpy

# Import NumPy
import numpy as np
`;

const arrayExample = `
import numpy as np

# Create arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

# Array properties
print(arr1.shape)      # (5,)
print(arr2.shape)      # (2, 3)
print(arr1.dtype)      # int64
print(arr2.ndim)       # 2 (dimensions)

# Create arrays with specific values
zeros = np.zeros((3, 4))        # Array of zeros
ones = np.ones((2, 3))          # Array of ones
full = np.full((2, 2), 7)       # Array filled with 7
range_arr = np.arange(0, 10, 2) # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5) # [0, 0.25, 0.5, 0.75, 1]
random = np.random.rand(3, 3)    # Random values
`;

const operationsExample = `
import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# Mathematical operations
print(arr + 10)        # [11, 12, 13, 14, 15]
print(arr * 2)         # [2, 4, 6, 8, 10]
print(arr ** 2)        # [1, 4, 9, 16, 25]

# Array operations
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
print(arr1 + arr2)     # [5, 7, 9]
print(arr1 * arr2)     # [4, 10, 18]
print(np.dot(arr1, arr2))  # 32 (dot product)

# Statistical operations
print(np.mean(arr))    # 3.0
print(np.std(arr))     # Standard deviation
print(np.max(arr))     # 5
print(np.min(arr))     # 1
print(np.sum(arr))     # 15

# Linear algebra
matrix = np.array([[1, 2], [3, 4]])
print(np.linalg.inv(matrix))  # Inverse matrix
print(np.linalg.det(matrix))  # Determinant
`;

export default function NumPyDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">DATA ANALYTICS LIBRARIES</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                NumPy - Numerical Computing
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Fundamental library for numerical computing with Python. Foundation for many data science libraries
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:calculator" className="w-70 h-70 text-[#4DABCF]"/>
            </div>

            <h2 id="what-is-numpy" className="text-2xl font-semibold mt-12 mb-4">
                What is NumPy?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                NumPy (Numerical Python) is the fundamental package for scientific computing in Python. It provides a 
                high-performance multidimensional array object and tools for working with these arrays.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                NumPy is the foundation for many other data science libraries including Pandas, SciKit-learn, and Matplotlib. 
                It provides efficient array operations and mathematical functions.
            </p>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <div className="mb-6">
                <CodeBlock code={numpySetup} language="bash" />
            </div>

            <h2 id="arrays" className="text-2xl font-semibold mt-12 mb-4">
                Arrays
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Create and work with NumPy arrays:
            </p>

            <div className="mb-6">
                <CodeBlock code={arrayExample} language="python" />
            </div>

            <h2 id="operations" className="text-2xl font-semibold mt-12 mb-4">
                Operations
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Perform mathematical and statistical operations:
            </p>

            <div className="mb-6">
                <CodeBlock code={operationsExample} language="python" />
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
                            NumPy operations are vectorized and much faster than Python loops. Always prefer NumPy 
                            operations over loops when possible.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Understand Broadcasting</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            NumPy's broadcasting allows operations on arrays of different shapes. Understanding broadcasting 
                            helps write efficient code.
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
                            Choose appropriate data types (e.g., <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">float32</code> 
                            vs <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">float64</code>) to balance 
                            precision and memory usage.
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
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/pandas")} className="text-[#554DE2] hover:underline">Pandas (built on NumPy)</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/matplotlib")} className="text-[#554DE2] hover:underline">Matplotlib for Visualization</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/scikit-learn")} className="text-[#554DE2] hover:underline">SciKit-learn (uses NumPy)</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

