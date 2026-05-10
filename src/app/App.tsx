import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, FolderGit2, Quote, GraduationCap, Award, Send } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { AnimatedWrapper } from "./components/AnimatedWrapper";
import { SectionTitle } from "./components/SectionTitle";
import { ProjectCard } from "./components/ProjectCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { TechBadge } from "./components/TechBadge";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Navbar */}
      <Navbar />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9965b]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d8a56a]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-8">
          {/* Main Content */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-12 lg:space-y-16">
            {/* Hero Section */}
            <section id="home" className="min-h-[60vh] lg:min-h-[80vh] flex items-center">
              <div className="w-full">
                <AnimatedWrapper>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2b2b2b] mb-4 lg:mb-6">
                      Mohammed Sameer
                      <br />
                      <span className="relative inline-block">
                        Rangrej
                        <div className="absolute -bottom-3 left-0 w-24 lg:w-32 h-1.5 lg:h-2 bg-gradient-to-r from-[#c9965b] to-[#d8a56a] rounded-full"></div>
                      </span>
                    </h1>

                    {/* Animated Rotating Subtitle */}
                    <div className="mb-6 lg:mb-8 h-10 sm:h-12 flex items-center">
                      <TypeAnimation
                        sequence={[
                          "Full Stack Developer",
                          2500,
                          "API Integration Expert",
                          2500,
                          "MERN Stack Engineer",
                          2500,
                          "React & Next.js Developer",
                          2500,
                          "Backend API Developer",
                          2500
                        ]}
                        wrapper="h2"
                        speed={50}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#c9965b] to-[#d8a56a] bg-clip-text text-transparent"
                        repeat={Infinity}
                      />
                    </div>

                    <p className="text-base lg:text-lg text-[#6b6b6b] max-w-3xl mb-6 lg:mb-8 leading-relaxed">
                      Passionate Full Stack Developer skilled in building scalable and responsive web
                      applications using React.js, Next.js, Node.js, Express.js, and MongoDB.
                      Experienced in developing REST APIs, authentication systems, admin panels, and
                      modern user interfaces with strong focus on performance and user experience.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 lg:gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(201, 150, 91, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-[#c9965b] to-[#d8a56a] text-white rounded-xl font-medium shadow-lg flex items-center gap-2 text-sm lg:text-base"
                      >
                        <Download size={18} className="lg:w-5 lg:h-5" />
                        Download Resume
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection("contact")}
                        className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-[#2b2b2b] rounded-xl font-medium shadow-lg border-2 border-[#c9965b] hover:bg-[#c9965b] hover:text-white transition-colors flex items-center gap-2 text-sm lg:text-base"
                      >
                        <Mail size={18} className="lg:w-5 lg:h-5" />
                        Contact Me
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection("projects")}
                        className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-[#2b2b2b] rounded-xl font-medium shadow-lg border border-gray-200 hover:border-[#c9965b] transition-colors flex items-center gap-2 text-sm lg:text-base"
                      >
                        <FolderGit2 size={18} className="lg:w-5 lg:h-5" />
                        View Projects
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatedWrapper>
              </div>
            </section>

            {/* About Section */}
            <section id="about">
              <AnimatedWrapper>
                <SectionTitle title="About Me" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#c9965b] relative"
                >
                  <Quote className="absolute top-6 right-6 text-[#c9965b]/20" size={28} />
                  <p className="text-lg text-[#6b6b6b] leading-relaxed italic relative z-10">
                    "Focused on building responsive, scalable, and modern web applications with clean
                    UI and efficient backend architecture. Passionate about learning AI-powered tools
                    and modern web technologies."
                  </p>
                </motion.div>
              </AnimatedWrapper>
            </section>

            {/* Core Skills Section */}
            <section>
              <AnimatedWrapper>
                <SectionTitle title="Core Skills" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Frontend */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-[#2b2b2b] mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-[#c9965b] to-[#d8a56a] rounded-full"></span>
                      Frontend Development
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Next.js", "Bootstrap", "Tailwind CSS", "Material UI", "Responsive Design"].map((skill) => (
                        <TechBadge key={skill} name={skill} variant="gold" />
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-[#2b2b2b] mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-[#c9965b] to-[#d8a56a] rounded-full"></span>
                      Backend Development
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "REST APIs"].map((skill) => (
                        <TechBadge key={skill} name={skill} variant="gold" />
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-[#2b2b2b] mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-[#c9965b] to-[#d8a56a] rounded-full"></span>
                      Database
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["MongoDB", "PostgreSQL"].map((skill) => (
                        <TechBadge key={skill} name={skill} variant="gold" />
                      ))}
                    </div>
                  </div>

                  {/* Concepts */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-[#2b2b2b] mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-[#c9965b] to-[#d8a56a] rounded-full"></span>
                      Key Concepts
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["JWT Authentication", "Protected Routes"].map((skill) => (
                        <TechBadge key={skill} name={skill} variant="gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            </section>

            {/* Experience Section */}
            <section id="experience">
              <AnimatedWrapper>
                <SectionTitle title="Work Experience" />
                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9965b] via-[#d8a56a] to-transparent"></div>
                  <ExperienceCard
                    role="Full Stack Web Developer Intern"
                    company="Media City Corp"
                    location="Bhilwara, India"
                    duration="Jul 2025 – Nov 2025"
                    responsibilities={[
                      "Designed and developed RESTful APIs using Node.js and Express.js",
                      "Built responsive user interfaces using React.js",
                      "Implemented JWT authentication and role-based access control",
                      "Developed admin panel features for dynamic content management",
                      "Conducted API testing using Postman",
                      "Collaborated using Git and GitHub"
                    ]}
                    technologies={["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "GitHub", "Postman"]}
                  />
                </div>
              </AnimatedWrapper>
            </section>

            {/* Projects Section */}
            <section id="projects">
              <AnimatedWrapper>
                <SectionTitle title="Featured Projects" />
                <div className="grid grid-cols-1 gap-8">
                  <ProjectCard
                    title="Wedding Website Template"
                    description="A responsive full-stack wedding website platform with dynamic content management, event pages, image gallery, and admin dashboard."
                    technologies={["React.js", "Node.js", "TypeScript", "MongoDB"]}
                    features={[
                      "Responsive frontend with modern UI",
                      "RESTful APIs for data management",
                      "MongoDB database integration",
                      "Dynamic content management",
                      "Admin panel for content control",
                      "Image gallery management",
                      "Reusable component architecture",
                      "Optimized rendering performance"
                    ]}
                    status="Currently developing admin dashboard and API integrations"
                    githubUrl="https://github.com/Sammy6543/Wedding"
                    liveUrl="https://wedding-sepia-ten.vercel.app/"
                    imageUrl="/src/assets/Wedding.png"
                  />
                </div>
              </AnimatedWrapper>
            </section>

            {/* Professional Training Section */}
            <section>
              <AnimatedWrapper>
                <SectionTitle title="Professional Training" />
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#d8a56a]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#c9965b] to-[#d8a56a] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-white" size={24} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-[#2b2b2b] mb-2">
                        Full Stack Web Development (MERN)
                      </h3>
                      <p className="text-[#c9965b] font-medium mb-2">Grass Pvt. Ltd., Jaipur</p>
                      <p className="text-sm text-[#6b6b6b] mb-4">Jan 2025 – Jul 2025</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#6b6b6b]">
                        <div className="flex items-start">
                          <span className="text-[#c9965b] mr-2">✓</span>
                          <span>Built MERN stack applications</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-[#c9965b] mr-2">✓</span>
                          <span>Created blogging platform</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-[#c9965b] mr-2">✓</span>
                          <span>Created recipe website</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-[#c9965b] mr-2">✓</span>
                          <span>Implemented authentication systems</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-[#c9965b] mr-2">✓</span>
                          <span>Designed REST APIs</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-[#c9965b] mr-2">✓</span>
                          <span>Built responsive UI with Bootstrap & Tailwind</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedWrapper>
            </section>

            {/* Education Section */}
            <section>
              <AnimatedWrapper>
                <SectionTitle title="Education" />
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#c9965b]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#c9965b] to-[#d8a56a] rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-[#2b2b2b] mb-2">
                        Bachelor of Technology in Computer Science
                      </h3>
                      <p className="text-[#c9965b] font-medium mb-2">
                        Arya College of Engineering & IT, Jaipur
                      </p>
                      <p className="text-sm text-[#6b6b6b] mb-2">2019 – 2023</p>
                      <div className="inline-block px-4 py-2 bg-[#f5f1eb] rounded-lg">
                        <span className="text-sm font-semibold text-[#2b2b2b]">CGPA: 7.77</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedWrapper>
            </section>

            {/* Contact Section */}
            <section id="contact">
              <AnimatedWrapper>
                <SectionTitle title="Let's Connect" />
                <div className="bg-gradient-to-br from-[#c9965b] to-[#d8a56a] rounded-2xl p-8 shadow-2xl text-white">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-3">Ready to Start a Project?</h3>
                    <p className="text-white/90">
                      I'm currently available for freelance work and full-time opportunities
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.a
                      href="mailto:sameerrangrej2@gmail.com"
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Mail size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-white/80">Email me at</p>
                          <p className="font-semibold">sameerrangrej2@gmail.com</p>
                        </div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:+917737875786"
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Send size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-white/80">Call me at</p>
                          <p className="font-semibold">+91 7737875786</p>
                        </div>
                      </div>
                    </motion.a>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-sm">Available for opportunities</span>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            </section>
          </div>

          {/* Sidebar */}
          <div className="order-1 lg:order-2 lg:col-span-1 mb-8 lg:mb-0">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#6b6b6b]">
          <p className="text-sm">
            © 2026 Mohammed Sameer Rangrej. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
