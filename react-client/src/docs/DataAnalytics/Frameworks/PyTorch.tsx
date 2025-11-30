import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-pytorch", title: "What is PyTorch?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "resnet", title: "ResNet - Pre-trained Models" },
    { id: "custom-networks", title: "Custom Neural Networks" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'dataanalytics-pytorch',
    title: 'PyTorch - Deep Learning Framework',
    category: 'DATAANALYTICS',
    path: '/alldocs/dataanalytics/pytorch',
    keywords: ['pytorch', 'deep learning', 'neural networks', 'resnet', 'machine learning', 'ai', 'computer vision'],
    description: 'Complete guide to PyTorch for deep learning including ResNet pre-trained models, custom neural networks, and computer vision.',
    searchableContent: `
        PyTorch deep learning
        ResNet neural networks
        Computer vision AI
    `.trim()
};

const pytorchSetup = `
# Install PyTorch
# CPU version
pip install torch torchvision torchaudio

# GPU version (CUDA)
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# Verify installation
python -c "import torch; print(torch.__version__)"
`;

const resnetExample = `
import torch
import torchvision.models as models
from torchvision import transforms
from PIL import Image

# Load pre-trained ResNet model
resnet = models.resnet50(pretrained=True)
resnet.eval()  # Set to evaluation mode

# Image preprocessing
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                        std=[0.229, 0.224, 0.225])
])

# Load and preprocess image
image = Image.open('image.jpg')
image_tensor = transform(image).unsqueeze(0)

# Make prediction
with torch.no_grad():
    outputs = resnet(image_tensor)
    probabilities = torch.nn.functional.softmax(outputs[0], dim=0)
    
# Get top 5 predictions
top5_prob, top5_idx = torch.topk(probabilities, 5)
print(f"Top 5 predictions: {top5_prob}")
`;

const customNetwork = `
import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple neural network
class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(784, 128)  # Input layer
        self.fc2 = nn.Linear(128, 64)   # Hidden layer
        self.fc3 = nn.Linear(64, 10)     # Output layer
        self.relu = nn.ReLU()
    
    def forward(self, x):
        x = x.view(-1, 784)  # Flatten input
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.fc3(x)
        return x

# Create model instance
model = SimpleNet()

# Define loss function and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(10):
    model.train()
    for batch_idx, (data, target) in enumerate(train_loader):
        optimizer.zero_grad()
        output = model(data)
        loss = criterion(output, target)
        loss.backward()
        optimizer.step()
    
    print(f'Epoch {epoch}, Loss: {loss.item()}')
`;

const resnetVariants = `
# Different ResNet architectures
import torchvision.models as models

# ResNet-18 (smaller, faster)
resnet18 = models.resnet18(pretrained=True)

# ResNet-34
resnet34 = models.resnet34(pretrained=True)

# ResNet-50 (balanced)
resnet50 = models.resnet50(pretrained=True)

# ResNet-101 (deeper)
resnet101 = models.resnet101(pretrained=True)

# ResNet-152 (deepest)
resnet152 = models.resnet152(pretrained=True)

# Transfer learning: Fine-tune for your task
resnet = models.resnet50(pretrained=True)
# Replace the final layer for your number of classes
resnet.fc = nn.Linear(resnet.fc.in_features, num_classes)

# Freeze early layers, train only final layers
for param in list(resnet.parameters())[:-2]:
    param.requires_grad = False
`;

export default function PyTorchDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">DATA ANALYTICS FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                PyTorch - Deep Learning Framework
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Build and train neural networks with PyTorch. Use pre-trained models like ResNet for computer vision tasks
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:brain" className="w-70 h-70 text-[#EE4C2C]"/>
            </div>

            <h2 id="what-is-pytorch" className="text-2xl font-semibold mt-12 mb-4">
                What is PyTorch?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                PyTorch is an open-source machine learning framework developed by Facebook's AI Research lab. It's widely 
                used for deep learning, computer vision, natural language processing, and other AI applications.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                PyTorch provides a dynamic computational graph, making it intuitive and flexible for research and development. 
                It includes pre-trained models like ResNet for image classification and is the framework of choice for many 
                researchers and practitioners.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use PyTorch?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Dynamic Graphs:</strong> More flexible than static graph frameworks</li>
                            <li>• <strong>Pythonic:</strong> Feels natural to Python developers</li>
                            <li>• <strong>Pre-trained Models:</strong> Access to ResNet, BERT, and many other models</li>
                            <li>• <strong>Research Friendly:</strong> Widely used in academic research</li>
                            <li>• <strong>Production Ready:</strong> TorchScript for deployment</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Install PyTorch:
            </p>

            <div className="mb-6">
                <CodeBlock code={pytorchSetup} language="bash" />
            </div>

            <h2 id="resnet" className="text-2xl font-semibold mt-12 mb-4">
                ResNet - Pre-trained Models
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                ResNet (Residual Network) is a deep neural network architecture that won the ImageNet competition in 2015. 
                PyTorch provides pre-trained ResNet models that you can use for image classification:
            </p>

            <div className="mb-6">
                <CodeBlock code={resnetExample} language="python" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                PyTorch provides several ResNet variants:
            </p>

            <div className="mb-6">
                <CodeBlock code={resnetVariants} language="python" />
            </div>

            <h2 id="custom-networks" className="text-2xl font-semibold mt-12 mb-4">
                Custom Neural Networks
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Build your own neural networks by extending <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">nn.Module</code>:
            </p>

            <div className="mb-6">
                <CodeBlock code={customNetwork} language="python" />
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
                        <h3 className="font-semibold text-lg mb-2">Use Pre-trained Models</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Start with pre-trained models like ResNet for transfer learning. Fine-tune them for your specific 
                            task rather than training from scratch.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use GPU When Available</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Move tensors and models to GPU for faster training: <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">model.cuda()</code> 
                            or <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">model.to('cuda')</code>
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use DataLoaders</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">DataLoader</code> for 
                            efficient data loading and batching. This enables parallel data loading and proper shuffling.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Visualize Training</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use tools like TensorBoard or <button onClick={() => navigate("/alldocs/dataanalytics/matplotlib")} className="text-[#554DE2] hover:underline">Matplotlib</button> to visualize 
                            training loss and metrics. This helps debug and optimize your models.
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
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/scikit-learn")} className="text-[#554DE2] hover:underline">SciKit-learn for Traditional ML</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/matplotlib")} className="text-[#554DE2] hover:underline">Visualize Results with Matplotlib</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/pandas")} className="text-[#554DE2] hover:underline">Data Processing with Pandas</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

