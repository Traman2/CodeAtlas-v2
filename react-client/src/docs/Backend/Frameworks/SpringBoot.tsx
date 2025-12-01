import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-springboot", title: "What is Spring Boot?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "rest-controllers", title: "REST Controllers" },
    { id: "data-jpa", title: "Data JPA" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'backend-springboot',
    title: 'Spring Boot - Enterprise Java Framework',
    category: 'BACKEND',
    path: '/alldocs/backend/springboot',
    keywords: ['spring boot', 'java', 'enterprise', 'framework', 'jpa', 'maven', 'gradle'],
    description: 'Complete guide to Spring Boot for building enterprise Java applications with production-ready features.',
    searchableContent: `
        Spring Boot Java framework
        Enterprise application development
        JPA REST controllers
    `.trim()
};

const springBootSetup = `
# Using Spring Initializr (https://start.spring.io/)
# Or use Maven/Gradle

# Maven project structure
# pom.xml
# src/main/java/com/example/demo/DemoApplication.java
# src/main/resources/application.properties

# Run application
mvn spring-boot:run
# or
./mvnw spring-boot:run
`;

const controllerExample = `
// UserController.java
package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        // Return all users
        return ResponseEntity.ok(users);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        // Return user by ID
        return ResponseEntity.ok(user);
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        // Create new user
        return ResponseEntity.status(201).body(createdUser);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        // Update user
        return ResponseEntity.ok(updatedUser);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        // Delete user
        return ResponseEntity.noContent().build();
    }
}
`;

const jpaExample = `
// User.java (Entity)
package com.example.demo.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    private LocalDateTime createdAt;
    
    // Getters and setters
}

// UserRepository.java
package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    List<User> findByNameContaining(String name);
}

// UserService.java
package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repository.UserRepository;
import com.example.demo.entity.User;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
`;

export default function SpringBootDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">BACKEND FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Spring Boot - Enterprise Java Framework
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Production-ready Java framework for building enterprise applications with convention over configuration
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:language-java" className="w-70 h-70 text-[#ED8B00]"/>
            </div>

            <h2 id="what-is-springboot" className="text-2xl font-semibold mt-12 mb-4">
                What is Spring Boot?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Spring Boot is an open-source Java-based framework used to create microservices and enterprise applications. 
                It's built on top of the Spring Framework and provides production-ready features with minimal configuration.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Spring Boot follows the "convention over configuration" principle, providing sensible defaults and 
                auto-configuration. This allows developers to focus on business logic rather than configuration.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use Spring Boot?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Production Ready:</strong> Built-in features for monitoring, security, and more</li>
                            <li>• <strong>Auto-Configuration:</strong> Minimal configuration required</li>
                            <li>• <strong>Enterprise Features:</strong> Security, transactions, caching built-in</li>
                            <li>• <strong>Large Ecosystem:</strong> Extensive Spring ecosystem</li>
                            <li>• <strong>Microservices:</strong> Excellent for building microservices architecture</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Create a new Spring Boot project using Spring Initializr:
            </p>

            <div className="mb-6">
                <CodeBlock code={springBootSetup} language="bash" />
            </div>

            <h2 id="rest-controllers" className="text-2xl font-semibold mt-12 mb-4">
                REST Controllers
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Create REST controllers to handle HTTP requests:
            </p>

            <div className="mb-6">
                <CodeBlock code={controllerExample} language="java" />
            </div>

            <h2 id="data-jpa" className="text-2xl font-semibold mt-12 mb-4">
                Data JPA
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Use Spring Data JPA for database operations:
            </p>

            <div className="mb-6">
                <CodeBlock code={jpaExample} language="java" />
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
                        <h3 className="font-semibold text-lg mb-2">Use Spring Profiles</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use profiles (dev, staging, prod) to manage different configurations for different environments.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Layered Architecture</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Organize code into layers: Controllers, Services, Repositories. This improves maintainability 
                            and testability.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Deploy to Cloud</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Deploy Spring Boot applications to cloud platforms. See our <button onClick={() => navigate("/alldocs/deployment/overview")} className="text-[#554DE2] hover:underline">Deployment guide</button> and 
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
                            <li>• <button onClick={() => navigate("/alldocs/deployment/overview")} className="text-[#554DE2] hover:underline">Deploy Spring Boot Applications</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/backend/flask")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

