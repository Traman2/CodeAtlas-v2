import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import ArticleFeedback from '../../components/ArticleFeedback';

export const sections = [
    { id: "whats-inside", title: "What's Inside" },
    { id: "integration-guides", title: "Integration Guides" },
    { id: "whats-next", title: "What's Next" },
]

export const metadata = {
    id: 'docs-v1-complete',
    title: 'Documentation Hub v1.0 - Complete!',
    date: 'December 17, 2024',
    path: '/articles/docs-v1-complete',
    description: 'Version 1.0 of the Code Atlas documentation hub is now complete with extensive full-stack development guides.',
};

export default function DocsV1Complete() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">RELEASE NOTE</p>

            <h1 className="text-3xl font-semibold mt-2 mb-2">
                Documentation Hub v1.0 is Complete!
            </h1>

            <p className="text-[#7b7f85] text-sm mb-6">
                {metadata.date}
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="material-symbols:docs" className="w-70 h-70 text-[#1d1884]" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                I'm thrilled to announce that version 1.0 of the Code Atlas documentation hub is officially complete!
                After weeks of writing, refining, and testing, we now have comprehensive guides covering the entire
                full-stack development ecosystem.
            </p>

            <div className="bg-[#eae9ff] border border-[#4f46ff] p-6 my-8">
                <div className="flex gap-3 items-start">
                    <Icon icon="material-symbols:celebration" className="text-[#4f46ff] shrink-0" width="32" height="32" />
                    <div>
                        <p className="font-semibold mb-2 text-lg">A Major Milestone</p>
                        <p className="text-[#1d1884] leading-relaxed">
                            This release includes over 50 comprehensive guides spanning 8 major categories, with a special
                            focus on helping developers understand not just individual technologies, but how to integrate
                            them together into complete applications.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="whats-inside" className="text-2xl font-semibold mt-12 mb-4">
                What's Inside Version 1.0
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Code Atlas v1.0 covers everything you need to build modern full-stack applications, from frontend
                frameworks to cloud deployment. Here's what you'll find:
            </p>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0">
                        <Icon icon="teenyicons:react-outline" className="text-[#4f46ff]" width="32" height="32" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Web Development</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Complete guides for React, Vue, Angular, and Svelte. Learn about modern build tools like Vite,
                            styling with Tailwind CSS, UI components with Shadcn, and data visualization with Recharts.
                            Each guide includes setup instructions, core concepts, and real-world examples.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0">
                        <Icon icon="mdi:cellphone" className="text-[#4f46ff]" width="32" height="32" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Mobile Development</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Comprehensive coverage of React Native, Flutter, and Expo for cross-platform development,
                            plus native development with Swift (iOS) and Kotlin (Android). Learn about mobile-specific
                            patterns, navigation, and deploying to app stores.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0">
                        <Icon icon="akar-icons:node-fill" className="text-[#4f46ff]" width="32" height="32" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Backend Development</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Deep dives into Node.js with Express, Python frameworks (Django, Flask, FastAPI), and Spring Boot
                            for Java. Learn how to build RESTful APIs, handle authentication, work with databases, and structure
                            your backend applications for scalability.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0">
                        <Icon icon="lineicons:aws" className="text-[#4f46ff]" width="32" height="32" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Cloud & Infrastructure</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Detailed guides for AWS, Azure, and Google Cloud Platform. Learn about core services, deployment
                            strategies, Infrastructure as Code with Terraform, and container orchestration with Kubernetes.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0">
                        <Icon icon="mdi:rocket-launch" className="text-[#4f46ff]" width="32" height="32" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Deployment & CI/CD</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            From Docker containerization to automated deployments with GitHub Actions, learn how to ship your
                            applications to production. Includes platform-specific guides for Vercel, Netlify, and more.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0">
                        <Icon icon="mdi:desktop-mac" className="text-[#4f46ff]" width="32" height="32" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Desktop Applications</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Build cross-platform desktop apps with Electron and Tauri, or go native with .NET, ASP.NET, and
                            platform-specific frameworks. Includes tooling guides for Visual Studio and development workflows.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0">
                        <Icon icon="material-symbols:analytics" className="text-[#4f46ff]" width="32" height="32" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Data Analytics & ML</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Get started with data science using Python libraries like NumPy, Pandas, and Matplotlib. Learn
                            machine learning fundamentals with PyTorch and scikit-learn, with practical examples and best practices.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="integration-guides" className="text-2xl font-semibold mt-12 mb-4">
                The Real Game-Changer: Integration Guides
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                What sets Code Atlas apart from other documentation resources is our focus on <strong>integration</strong>.
                It's one thing to know how to build a React app or an Express server in isolation—it's another thing entirely
                to connect them together into a working full-stack application.
            </p>

            <div className="bg-[#f6f6f6] border-l-4 border-[#4f46ff] p-6 my-8">
                <div className="flex gap-3">
                    <Icon icon="material-symbols:link" className="text-[#4f46ff] shrink-0" width="24" height="24" />
                    <div>
                        <p className="font-semibold mb-2">Bridging the Gap</p>
                        <p className="text-[#6b7280] leading-relaxed">
                            Every guide includes sections on how to integrate with other parts of your stack. Learn how to
                            connect your React frontend to Express, handle CORS properly, manage environment variables across
                            services, and deploy everything together. This is the knowledge that usually takes months of
                            trial and error to figure out.
                        </p>
                    </div>
                </div>
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Our guides cover common integration scenarios like:
            </p>

            <ul className="list-disc pl-6 mt-4 mb-6 space-y-2">
                <li className="leading-relaxed">
                    <strong>Frontend ↔ Backend Communication:</strong> Setting up API calls, handling authentication tokens,
                    managing CORS, and dealing with different environments (development vs production)
                </li>
                <li className="leading-relaxed">
                    <strong>Backend ↔ Database:</strong> Connecting to databases, managing migrations, handling connection
                    pooling, and implementing data access patterns
                </li>
                <li className="leading-relaxed">
                    <strong>Application ↔ Cloud:</strong> Deploying full-stack apps to AWS, Azure, or GCP, managing secrets
                    and environment variables, setting up CI/CD pipelines
                </li>
                <li className="leading-relaxed">
                    <strong>Service ↔ Service:</strong> Building microservices that communicate effectively, implementing
                    API gateways, managing service discovery
                </li>
            </ul>

            <p className="mt-4 mb-6 leading-relaxed">
                This integrated approach means you're not just learning technologies—you're learning how to build
                <em> complete applications</em> that actually work in production.
            </p>

            <h2 id="whats-next" className="text-2xl font-semibold mt-12 mb-4">
                What's Coming Next
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                While v1.0 is complete, Code Atlas is far from finished. This is just the foundation. Here's what you
                can expect in future releases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-[#f6f6f6] p-6 border border-[#f0f0f0]">
                    <Icon icon="material-symbols:interactive-space" className="text-[#4f46ff] mb-3" width="32" height="32" />
                    <h3 className="font-semibold text-lg mb-2">Interactive Examples</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                        Code playgrounds where you can experiment with examples directly in your browser without setting
                        up a local environment.
                    </p>
                </div>

                <div className="bg-[#f6f6f6] p-6 border border-[#f0f0f0]">
                    <Icon icon="material-symbols:video-library" className="text-[#4f46ff] mb-3" width="32" height="32" />
                    <h3 className="font-semibold text-lg mb-2">Video Tutorials</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                        Short, focused video walkthroughs for complex topics that are easier to understand visually.
                    </p>
                </div>

                <div className="bg-[#f6f6f6] p-6 border border-[#f0f0f0]">
                    <Icon icon="material-symbols:forum" className="text-[#4f46ff] mb-3" width="32" height="32" />
                    <h3 className="font-semibold text-lg mb-2">Community Contributions</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                        A platform for developers to share their own guides, tips, and real-world experiences with Code Atlas.
                    </p>
                </div>

                <div className="bg-[#f6f6f6] p-6 border border-[#f0f0f0]">
                    <Icon icon="material-symbols:book-2" className="text-[#4f46ff] mb-3" width="32" height="32" />
                    <h3 className="font-semibold text-lg mb-2">More Technologies</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                        Expanding coverage to include databases (PostgreSQL, MongoDB), testing frameworks, GraphQL,
                        WebSockets, and more.
                    </p>
                </div>
            </div>

            <div className="bg-[#eae9ff] border border-[#4f46ff] p-6 my-8">
                <p className="leading-relaxed text-[#1d1884]">
                    <strong>Your feedback matters:</strong> Code Atlas is built for developers, by developers. If there's
                    a topic you'd like to see covered, a guide that could be clearer, or an integration scenario that's
                    not addressed, please let me know. Your input will directly shape the future of this project.
                </p>
            </div>

            <p className="mt-8 mb-6 leading-relaxed">
                Thank you for being part of this journey. Whether you're just getting started with web development or
                you're a seasoned engineer exploring new technologies, I hope Code Atlas helps you build amazing things.
            </p>

            <p className="mt-4 mb-8 leading-relaxed">
                Ready to start learning? Check out the{" "}
                <a onClick={() => navigate("/alldocs/welcome/overview")} className="font-bold text-[#4f46ff] underline hover:decoration-2 cursor-pointer">
                    documentation hub
                </a>
                {" "}and dive into any topic that interests you. Happy coding!
            </p>

            <ArticleFeedback articleId="/articles/docs-v1-complete"/>
        </>
    )
}
