export const portfolioData = {
  personal: {
    name: "Anjali Patil",
    title: "B.Tech Computer Engineering | NMIMS Mumbai",
    roleStatement: "I build practical, well-structured systems with a focus on security, intelligence, and thoughtful engineering.",
    email: "anjali2005.patil@gmail.com",
    phone: "+91 7045343572",
    github: "https://github.com/anjalipatil15",
    linkedin: "https://www.linkedin.com/in/anjalipatil15/",
    medium:"https://medium.com/@anjalipatil.dev",
    resume: "/resume.pdf"
  },

  Projects: [
    {
      id: 1,
      image: "/images/vuln_scan.png",
      name: "Advanced Web Application Vulnerability Scanner",
      tagline: "Automated web security assessment platform with vulnerability detection and structured risk reporting",
      keyFeatures: [
        "Website crawling and asset discovery across 4 testing modules",
        "Automated XSS and SQL Injection detection",
        "Security header and cookie security analysis with structured risk reporting"
      ],
      technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "Jinja2"],
      demonstrates: "Web application security, vulnerability assessment, secure coding practices, backend development, automated security testing",
      github: "https://github.com/anjalipatil15/web-vuln-scanner",
      details: "Developed a modular vulnerability scanner capable of discovering web assets, analyzing security configurations, and identifying common web vulnerabilities including Cross-Site Scripting (XSS) and SQL Injection (SQLi). Implemented automated risk scoring, scan management, and report generation through a FastAPI-based architecture."
    },
    {
      id: 2,
      image: "/images/threat-intel1.jpeg",
      name: "Honeypot-Based Threat Intelligence System",
      tagline: "Live SSH honeypot on AWS capturing real-world attacks and extracting IOCs",
      keyFeatures: [
        "Live Cowrie SSH honeypot deployed on AWS EC2 capturing real attack attempts",
        "Automated log analysis extracting IOCs from attacker behavior",
        "Threat intelligence database of attacker IPs and attack patterns"
      ],
      technologies: ["Cowrie", "AWS EC2", "Python", "Linux", "Log Analysis"],
      demonstrates: "Threat intelligence, honeypot deployment, attacker behavior analysis, AWS infrastructure",
      github: "https://github.com/anjalipatil15/threat-intel",
      details: "Parsed honeypot logs to identify attacker origins, common credentials used, and command patterns. Built automated reporting for threat intelligence dissemination."
    },
    {
      id: 3,
      image: "/images/ids.png",
      name: "ML-Based Intrusion Detection System",
      tagline: "Real-time network attack detection using a two-stage XGBoost classifier",
      keyFeatures: [
        "Two-stage pipeline: binary attack detection, then multi-class attack classification",
        "Threshold-based alerting to reduce false positives",
        "Trained on the CICIDS2017 dataset (50K+ attack samples)"
      ],
      technologies: ["Python", "XGBoost", "Scikit-learn", "CICIDS2017", "Pandas"],
      demonstrates: "ML-driven security, intrusion detection, data preprocessing, model optimization",
      github: "https://github.com/anjalipatil15/Intrusion-Detection-Sys",
      details: "Implemented feature engineering on network traffic data to improve detection accuracy. Used threshold tuning to balance precision and recall for operational deployment."
    },
    {
      id: 4,
      image: "/images/ios.jpeg",
      name: "iOS Jailbreaking Security Analysis (Review Paper)",
      tagline: "Review paper on iOS security architecture and real-world jailbreak exploit chains",
      keyFeatures: [
        "Studied iOS sandboxing, code signing, and kernel-level protections",
        "Analyzed real-world jailbreak exploit chains",
        "Built a Linux demo of sandbox escapes, namespace isolation, and kernel hardening"
      ],
      technologies: ["iOS Security", "Linux", "System Calls", "Reverse Engineering"],
      demonstrates: "Mobile security, security architecture analysis, sandboxing, privilege escalation concepts",
      github: "https://github.com/anjalipatil15/iOS-Security-CaseStudy",
      details: "Studied iOS sandboxing, code signing, and kernel protections, and demonstrated the concepts using Linux sandboxing and namespace-isolation parallels."
    },
    {
      id: 5,
      image: "/images/captcha.png",
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
  ],

  experiences: [
    {
      role: "Network Security Intern",
      organization: "The Cyber Ledger (Remote)",
      period: "May 2026 – July 2026",
      description:
        "Worked on network traffic analysis, security event review, and vulnerability assessment using industry-standard security tools.",
      points: [
        "Analyzed network traffic and security events using Wireshark and Nmap",
        "Performed vulnerability assessments with Burp Suite and Metasploit",
        "Applied malware-analysis fundamentals, Zero Trust concepts, and security best practices aligned with ISO 27001"
      ]
    },
    {
      role: "Backend Development Intern",
      organization: "Veena Infotech (Veena Group), Mumbai",
      period: "June 2025 – August 2025",
      description:
        "Worked on backend and maintenance work for the Society Websites and the Veena Management System's Security & Maintenance module using PHP, HTML, CSS, and JavaScript.",
      points: [
        "Contributed to the Veena Estate Consultants project",
        "Gained hands-on exposure to web security considerations and system stability",
        "Worked with existing codebases and backend debugging workflows"
      ]
    },
    {
      role: "Head of Tech Department",
      organization: "MUN Society, NMIMS MPSTME",
      period: "2024 – 2025",
      description:
        "Led a technical team building and maintaining websites and backend workflows for MumbaiMUN using Astro.js, HTML, CSS, and JavaScript.",
      points: [
        "Built a QR-based delegate verification system used by 500+ delegates at MumbaiMUN",
        "Managed technical planning, documentation, and version control",
        "Mentored team members for smooth event execution"
      ]
    },
    {
      role: "Tech Executive",
      organization: "Maarg Mumbai (Volunteer)",
      period: "2024 – Present",
      description:
        "Support frontend development, website updates, and digital infrastructure for volunteer-led community initiatives.",
      points: [
        "Worked on website updates and interface improvements",
        "Supported technical execution for community-focused projects",
        "Collaborated on digital infrastructure for social impact work"
      ]
    }
  ],

  skills: [
    {
      category: "Cybersecurity & Networking",
      items: ["OSINT", "Linux", "Hack The Box labs", "TCP/IP", "HTTP", "DNS", "OWASP Top 10", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "Zero Trust", "ISO 27001 fundamentals"]
    },
    {
      category: "Programming",
      items: ["Python", "C++", "JavaScript", "SQL", "R", "Java"]
    },
    {
      category: "AI / Machine Learning",
      items: ["TensorFlow/Keras", "CNNs", "XGBoost", "Scikit-learn", "Pandas"]
    },
    {
      category: "Web & Tools",
      items: ["HTML/CSS", "React.js", "Astro.js", "Node.js", "FastAPI", "Git/GitHub", "Docker", "AWS EC2"]
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
      issuer: "EC-Council",
      focus: "Hands-on exposure to penetration testing concepts, attack techniques, system security, and risk assessment."
    },
    {
      name: "NMIMS Summer School for Cybersecurity and Forensics",
      image:"/images/nmims.png",
      issuer: "NMIMS",
      focus: "Practical exposure to cybersecurity and digital forensics workflows using tools such as Nmap, Wireshark, Burp Suite, Metasploit, and data recovery platforms."
    },
    {
      name: "Google Cybersecurity Certificate",
      image:"/images/google.png",
      issuer: "Coursera",
      focus: "Foundational cybersecurity concepts, threat analysis, and incident response."
    },
    {
      name: "Introduction to CIP",
      image:"/images/opswat.jpeg",
      issuer: "OPSWAT Academy",
      focus: "Critical infrastructure protection and security best practices."
    },
    {
      name: "Full Stack Development",
      image:"/images/nmims.png",
      issuer: "NMIMS",
      focus: "Frontend, backend, databases, system design, and deployment."
    }
  ],
};
