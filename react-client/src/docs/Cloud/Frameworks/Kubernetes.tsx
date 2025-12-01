import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-kubernetes", title: "What is Kubernetes?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "core-concepts", title: "Core Concepts" },
    { id: "deployment-example", title: "Deployment Example" },
    { id: "cloud-providers", title: "Kubernetes on Cloud Providers" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'cloud-kubernetes',
    title: 'Kubernetes - Container Orchestration',
    category: 'CLOUD',
    path: '/alldocs/cloud/kubernetes',
    keywords: ['kubernetes', 'k8s', 'container orchestration', 'docker', 'eks', 'aks', 'gke', 'containers'],
    description: 'Complete guide to Kubernetes for container orchestration including deployment, scaling, and management on AWS, Azure, and GCP.',
    searchableContent: `
        Kubernetes container orchestration
        EKS AKS GKE managed kubernetes
        Docker containers deployment
    `.trim()
};

const k8sInstall = `
# Install kubectl (Kubernetes CLI)
# macOS
brew install kubectl

# Linux
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/

# Verify installation
kubectl version --client
`;

const deploymentYaml = `
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: nginx:latest
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: LoadBalancer
`;

const k8sCommands = `
# Apply a configuration
kubectl apply -f deployment.yaml

# Get deployments
kubectl get deployments

# Get pods
kubectl get pods

# Get services
kubectl get services

# Describe a pod
kubectl describe pod <pod-name>

# View logs
kubectl logs <pod-name>

# Scale deployment
kubectl scale deployment my-app --replicas=5

# Delete deployment
kubectl delete deployment my-app
`;

const eksExample = `
# Create EKS cluster using AWS CLI
aws eks create-cluster \\
    --name my-cluster \\
    --role-arn arn:aws:iam::123456789012:role/EKSClusterRole \\
    --resources-vpc-config subnetIds=subnet-12345,subnet-67890

# Get cluster credentials
aws eks update-kubeconfig --name my-cluster

# Verify connection
kubectl get nodes
`;

const gkeExample = `
# Create GKE cluster
gcloud container clusters create my-cluster \\
    --num-nodes=3 \\
    --zone=us-central1-a \\
    --machine-type=e2-medium

# Get cluster credentials
gcloud container clusters get-credentials my-cluster \\
    --zone=us-central1-a

# Verify connection
kubectl get nodes
`;

export default function KubernetesDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">CLOUD FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Kubernetes - Container Orchestration
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Orchestrate and manage containerized applications at scale with Kubernetes
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:kubernetes" className="w-70 h-70 text-[#326CE5]"/>
            </div>

            <h2 id="what-is-kubernetes" className="text-2xl font-semibold mt-12 mb-4">
                What is Kubernetes?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Kubernetes (often abbreviated as K8s) is an open-source container orchestration platform originally 
                developed by Google. It automates the deployment, scaling, and management of containerized applications.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Kubernetes groups containers into logical units called "pods" and manages them across a cluster of 
                machines. It handles scheduling, load balancing, self-healing, and secret management, making it easier 
                to run applications in production.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use Kubernetes?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Automatic Scaling:</strong> Scale applications up or down based on demand</li>
                            <li>• <strong>Self-Healing:</strong> Automatically restart failed containers and replace unhealthy pods</li>
                            <li>• <strong>Service Discovery:</strong> Automatically discover and load balance services</li>
                            <li>• <strong>Rolling Updates:</strong> Update applications with zero downtime</li>
                            <li>• <strong>Portability:</strong> Run the same application on any cloud provider or on-premises</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Install kubectl, the Kubernetes command-line tool:
            </p>

            <div className="mb-6">
                <CodeBlock code={k8sInstall} language="bash" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                For local development, you can use minikube or kind to run Kubernetes locally. For production, use managed 
                Kubernetes services from cloud providers. See our <button onClick={() => navigate("/alldocs/deployment/docker")} className="text-[#554DE2] hover:underline">Docker guide</button> to learn about containers first.
            </p>

            <h2 id="core-concepts" className="text-2xl font-semibold mt-12 mb-4">
                Core Concepts
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Pods</h3>
                    <p className="text-[#4B5563]">
                        The smallest deployable unit in Kubernetes. A pod contains one or more containers that share 
                        storage and network resources.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Deployments</h3>
                    <p className="text-[#4B5563]">
                        Manage the desired state of your application. Deployments handle creating and updating pods, 
                        rolling updates, and rollbacks.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Services</h3>
                    <p className="text-[#4B5563]">
                        Expose pods to the network. Services provide stable IP addresses and DNS names, and can load 
                        balance traffic across multiple pods.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Namespaces</h3>
                    <p className="text-[#4B5563]">
                        Organize resources within a cluster. Useful for separating environments (dev, staging, prod) 
                        or teams.
                    </p>
                </div>
            </div>

            <h2 id="deployment-example" className="text-2xl font-semibold mt-12 mb-4">
                Deployment Example
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Here's a complete example of deploying an application with a Deployment and Service:
            </p>

            <div className="mb-6">
                <CodeBlock code={deploymentYaml} language="yaml" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Apply and manage the deployment:
            </p>

            <div className="mb-6">
                <CodeBlock code={k8sCommands} language="bash" />
            </div>

            <h2 id="cloud-providers" className="text-2xl font-semibold mt-12 mb-4">
                Kubernetes on Cloud Providers
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                All major cloud providers offer managed Kubernetes services. Here's how to get started with each:
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Amazon EKS (Elastic Kubernetes Service)</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                AWS's managed Kubernetes service. See our <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS guide</button> for more details.
            </p>

            <div className="mb-6">
                <CodeBlock code={eksExample} language="bash" />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Google Kubernetes Engine (GKE)</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                GCP's managed Kubernetes service. GKE is considered one of the best managed Kubernetes offerings. 
                See our <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP guide</button> for more.
            </p>

            <div className="mb-6">
                <CodeBlock code={gkeExample} language="bash" />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Azure Kubernetes Service (AKS)</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Azure's managed Kubernetes service. Integrates well with Azure services. See our <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure guide</button> for more.
            </p>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Set Resource Limits</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Always specify resource requests and limits for containers. This helps Kubernetes schedule 
                            pods efficiently and prevents resource starvation.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Health Checks</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Configure liveness and readiness probes so Kubernetes can detect and handle unhealthy containers.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Namespaces</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Organize resources using namespaces. Separate environments (dev, staging, prod) and teams 
                            for better organization and access control.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Implement Rolling Updates</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use Deployments for rolling updates. This allows zero-downtime deployments and easy rollbacks 
                            if something goes wrong.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        5
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Secrets for Sensitive Data</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Store sensitive information like passwords and API keys in Kubernetes Secrets, not in 
                            configuration files or container images.
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
                            <li>• <button onClick={() => navigate("/alldocs/deployment/docker")} className="text-[#554DE2] hover:underline">Docker and Containers</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">Kubernetes on AWS (EKS)</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">Kubernetes on GCP (GKE)</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Kubernetes on Azure (AKS)</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/cloud/terraform")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

