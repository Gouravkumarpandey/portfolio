const INFO = {
  main: {
    title: "Portfolio by Gourav Kumar Pandey",
    name: "Gourav Kumar Pandey",
    email: "kumarpandeygourav@gmail.com",
    logo: "../logo.png",
  },

  socials: {
    twitter: "https://x.com/Gouravkrpandey8",
    github: "https://github.com/Gouravkumarpandey",
    linkedin: "https://www.linkedin.com/in/gouravkumarpandey/",
    stackoverflow: "https://stackoverflow.com/users/22639465/gourav-kumar-pandey",
    instagram: "",
    facebook: "",
  },

  homepage: {
    title: "Software Engineer passionate about full-stack development.",
    description:
      "I am a Computer Science student pursuing my B.Tech degree from Arka Jain University, currently in my 7th semester, batch 2022–2026, with expertise in full-stack development. I have experience building scalable web applications using React, Node.js, and modern frameworks. My skills include JavaScript, Java, C++, React, Node.js, Spring Boot, MongoDB, and MySQL. I am passionate about creating secure, innovative solutions and continuously learning emerging technologies to solve complex problems.",
  },

  about: {
    title: "I'm Gourav Kumar Pandey. I live in India, where I build the future with code.",
    description:
      "I'm a passionate Computer Science student at Arka Jain University with a strong foundation in full-stack development and blockchain technology. With experience as a Blockchain Intern at NIT Jamshedpur and Spring Boot Backend Intern at Techmantra Global, I've worked on cutting-edge projects including healthcare management systems and real-time applications. I'm a hackathon winner (IBM National Hackathon) and technical leader who enjoys mentoring peers and building developer communities. My projects are open-source and I welcome collaboration and feedback from fellow developers.",
  },

  articles: {
    title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
    description:
      "Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
  },

  experience: [
    {
      title: "Blockchain Intern",
      company: "NIT Jamshedpur",
      location: "On-Site",
      duration: "May – Aug 2025",
      description: [
        "Developed a blockchain-powered healthcare system for secure patient record management.",
        "Added 5 new modules to enhance real-world usability.",
        "Implemented smart contracts for tamper-proof transactions.",
        "Refined system architecture for scalability, security, and compliance.",
      ],
    },
    {
      title: "Spring Boot Backend Intern",
      company: "Techmantra Global",
      location: "Remote",
      duration: "May – July 2024",
      description: [
        "Built RESTful APIs and implemented business logic in Spring Boot.",
        "Integrated with MySQL for schema design and data flow management.",
        "Added authentication, authorization, and security features.",
        "Improved stability with error handling, validation, and optimization.",
      ],
    },
    {
      title: "Full-Stack Development Intern",
      company: "Tech Innovators Inc.",
      location: "Remote",
      duration: "Jan – Apr 2024",
      description: [
        "Developed responsive web applications using React.js and Node.js.",
        "Implemented real-time features using WebSocket and Socket.io.",
        "Collaborated with cross-functional teams in Agile environment.",
        "Optimized application performance, reducing load time by 40%.",
      ],
    },
  ],

  projects: [
    {
      title: "PrepMate AI Interviewer",
      description:
        "An AI-powered interview preparation platform that helps candidates practice technical interviews. Features intelligent question generation, real-time feedback, and comprehensive performance analytics to improve interview skills.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      logo: "🤖",
      technologies: ["React", "Node.js", "OpenAI", "MongoDB"],
      linkText: "View Project",
      link: "https://github.com/Gouravkumarpandey/PrepMate-AI-interviewer",
      liveLink: "https://prepmate-ai.vercel.app",
    },
    {
      title: "QuickFix",
      description:
        "A streamlined solution for quick problem resolution and bug fixes. Built with modern web technologies to provide efficient debugging tools and automated fix suggestions for common development issues.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      logo: "🔧",
      technologies: ["JavaScript", "Express", "React", "PostgreSQL"],
      linkText: "View Project",
      link: "https://github.com/Gouravkumarpandey/QuickFix",
      liveLink: "https://quickfix-demo.netlify.app",
    },
    {
      title: "Video Chat App",
      description:
        "Built a real-time video chat application with peer-to-peer WebRTC streaming. Features scalable backend with Node.js & Express for room creation & signaling, user authentication, and room-based routing for smooth video calls.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
      logo: "📹",
      technologies: ["WebRTC", "Socket.io", "Node.js", "React"],
      linkText: "View Project",
      link: "https://github.com/GouravKumarPandey",
      liveLink: "https://videochat-app-demo.vercel.app",
    },
    {
      title: "DigiArogya",
      description:
        "Blockchain-based healthcare management platform built with React and Solidity. Integrated Ethereum smart contracts with Ether.js & MetaMask, used IPFS for decentralized medical record storage, and implemented local blockchain simulation with Ganache & Truffle.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      logo: "🏥",
      technologies: ["Blockchain", "Solidity", "React", "IPFS", "Ethereum"],
      linkText: "View Project",
      link: "https://github.com/GouravKumarPandey",
      liveLink: "https://digiarogya.netlify.app",
    },
  ],

  certificates: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "December 2024",
      credentialId: "AWS-CSA-2024-12345",
      description: "Demonstrated expertise in designing distributed systems on AWS platform.",
      link: "https://aws.amazon.com/certification/",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Coursera - Meta",
      date: "October 2024",
      credentialId: "META-FSWD-2024-67890",
      description: "Completed comprehensive full-stack development course covering React, Node.js, and databases.",
      link: "https://www.coursera.org/",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
    },
    {
      title: "Blockchain Fundamentals",
      issuer: "IBM",
      date: "August 2024",
      credentialId: "IBM-BCF-2024-11223",
      description: "Mastered blockchain technology, smart contracts, and decentralized applications.",
      link: "https://www.ibm.com/training/",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "June 2024",
      credentialId: "FCC-JSADS-2024-44556",
      description: "Completed 300+ hours of coursework on algorithms, data structures, and problem-solving.",
      link: "https://www.freecodecamp.org/",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
    },
  ],

  hackathons: [
    {
      title: "IBM National Hackathon 2024",
      position: "Winner 🏆",
      date: "November 2024",
      location: "Bangalore, India",
      project: "AI-Powered Healthcare Assistant",
      description: [
        "Built an AI chatbot for preliminary medical diagnosis using IBM Watson.",
        "Implemented natural language processing for symptom analysis.",
        "Integrated with healthcare databases for accurate recommendations.",
        "Won first prize among 500+ participating teams nationwide.",
      ],
      technologies: ["IBM Watson", "Python", "React", "Node.js"],
      achievement: "First Prize - ₹1,00,000",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    },
    {
      title: "Smart India Hackathon 2024",
      position: "Finalist",
      date: "August 2024",
      location: "New Delhi, India",
      project: "Smart City Traffic Management",
      description: [
        "Developed IoT-based traffic monitoring and optimization system.",
        "Used machine learning for traffic pattern prediction.",
        "Created real-time dashboard for traffic control centers.",
        "Reached national finals, top 50 teams out of 10,000+ participants.",
      ],
      technologies: ["IoT", "TensorFlow", "React", "MongoDB"],
      achievement: "National Finalist",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    },
    {
      title: "HackTheChain 2024",
      position: "2nd Runner Up 🥉",
      date: "June 2024",
      location: "Mumbai, India",
      project: "Decentralized Supply Chain",
      description: [
        "Built blockchain-based supply chain tracking system.",
        "Implemented smart contracts for automated verification.",
        "Created transparent product journey visualization.",
        "Secured 3rd position among 200+ teams.",
      ],
      technologies: ["Ethereum", "Solidity", "Web3.js", "React"],
      achievement: "3rd Prize - ₹25,000",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80",
    },
    {
      title: "CodeFest University Hackathon",
      position: "Winner 🏆",
      date: "March 2024",
      location: "Arka Jain University",
      project: "Student Collaboration Platform",
      description: [
        "Developed platform for students to collaborate on projects.",
        "Implemented real-time code sharing and video conferencing.",
        "Built project management and task tracking features.",
        "Won university-level hackathon with 100+ participants.",
      ],
      technologies: ["React", "Socket.io", "WebRTC", "Express"],
      achievement: "First Prize - ₹15,000",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    },
  ],
};

export default INFO;

