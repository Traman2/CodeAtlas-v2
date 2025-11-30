import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-terraform", title: "What is Terraform?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "terraform-basics", title: "Terraform Basics" },
    { id: "multi-cloud", title: "Multi-Cloud Infrastructure" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'cloud-terraform',
    title: 'Terraform - Infrastructure as Code',
    category: 'CLOUD',
    path: '/alldocs/cloud/terraform',
    keywords: ['terraform', 'infrastructure as code', 'iac', 'aws', 'azure', 'gcp', 'cloud infrastructure'],
    description: 'Complete guide to Terraform for managing cloud infrastructure as code across AWS, Azure, and GCP.',
    searchableContent: `
        Terraform Infrastructure as Code
        AWS Azure GCP multi-cloud
        Infrastructure management
    `.trim()
};

const terraformInstall = `
# Install Terraform
# macOS
brew install terraform

# Linux
wget https://releases.hashicorp.com/terraform/1.6.0/terraform_1.6.0_linux_amd64.zip
unzip terraform_1.6.0_linux_amd64.zip
sudo mv terraform /usr/local/bin/

# Verify installation
terraform version
`;

const terraformBasic = `
# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "WebServer"
  }
}

# Initialize and apply
# terraform init
# terraform plan
# terraform apply
`;

const terraformMultiCloud = `
# AWS Resource
provider "aws" {
  region = "us-east-1"
  alias  = "aws"
}

resource "aws_s3_bucket" "data" {
  provider = aws.aws
  bucket   = "my-data-bucket"
}

# Azure Resource
provider "azurerm" {
  features {}
  alias = "azure"
}

resource "azurerm_resource_group" "main" {
  provider = azurerm.azure
  name     = "my-resource-group"
  location = "East US"
}

# GCP Resource
provider "google" {
  project = "my-project"
  region  = "us-central1"
  alias   = "gcp"
}

resource "google_storage_bucket" "data" {
  provider = google.gcp
  name     = "my-data-bucket"
}
`;

const terraformModules = `
# modules/web-server/main.tf
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI ID"
  type        = string
}

resource "aws_instance" "web" {
  ami           = var.ami_id
  instance_type = var.instance_type

  tags = {
    Name = "WebServer"
  }
}

# root/main.tf
module "web_server" {
  source = "./modules/web-server"

  instance_type = "t2.small"
  ami_id        = "ami-0c55b159cbfafe1f0"
}
`;

const terraformState = `
# Configure remote state (using S3 backend)
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "terraform.tfstate"
    region = "us-east-1"
  }
}

# Or use Terraform Cloud
terraform {
  cloud {
    organization = "my-org"
    workspaces {
      name = "production"
    }
  }
}
`;

export default function TerraformDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">CLOUD FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Terraform - Infrastructure as Code
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Write, plan, and create infrastructure as code across AWS, Azure, GCP, and more
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:terraform" className="w-70 h-70 text-[#7B42BC]"/>
            </div>

            <h2 id="what-is-terraform" className="text-2xl font-semibold mt-12 mb-4">
                What is Terraform?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Terraform is an open-source infrastructure as code (IaC) tool created by HashiCorp. It allows you to 
                define and provision infrastructure using a declarative configuration language called HCL (HashiCorp 
                Configuration Language).
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                With Terraform, you can manage infrastructure across multiple cloud providers (AWS, Azure, GCP) and 
                on-premises systems using a single workflow. Terraform tracks your infrastructure in state files and 
                can create, update, and destroy resources based on your configuration.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use Terraform?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Multi-Cloud:</strong> Manage infrastructure across AWS, Azure, GCP, and more</li>
                            <li>• <strong>Version Control:</strong> Track infrastructure changes in Git</li>
                            <li>• <strong>Reproducibility:</strong> Create identical environments consistently</li>
                            <li>• <strong>State Management:</strong> Track infrastructure state and detect drift</li>
                            <li>• <strong>Plan Before Apply:</strong> Preview changes before making them</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Install Terraform and create your first configuration:
            </p>

            <div className="mb-6">
                <CodeBlock code={terraformInstall} language="bash" />
            </div>

            <h2 id="terraform-basics" className="text-2xl font-semibold mt-12 mb-4">
                Terraform Basics
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                A basic Terraform configuration consists of providers, resources, and variables. Here's a simple example 
                for creating an AWS EC2 instance:
            </p>

            <div className="mb-6">
                <CodeBlock code={terraformBasic} language="hcl" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                The workflow is:
            </p>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. terraform init</h3>
                    <p className="text-[#4B5563]">
                        Initializes the working directory, downloads providers, and sets up the backend.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. terraform plan</h3>
                    <p className="text-[#4B5563]">
                        Creates an execution plan showing what Terraform will do. Review changes before applying.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. terraform apply</h3>
                    <p className="text-[#4B5563]">
                        Applies the changes to create, update, or destroy infrastructure.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. terraform destroy</h3>
                    <p className="text-[#4B5563]">
                        Destroys all resources defined in the configuration.
                    </p>
                </div>
            </div>

            <h2 id="multi-cloud" className="text-2xl font-semibold mt-12 mb-4">
                Multi-Cloud Infrastructure
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Terraform excels at managing infrastructure across multiple cloud providers. You can use provider aliases 
                to manage resources in different clouds:
            </p>

            <div className="mb-6">
                <CodeBlock code={terraformMultiCloud} language="hcl" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                This allows you to leverage the strengths of each cloud provider. For example, use AWS for general compute, 
                Azure for Microsoft integration, and GCP for data analytics. See our <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS</button>, <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure</button>, and <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP</button> guides for provider-specific details.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Modules</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Terraform modules allow you to create reusable infrastructure components:
            </p>

            <div className="mb-6">
                <CodeBlock code={terraformModules} language="hcl" />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Remote State</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Store Terraform state remotely for team collaboration and state locking:
            </p>

            <div className="mb-6">
                <CodeBlock code={terraformState} language="hcl" />
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
                        <h3 className="font-semibold text-lg mb-2">Use Remote State</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Store state in a remote backend (S3, Azure Storage, GCS) to enable team collaboration and 
                            state locking to prevent conflicts.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Version Your Configurations</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Store Terraform configurations in version control (Git) to track changes, enable code review, 
                            and maintain history.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Modules</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Create reusable modules for common infrastructure patterns. This reduces duplication and 
                            makes maintenance easier.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Always Run terraform plan</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Always review the plan before applying. This helps catch mistakes and understand what changes 
                            will be made.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        5
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Workspaces</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use Terraform workspaces to manage multiple environments (dev, staging, prod) with the same 
                            configuration.
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
                            <li>• <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS with Terraform</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure with Terraform</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP with Terraform</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/kubernetes")} className="text-[#554DE2] hover:underline">Kubernetes with Terraform</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

