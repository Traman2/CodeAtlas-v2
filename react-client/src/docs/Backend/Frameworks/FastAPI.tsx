import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-fastapi", title: "What is FastAPI?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "routing", title: "Routing & Endpoints" },
    { id: "request-validation", title: "Request Validation" },
    { id: "async-support", title: "Async Support" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'backend-fastapi',
    title: 'FastAPI - Modern Python Web Framework',
    category: 'BACKEND',
    path: '/alldocs/backend/fastapi',
    keywords: ['fastapi', 'python', 'api', 'rest', 'async', 'pydantic', 'openapi', 'swagger'],
    description: 'Complete guide to FastAPI for building high-performance APIs with Python, including async support and automatic API documentation.',
    searchableContent: `
        FastAPI Python web framework
        High performance API async
        Automatic API documentation
    `.trim()
};

const fastapiSetup = `
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows
venv\\Scripts\\activate
# macOS/Linux
source venv/bin/activate

# Install FastAPI and Uvicorn
pip install fastapi uvicorn[standard]
`;

const basicExample = `
# main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello, FastAPI!"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

# Run with: uvicorn main:app --reload
`;

const pydanticExample = `
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# Define data models
class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

class User(BaseModel):
    username: str
    email: str
    full_name: Optional[str] = None

# POST endpoint with request body
@app.post("/items/")
async def create_item(item: Item):
    return item

@app.post("/users/")
async def create_user(user: User):
    return {"message": "User created", "user": user}
`;

const validationExample = `
from fastapi import FastAPI, Path, Query
from pydantic import BaseModel, EmailStr, Field

app = FastAPI()

class Item(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    price: float = Field(..., gt=0, description="Price must be greater than 0")
    description: Optional[str] = Field(None, max_length=500)

@app.post("/items/")
async def create_item(item: Item):
    return item

@app.get("/items/{item_id}")
async def get_item(
    item_id: int = Path(..., gt=0, description="Item ID must be positive"),
    q: str = Query(None, min_length=3, max_length=50)
):
    return {"item_id": item_id, "q": q}
`;

const asyncExample = `
from fastapi import FastAPI
import httpx
import asyncio

app = FastAPI()

# Async endpoint
@app.get("/async-endpoint")
async def async_operation():
    async with httpx.AsyncClient() as client:
        response = await client.get("https://api.example.com/data")
        return response.json()

# Multiple async operations
@app.get("/multiple-requests")
async def multiple_requests():
    async with httpx.AsyncClient() as client:
        # Run multiple requests concurrently
        results = await asyncio.gather(
            client.get("https://api1.example.com"),
            client.get("https://api2.example.com"),
            client.get("https://api3.example.com")
        )
        return [r.json() for r in results]
`;

const dependencyExample = `
from fastapi import FastAPI, Depends, Header, HTTPException
from typing import Optional

app = FastAPI()

# Dependency function
def get_token(authorization: Optional[str] = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization header missing")
    token = authorization.replace("Bearer ", "")
    return token

# Use dependency
@app.get("/protected")
async def protected_route(token: str = Depends(get_token)):
    return {"message": "Access granted", "token": token}
`;

export default function FastAPIDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">BACKEND FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                FastAPI - Modern Python Web Framework
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                High-performance web framework for building APIs with Python, featuring automatic API documentation and type validation
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:language-python" className="w-70 h-70 text-[#3776AB]"/>
            </div>

            <h2 id="what-is-fastapi" className="text-2xl font-semibold mt-12 mb-4">
                What is FastAPI?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on 
                standard Python type hints. It was created by Sebastián Ramírez and has quickly become one of the most 
                popular Python frameworks.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                FastAPI is built on top of Starlette for the web parts and Pydantic for the data parts. It provides 
                automatic interactive API documentation (Swagger UI and ReDoc), data validation, and excellent performance.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use FastAPI?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>High Performance:</strong> One of the fastest Python frameworks, comparable to Node.js and Go</li>
                            <li>• <strong>Automatic Documentation:</strong> Interactive API docs generated automatically</li>
                            <li>• <strong>Type Validation:</strong> Based on Python type hints with Pydantic</li>
                            <li>• <strong>Async Support:</strong> Native support for async/await</li>
                            <li>• <strong>Easy to Use:</strong> Simple and intuitive API</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Set up a new FastAPI project:
            </p>

            <div className="mb-6">
                <CodeBlock code={fastapiSetup} language="bash" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Create your first FastAPI application:
            </p>

            <div className="mb-6">
                <CodeBlock code={basicExample} language="python" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Run the server with <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">uvicorn main:app --reload</code>. 
                Visit <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">http://localhost:8000/docs</code> for 
                interactive API documentation!
            </p>

            <h2 id="routing" className="text-2xl font-semibold mt-12 mb-4">
                Routing & Endpoints
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                FastAPI uses Python type hints to automatically validate request data. Define your data models with Pydantic:
            </p>

            <div className="mb-6">
                <CodeBlock code={pydanticExample} language="python" />
            </div>

            <h2 id="request-validation" className="text-2xl font-semibold mt-12 mb-4">
                Request Validation
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                FastAPI automatically validates request data based on type hints and Pydantic models. Add additional 
                validation with Field:
            </p>

            <div className="mb-6">
                <CodeBlock code={validationExample} language="python" />
            </div>

            <h2 id="async-support" className="text-2xl font-semibold mt-12 mb-4">
                Async Support
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                FastAPI has native support for async/await, making it perfect for I/O-bound operations:
            </p>

            <div className="mb-6">
                <CodeBlock code={asyncExample} language="python" />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Dependencies</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Use dependency injection for shared logic like authentication:
            </p>

            <div className="mb-6">
                <CodeBlock code={dependencyExample} language="python" />
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
                        <h3 className="font-semibold text-lg mb-2">Use Type Hints</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Always use type hints for function parameters and return types. This enables automatic validation 
                            and better IDE support.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Pydantic Models</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Define request and response models with Pydantic. This provides validation, serialization, 
                            and automatic documentation.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Async for I/O Operations</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use async/await for database queries, HTTP requests, and other I/O operations to improve 
                            performance and handle more concurrent requests.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Organize with Routers</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use APIRouter to organize endpoints into separate modules. This keeps your code organized 
                            and maintainable.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        5
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Deploy to Cloud</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Deploy FastAPI applications to cloud platforms. See our <button onClick={() => navigate("/alldocs/deployment/overview")} className="text-[#554DE2] hover:underline">Deployment guide</button> and 
                            <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS</button>, 
                            <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure</button>, or 
                            <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP</button> guides.
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
                            <li>• <button onClick={() => navigate("/alldocs/backend/comparison")} className="text-[#554DE2] hover:underline">Compare Backend Frameworks</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/deployment/overview")} className="text-[#554DE2] hover:underline">Deploy FastAPI Applications</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">Deploy to AWS</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/backend/express")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/backend/django")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:django" width="40" height="40" className="text-[#092E20]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - Django</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

