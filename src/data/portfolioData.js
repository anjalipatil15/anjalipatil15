export const portfolioData = {
  personal: {
    name: "Anjali Patil",
    title: "B.Tech Computer Engineering | NMIMS Mumbai",
    roleStatement: "I build practical, well-structured systems with a focus on security, intelligence, and thoughtful engineering.",
    email: "anjali2005.patil@gmail.com",
    phone: "+91 7045343572",
    github: "https://github.com/anjalipatil15",
    linkedin: "https://www.linkedin.com/in/anjalipatil15/",
    medium:"https://medium.com/@anjalipatil.dev"
  },

  Projects: [
    {
  id: 1,
  image: "/images/vuln_scan.png",
  name: "Advanced Web Application Vulnerability Scanner",
  tagline: "Automated web security assessment platform with vulnerability detection and reporting",
  keyFeatures: [
    "Website crawling and asset discovery",
    "Security header and cookie security analysis",
    "Automated XSS and SQL Injection detection",
    "Risk scoring engine with consolidated PDF reporting"
  ],
  technologies: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "SQLite",
    "Jinja2",
  ],
  demonstrates: "Web application security, vulnerability assessment, secure coding practices, backend development, automated security testing",
  github: "https://github.com/anjalipatil15/web-vuln-scanner",
  details: "Developed a modular vulnerability scanner capable of discovering web assets, analyzing security configurations, and identifying common web vulnerabilities including Cross-Site Scripting (XSS) and SQL Injection (SQLi). Implemented automated risk scoring, scan management, and report generation through a FastAPI-based architecture."
},
    {
      id: 2,
      image:"/images/ids.png",
      name: "ML-Based Intrusion Detection System",
      tagline: "Real-time attack detection using dual-stage XGBoost classifier",
      keyFeatures: [
        "Two-stage attack detection and multi-class classification",
        "Threshold-based alerting to reduce false positives",
        "Trained on CICIDS2017 dataset (50K+ attack samples)"
      ],
      technologies: ["Python", "XGBoost", "Scikit-learn", "CICIDS2017", "Pandas"],
      demonstrates: "ML-driven security, intrusion detection, data preprocessing, model optimization",
      github: "https://github.com/anjalipatil15/Intrusion-Detection-Sys",
      details: "Implemented feature engineering on network traffic data to improve detection accuracy. Used threshold tuning to balance precision and recall for operational deployment."
    },
    {
      id: 3,
      image: "/images/threat-intel1.jpeg",
      name: "Honeypot-Based Threat Intelligence System",
      tagline: "Capture real-world attack data and extract IOCs from attacker behavior",
      keyFeatures: [
        "Live SSH honeypot capturing actual attack attempts",
        "Automated attacker behavior analysis and IOC extraction",
        "Threat intelligence database of IP addresses and attack patterns"
      ],
      technologies: ["Cowrie", "AWS EC2", "Python", "Linux", "Log Analysis"],
      demonstrates: "Threat intelligence, honeypot deployment, attacker behavior analysis, AWS infrastructure",
      github: "https://github.com/anjalipatil15/threat-intel",
      details: "Parsed honeypot logs to identify attacker origins, common credentials used, and command patterns. Built automated reporting for threat intelligence dissemination."
    },
    {
      id: 4,
      image:"/images/captcha.png",
      name: "CAPTCHA Recognition using Deep Learning",
      tagline: "CNN-based multi-output character classification for CAPTCHA solving",
      keyFeatures: [
        "Convolutional Neural Network with multi-output prediction",
        "Parallel character classification reducing complexity",
        "Trained on diverse CAPTCHA datasets"
      ],
      technologies: ["Python", "TensorFlow/Keras", "CNN", "Scikit-learn", "Jupyter"],
      demonstrates: "Deep learning, computer vision, model architecture design, image preprocessing",
      github: "https://github.com/anjalipatil15/captcha-x-final",
      details: "Implemented image preprocessing (segmentation, normalization) and multi-output Dense layer for simultaneous character prediction."
    },
    {
      id: 5,
      image:"/images/ios.jpeg",
      name: "iOS Jailbreaking Security Analysis",
      tagline: "Understanding iOS security architecture and privilege escalation chains",
      keyFeatures: [
        "Deep dive into iOS kernel architecture and privilege escalation",
        "Analysis of sandbox escapes and system call exploitation",
        "Documentation of privilege escalation techniques"
      ],
      technologies: ["iOS Security", "Linux", "System Calls", "Reverse Engineering"],
      demonstrates: "Mobile security, kernel exploitation, privilege escalation, security architecture analysis",
      github: "https://github.com/anjalipatil15/iOS-Security-CaseStudy",
      details: "Studied iOS sandboxing, entitlements, and demonstrated concepts using Linux privilege escalation parallels."
    },
    
  ],

  experiences: [
    {
  role: "Network Security Intern",
  organization: "The Cyber Ledger",
  period: "May 2026 - July 2026",
  description:
    "Worked on network security and threat analysis projects using industry-standard security tools.",
  points: [
    "Analyzed network traffic and security events using Wireshark and Nmap",
    "Performed vulnerability assessments with Burp Suite and Metasploit",
    "Learned malware analysis, Zero Trust concepts, and security best practices like ISO 27001"
  ]
},
    {
      role: "Head of Tech Department",
      organization: "MUN Society, NMIMS MPSTME",
      period: "2024 – 2025",
      description:
        "Led technical planning and development work for MumbaiMUN, including website updates, backend workflows, and technical coordination.",
      points: [
        "Worked on event technology systems and web development",
        "Coordinated technical tasks across the team",
        "Helped build smoother digital workflows for delegate and event operations"
      ]
    },
    {
      role: "Backend Development Intern",
      organization: "Veena Infotech",
      period: "June 2025 – August 2025",
      description:
        "Worked on backend and maintenance modules for web-based management systems using PHP and JavaScript.",
      points: [
        "Contributed to backend logic and system maintenance",
        "Worked with existing codebases and practical debugging workflows",
        "Gained experience with stability, usability, and web application updates"
      ]
    },
    {
      role: "Tech Executive",
      organization: "Maarg Mumbai",
      period: "2024 – Present",
      description:
        "Supported frontend updates and technical planning for volunteer-led digital initiatives.",
      points: [
        "Worked on website updates and interface improvements",
        "Supported technical execution for community-focused projects",
        "Collaborated on digital infrastructure for social impact work"
      ]
    }
  ],

  activities: [
  {
    title: "Hack The Box",
    type: "Hands-on Practice",
    description:
      "I use Hack The Box to build practical experience with Linux, networking, enumeration, web security, and privilege escalation.",
    items: [
      "Working through beginner-friendly machines and labs",
      "Practicing service enumeration and basic exploit paths",
      "Improving Linux command-line confidence",
      "Writing down methods, mistakes, and useful patterns"
    ],
    link: "https://profile.hackthebox.com/profile/019c8ad1-fa91-737d-bee5-96eae0d5add7"
  },
  {
    title: "Medium",
    type: "Writing",
    description:
      "I use Medium to document what I’m learning in cybersecurity, OSINT, and technical projects in a way that is clear and useful.",
    items: [
      "Cybersecurity learning notes",
      "Project breakdowns and build logs",
      "OSINT and investigation-style writeups",
      "Reflections from labs, tools, and research"
    ],
    link: "https://medium.com/@anjalipatil.dev"
  },
  {
    title: "OSINT Practice",
    type: "Research",
    description:
      "I’m building a structured OSINT workflow focused on collecting public information carefully, checking sources, and presenting findings clearly.",
    items: [
      "Source discovery and validation",
      "Timeline and link analysis",
      "Public-data investigation methods",
      "Clear reporting without overclaiming"
    ],
    link: "#"
  }
],

  certifications: [
    {
      name: "Certified Ethical Hacker (CEH)",
      image:"/images/CEH.png",
      issuer: "EC Council",
      focus: "Hands-on exposure to penetration testing concepts, attack techniques, system security, and risk assessment."
    },
    {
      name: "NMIMS Summer School for Cybersecurity and Forensics",
      image:"/images/nmims.png",
      issuer: "NMIMS ",
      focus: "Practical exposure to cybersecurity and digital forensics workflows using tools such as Nmap, Wireshark, Burp Suite, Metasploit, and data recovery platforms."
    },
    {
      name: "Google Cybersecurity Certificate",
      image:"/images/google.png",
      issuer: "Coursera",
      focus: "Foundational cybersecurity concepts, threat analysis, incident response"
    },
    {
      name: "Introduction to CIP",
      image:"/images/opswat.jpeg",
      issuer: "OPSWAT Academy",
      focus: "Critical infrastructure protection and security best practices"
    },
    {
      name: "Full Stack Development",
      image:"/images/nmims.png",
      issuer: "NMIMS",
      focus: "Frontend, backend, databases, system design and deployment"
    }
  ],
};
