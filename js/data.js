/**
 * Portfolio data — Adisharlapalli Sohan Prasad
 */

const PORTFOLIO = {
  roles: [
    "Java Backend Developer",
    "Software Engineer",
  "Backend Developer"  ],

  skills: [
    {
      title: "Java Backend",
      icon: "⚙️",
      items: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "REST APIs",
        "Microservices",
        "Spring Cloud",
        "Hibernate",
        "JDBC",
      ],
    },
    
    {
      title: "Messaging & Observability",
      icon: "📡",
      items: [
        "Apache Kafka",
        "RabbitMQ",
        "Grafana",
        "Loki",
        "Tempo",
        "Prometheus",
        "OpenTelemetry",
      ],
    },
    {
      title: "Databases",
      icon: "🗄️",
      items: ["MySQL"],
    },
    {
      title: "Tools",
      icon: "🛠️",
      items: ["Git", "GitHub", "Maven", "IntelliJ IDEA","Postman"],
    },
    {
      title: "Core Concepts",
      icon: "📚",
      items: [
        "OOP",
        "Data Structures",
        "Operating Systems",
        "Cloud-Native Applications",
      ],
    },
    {
      title: "Frontend",
      icon: "🎨",
      items: ["HTML", "CSS", "JavaScript"],
    },
  ],

  projects: [
        {
          title: "Kaatha – Smart Grocery Credit & Billing Management Platform",
          icon: "🛒",
          description:
            "Comprehensive grocery credit management platform designed for shopkeepers to manage customer borrowings, billing records, transaction history, and outstanding balances with secure and centralized operations.",
       tech: ["HTML • CSS • JavaScript • Java • Spring Boot • Microservices • Spring Cloud • Docker • MySQL"],
          features: [
            "Customer-wise grocery credit and borrowing management",
            "Real-time transaction history and billing records",
            "Automatic outstanding balance calculations",
            "Secure authentication and role-based access control",
            "Modular microservices-based backend architecture",
            "Centralized customer and payment tracking dashboard",
            "Optimized database operations for faster data retrieval",
            "Scalable backend services with Spring Cloud integration"
          ],
          github: "https://github.com/sohan91/Grocery-Management-System",
          demo: "#",
        },
{
  title: "Hostel Management System",
  icon: "🏠",
  description:
    "Comprehensive hostel management platform enabling room allocation, payment tracking, complaint management, emergency blood donor assistance, and real-time hosteler engagement.",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "Spring Boot",
    "MySQL"
  ],
  features: [
    "Room allocation and availability management with floor-wise tracking",
    "Hosteler registration and profile management with blood group details",
    "Emergency blood donor assistance module for quick hosteler contact",
    "Room-wise and floor-wise payment status monitoring",
    "Online hostel fee payment integration for hostelers",
    "Daily menu management with hosteler feedback and responses",
    "Complaint registration and tracking system",
    "Real-time notifications and email alerts for payments and complaints",
    "Hostel dashboard analytics for occupancy and operational monitoring",
    "Live chat and communication system between hostel owner and hostelers"
  ],
  github: "https://github.com/sohan91/Hostel-Management-System",
  demo: "#",
},
    {
      title: "Employee Management System",
      icon: "👥",
      description:
        "Enterprise employee CRUD application with Spring MVC and secure authentication.",
      tech: ["Java", "Spring MVC", "MySQL"],
      features: [
        "CRUD operations",
        "Login and registration",
        "Spring MVC architecture",
        "Secure authentication",
      ],
      github: "https://github.com/sohan91/Spring-Boot-Practice/tree/master/06-Spring-Boot-Spring-MVC/Employee-Management-System",
      demo: "#",
    },
    {
      title: "Java Server–Client Communication System",
      icon: "🔌",
      description:
        "Socket-based real-time communication between server and multiple clients.",
      tech: ["Java", "Socket Programming"],
      features: [
        "Socket programming",
        "Optimized I/O communication",
        "Real-time client-server interaction",
      ],
      github: "https://github.com/sohan91/Java-Programs/tree/master/Networking/ServerProject_GroupChat",
      demo: "#",
    },
    {
      title: "Java JDBC Application",
      icon: "💾",
      description:
        "Database-driven application demonstrating JDBC CRUD and dynamic data handling.",
      tech: ["Java", "JDBC", "MySQL"],
      features: [
        "JDBC CRUD operations",
        "Database optimization",
        "Dynamic data handling",
      ],
      github: "https://github.com/sohan91/Java-Programs/tree/master/JDBC/JDBC_Poject/untitled",
      demo: "#",
    },
  ],

learningJourney: [
  {
    title: "Java Backend Development",
    description:
      "Built strong foundations in Core Java, OOP concepts, SQL, and problem-solving techniques.",
  },
  {
    title: "Spring Boot Development",
    description:
      "Worked on REST APIs, Spring Boot architecture, authentication, and database-driven backend systems.",
  },
  {
    title: "Full Stack Project Development",
    description:
      "Developed scalable applications including Hostel Management and transaction management systems using HTML,CSS,JS,Java,Spring Boot and MySQL.",
  },
  {
    title: "Microservices Architecture",
    description:
      "Designed distributed backend services with API communication, modular architecture, and service separation.",
  },
  {
    title: "Docker & Kubernetes",
    description:
      "Containerized Spring Boot applications and managed deployments using Kubernetes orchestration workflows.",
  },
  {
    title: "DevOps & Cloud-Native Practices",
    description:
      "Learning  Helm Charts, observability tools, messaging systems, and scalable cloud-native deployments.",
  },
],

  education: [
    {
      degree: "B.Tech – Computer Science & Engineering (AI & Data Science)",
      school: "Vidya Jyothi Institute of Technology",
      cgpa: "8.11",
      period: "2023 – 2026",
    },
    {
      degree: "Diploma – Computer Science Engineering",
      school: "St. Mary's Engineering College",
      cgpa: "8.39",
      period: "2020 – 2023",
    },
  ],

};
