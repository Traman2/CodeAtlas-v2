import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-django", title: "What is Django?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "models-orm", title: "Models & ORM" },
    { id: "views-templates", title: "Views & Templates" },
    { id: "admin-panel", title: "Admin Panel" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'backend-django',
    title: 'Django - Full-Stack Python Framework',
    category: 'BACKEND',
    path: '/alldocs/backend/django',
    keywords: ['django', 'python', 'web framework', 'orm', 'admin panel', 'full stack', 'mvc'],
    description: 'Complete guide to Django for building full-stack web applications with Python, including ORM, admin panel, and templates.',
    searchableContent: `
        Django Python web framework
        ORM admin panel full stack
        Models views templates
    `.trim()
};

const djangoSetup = `
# Create virtual environment
python -m venv venv
source venv/bin/activate  # or venv\\Scripts\\activate on Windows

# Install Django
pip install django

# Create new project
django-admin startproject myproject
cd myproject

# Create new app
python manage.py startapp myapp

# Run development server
python manage.py runserver
`;

const modelsExample = `
# myapp/models.py
from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    published_date = models.DateField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.title

# Create and apply migrations
# python manage.py makemigrations
# python manage.py migrate
`;

const viewsExample = `
# myapp/views.py
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Book, Author

# Function-based view
def book_list(request):
    books = Book.objects.all()
    return render(request, 'books/list.html', {'books': books})

# Class-based view
from django.views.generic import ListView, DetailView

class BookListView(ListView):
    model = Book
    template_name = 'books/list.html'
    context_object_name = 'books'

class BookDetailView(DetailView):
    model = Book
    template_name = 'books/detail.html'

# API view (using Django REST Framework)
from rest_framework import viewsets
from .serializers import BookSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
`;

const urlsExample = `
# myapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.book_list, name='book_list'),
    path('<int:pk>/', views.BookDetailView.as_view(), name='book_detail'),
]

# myproject/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('books/', include('myapp.urls')),
]
`;

export default function DjangoDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">BACKEND FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Django - Full-Stack Python Framework
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                High-level Python web framework that encourages rapid development and clean, pragmatic design
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:language-python" className="w-70 h-70 text-[#3776AB]"/>
            </div>

            <h2 id="what-is-django" className="text-2xl font-semibold mt-12 mb-4">
                What is Django?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. 
                Built by experienced developers, it takes care of much of the hassle of web development, so you can focus 
                on writing your app without needing to reinvent the wheel.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Django follows the "batteries-included" philosophy, providing an ORM, admin panel, authentication, and 
                many other features out of the box. It's used by companies like Instagram, Spotify, and NASA.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use Django?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Batteries Included:</strong> ORM, admin panel, authentication, and more built-in</li>
                            <li>• <strong>Rapid Development:</strong> Build applications quickly with less code</li>
                            <li>• <strong>Security:</strong> Built-in protection against common vulnerabilities</li>
                            <li>• <strong>Scalable:</strong> Used by high-traffic sites like Instagram</li>
                            <li>• <strong>Mature Ecosystem:</strong> Large community and extensive documentation</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Set up a new Django project:
            </p>

            <div className="mb-6">
                <CodeBlock code={djangoSetup} language="bash" />
            </div>

            <h2 id="models-orm" className="text-2xl font-semibold mt-12 mb-4">
                Models & ORM
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Django's ORM (Object-Relational Mapping) allows you to define database models as Python classes:
            </p>

            <div className="mb-6">
                <CodeBlock code={modelsExample} language="python" />
            </div>

            <h2 id="views-templates" className="text-2xl font-semibold mt-12 mb-4">
                Views & Templates
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Django supports both function-based and class-based views. Define URL patterns to route requests:
            </p>

            <div className="mb-6">
                <CodeBlock code={viewsExample} language="python" />
            </div>

            <div className="mb-6">
                <CodeBlock code={urlsExample} language="python" />
            </div>

            <h2 id="admin-panel" className="text-2xl font-semibold mt-12 mb-4">
                Admin Panel
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Django includes a powerful admin interface that's automatically generated from your models. Register 
                your models to access them in the admin:
            </p>

            <div className="mb-6">
                <CodeBlock code={`# myapp/admin.py
from django.contrib import admin
from .models import Book, Author

admin.site.register(Author)
admin.site.register(Book)

# Create superuser: python manage.py createsuperuser
# Access admin at: http://localhost:8000/admin`} language="python" />
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
                        <h3 className="font-semibold text-lg mb-2">Use Apps for Organization</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Organize your project into Django apps. Each app should have a single, well-defined purpose.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Django REST Framework for APIs</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            For building REST APIs, use Django REST Framework (DRF) which provides serializers, viewsets, 
                            and authentication.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Environment Variables</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">python-decouple</code> 
                            or <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">django-environ</code> 
                            for managing settings and secrets.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Deploy to Cloud</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Deploy Django applications to cloud platforms. See our <button onClick={() => navigate("/alldocs/deployment/overview")} className="text-[#554DE2] hover:underline">Deployment guide</button> and 
                            cloud provider guides for <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS</button>, 
                            <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure</button>, or 
                            <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP</button>.
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
                            <li>• <button onClick={() => navigate("/alldocs/deployment/overview")} className="text-[#554DE2] hover:underline">Deploy Django Applications</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/backend/fastapi")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/backend/flask")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:flask" width="40" height="40" className="text-[#000000]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - Flask</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

