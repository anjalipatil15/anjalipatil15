import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone } from "lucide-react"

export default function Component() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "AWS",
    "Docker",
    "Git",
    "Figma",
    "MongoDB",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather application with location-based forecasts, historical data, and beautiful visualizations.",
      tech: ["React", "D3.js", "Weather API", "CSS3"],
      github: "#",
      live: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-900">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-blue-700 hover:text-blue-900 transition-colors">
                About
              </a>
              <a href="#skills" className="text-blue-700 hover:text-blue-900 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-blue-700 hover:text-blue-900 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-blue-700 hover:text-blue-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JD</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">John Doe</h1>
            <p className="text-xl md:text-2xl text-blue-700 mb-6">Full Stack Developer & UI/UX Designer</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Passionate about creating beautiful, functional, and user-centered digital experiences. I bring ideas to
              life through clean code and thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating scalable applications and
                intuitive user interfaces. My journey began with a curiosity for how things work, which led me to pursue
                computer science and eventually specialize in full-stack development.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe in the power of clean, efficient code and user-centered design. When I'm not coding, you can
                find me exploring new technologies, contributing to open-source projects, or enjoying the great
                outdoors.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-blue-200">
                <CardContent className="p-6 text-center">
                  <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Development</h3>
                  <p className="text-sm text-gray-600 mt-2">Full-stack web applications</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardContent className="p-6 text-center">
                  <Palette className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Design</h3>
                  <p className="text-sm text-gray-600 mt-2">UI/UX and visual design</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardContent className="p-6 text-center">
                  <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Mobile</h3>
                  <p className="text-sm text-gray-600 mt-2">Responsive & mobile-first</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardContent className="p-6 text-center">
                  <ExternalLink className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Integration</h3>
                  <p className="text-sm text-gray-600 mt-2">APIs and third-party services</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-blue-300 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 border-blue-600 text-blue-600">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{"Let's Work Together"}</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            {"I'm always interested in new opportunities and exciting projects. "}
            {"Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            <Mail className="mr-2 h-4 w-4" />
            hello@johndoe.dev
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-6 bg-blue-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 John Doe. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
