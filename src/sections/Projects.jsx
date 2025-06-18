import Project from "../components/Project"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Voice-Chatbot n8n",
      description:
        "Automated chatbot on Telegram that captures and delivers audio using an AI Agent. Transcribes and sends audio via an API in Python with Flask and orchestrated with n8n.",
      image: "/img/wf.png?height=300&width=500",
      technologies: ["n8n", "Python", "Flask"],
      liveLink: "",
      githubLink: "https://github.com/FranJMD0508/Voice-Chabot-n8n.git",
    },
    {
      id: 2,
      title: "PetCare ",
      description:
        "Generalized software for the management and administration of veterinary clinics. It handles information such as consultations, medical appointments, medical histories, and vaccinations.",
      image: "/img/pc.png?height=300&width=500",
      technologies: ["React", "TypeScript", "PostgreSQL", "API Rest", "Tailwind CSS"],
      liveLink: "",
      githubLink: "https://github.com/FranJMD0508/Software-generalizado-Clinica-Veterinaria.git",
    },
    {
      id: 3,
      title: "Personal Website",
      description:
        "Responsive web page that showcases my technical skills, profile, and professional experience, using various technologies to document my background. All of this in a responsive and attractive way.",
      image: "/img/pf.png?height=300&width=500",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveLink: "",
      githubLink: "https://github.com/FranJMD0508/Portfolio.git",
    },
  ]

  return (
    <section
      className="text-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 py-16 sm:py-15 lg:py-15 px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">My Projects</h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-12 sm:mb-16"></div>

 
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              featured={project.featured}
            />
          ))}
        </div>


        <div className="bg-slate-950/30 rounded-2xl p-6 sm:p-8 border border-slate-800">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4">Got a project in mind?</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            I'm always interested in new challenges and collaboration opportunities. 
            Let's talk about your next project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base"
            >
              Contact me
            </a>
            <a
              href="https://github.com/FranJMD0508"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              View more on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
