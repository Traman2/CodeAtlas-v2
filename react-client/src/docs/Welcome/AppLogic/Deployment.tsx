import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "deployment-platforms", title: "Deployment Platforms" },
    { id: "devops-practices", title: "DevOps Practices" }
]

export const metadata: GuideMetadata = {
    id: 'deployment',
    title: 'Deployment & DevOps',
    category: 'WELCOME',
    path: '/alldocs/welcome/deployment',
    keywords: ['deployment', 'ci/cd', 'docker', 'kubernetes', 'devops', 'production', 'vercel', 'netlify', 'github actions'],
    description: 'Learn deployment strategies, CI/CD pipelines, and DevOps best practices. Automate your deployment workflow and ensure reliable releases.',
    searchableContent: `
        APP LOGIC
        Deployment & DevOps
        Learn deployment strategies, CI/CD pipelines, and DevOps best practices. Automate your deployment workflow and ensure reliable releases.
        Deployment Platforms
        Vercel & Netlify
        Modern platforms for frontend deployments. Deploy static sites and serverless functions with automatic HTTPS and global CDN.
        Docker & Kubernetes
        Containerization and orchestration tools. Package applications in containers and manage them at scale with Kubernetes.
        GitHub Actions & GitLab CI
        CI/CD platforms integrated with version control. Automate testing, building, and deployment workflows.
        DevOps Practices
        Continuous Integration and Continuous Deployment
        Infrastructure monitoring and alerting
        Blue-green and canary deployments
        Configuration management with Ansible
        Load balancing and auto-scaling
    `.trim()
};

export default function DeploymentDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">APP LOGIC</p>
            <h1 className="text-3xl font-semibold mt-2">Deployment & DevOps</h1>
            <p className="mt-2">
                Learn deployment strategies, CI/CD pipelines, and DevOps best practices.
                Automate your deployment workflow and ensure reliable releases.
            </p>

            <h2 id="deployment-platforms" className="text-2xl font-semibold mt-8 mb-4">Deployment Platforms</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Vercel & Netlify</h3>
                    <p className="mt-2 text-gray-700">
                        Modern platforms for frontend deployments. Deploy static sites and
                        serverless functions with automatic HTTPS and global CDN.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Docker & Kubernetes</h3>
                    <p className="mt-2 text-gray-700">
                        Containerization and orchestration tools. Package applications in
                        containers and manage them at scale with Kubernetes.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">GitHub Actions & GitLab CI</h3>
                    <p className="mt-2 text-gray-700">
                        CI/CD platforms integrated with version control. Automate testing,
                        building, and deployment workflows.
                    </p>
                </div>
            </div>

            <h2 id="devops-practices" className="text-2xl font-semibold mt-8 mb-4">DevOps Practices</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>Continuous Integration and Continuous Deployment</li>
                <li>Infrastructure monitoring and alerting</li>
                <li>Blue-green and canary deployments</li>
                <li>Configuration management with Ansible</li>
                <li>Load balancing and auto-scaling</li>
            </ul>
        </>
    )
}
