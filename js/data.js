/**
 * Portfolio data — Adisharlapalli Sohan Prasad
 */

const PORTFOLIO = {
  roles: ["Java Backend Developer", "Software Engineer", "Backend Developer"],

  skills: [
    {
      title: "Languages",
      items: ["Java", "SQL", "JavaScript"],
    },
    {
      title: "Backend",
      items: [
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      title: "Messaging & Reliability",
      items: ["Apache Kafka", "Resilience4j"],
    },
    {
      title: "Databases",
      items: ["MySQL"],
    },
    {
      title: "Web",
      items: ["HTML5", "CSS3"],
    },
    {
      title: "Version Control & DevOps",
      items: ["Git", "GitHub", "Maven", "Docker", "Kubernetes (Basics)"],
    },
    {
      title: "Tools",
      items: ["IntelliJ IDEA", "VS Code", "Eclipse", "Postman"],
    },
    {
      title: "Core CS",
      items: ["Data Structures & Algorithms", "OOP", "Design Patterns"],
    },
  ],

  experience: [
    {
      title: "Institute Management System",
      company: "VS IT Solutions",
      role: "Java Full Stack",
      period: "6 Months | May 2026 – October 2026",
      bullets: [
        "Developed an institute management system to track student attendance, fee payments, weekly mock interviews, exams, and batch-wise academic activities.",
        "Implemented batch-specific tracking to monitor student progress and maintain organised academic records across multiple batches.",
        "Developed assignment management functionality for batch coordinators to streamline task allocation and monitor completion.",
        "Implemented secure authentication and role-based authorisation to restrict access to student records and administrative features based on user roles.",
        "Integrated backend APIs with responsive frontend components to enable efficient data management and seamless interaction across the application.",
      ],
    },
  ],

  projects: [
    {
      title: "Kaatha – Grocery Credit & Billing Platform",
      description:
        "Microservices-based grocery credit platform that enables shopkeepers to manage customer purchases, outstanding balances, and payment records digitally.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Java",
        "Spring Boot",
        "Microservices",
        "Docker",
        "Kafka",
        "MySQL",
        "Spring Cloud Gateway",
        "Eureka",
        "OpenFeign",
      ],
      features: [
        "Shopkeeper-initiated customer registration and OTP-based authentication with separate customer ledgers per shop.",
        "REST APIs with Spring Cloud Gateway, Eureka Service Discovery, and OpenFeign for inter-service communication.",
        "Payment workflows and automated SMS notifications for outstanding dues, purchase history, and secure settlements.",
        "Digital tracking of customer purchases, outstanding balances, and payment records.",
      ],
      github: "https://github.com/sohan91/Kaatha-App",
      demo: "#",
    },
    {
      title: "Hostel Connect – Resident Services & Support",
      description:
        "Microservice-based hostel platform for registration, room allocation, fee calculation, and complaint handling for Hosteler and Hostel Owner roles.",
      tech: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      features: [
        "Registration, room allocation, fee calculation, and complaint handling for two user roles.",
        "Protected 15+ endpoints with tiered permission login and role-based access to student and administration records.",
        "Blood donor matching and complaints management with real-time status tracking.",
        "20+ Postman test cases before deployment, with Git/GitHub and a layered architecture.",
      ],
      github: "https://github.com/sohan91/Hostel-Management-System",
      demo: "#",
    },
    {
      title: "Employee Management System",
      description:
        "Console-based application for HR personnel to create, modify, delete, search, and retrieve employee data using Java and MySQL.",
      tech: ["Java", "Spring MVC", "MySQL"],
      features: [
        "Create, modify, delete, search, and retrieve employee records.",
        "Three-tier architecture (Controller, Service, DAO) for modularity and separation of concerns.",
        "MySQL-backed persistence for employee data.",
        "Designed for easy future enhancement.",
      ],
      github: "https://github.com/sohan91/Employee-Management-System",
      demo: "#",
    },
  ],

  education: [
    {
      degree: "B.Tech – Computer Science & Engineering (AI & Data Science)",
      school: "Vidya Jyothi Institute of Technology, Hyderabad",
      cgpa: "8.33",
      period: "2023 – 2026",
    },
    {
      degree: "Diploma – Computer Science Engineering",
      school: "St. Mary's Engineering College, Hyderabad",
      cgpa: "8.39",
      period: "2020 – 2023",
    },
  ],

  certifications: [
    {
      title: "DSA in Java",
      issuer: "Scalar",
    },
    {
      title: "SQL and Relational Databases",
      issuer: "Scalar",
    },
  ],

  achievements: [
    "Led a team for the college major project, coordinating task allocation, implementation, and project delivery.",
    "Solved 200+ problems on LeetCode consistently, strengthening data structures, algorithms, and problem-solving skills.",
    "Gained hands-on development experience by building real-world applications using Java, Spring Boot, REST APIs, and microservices.",
  ],
};
