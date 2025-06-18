import { SiPython, SiJavascript, SiTypescript, SiReact, SiMongodb, SiMysql, SiN8N } from "react-icons/si"
import { FaJava } from "react-icons/fa"
import Card from "../components/Card"
import IconSkill from "../ui/IconSkill"

function About() {
  const cards = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Who am I?",
      text: "I'm Francisco, a Full Stack Developer passionate about technology and innovation. With over 3 years of experience, I specialize in creating modern, efficient web solutions that solve real-world problems",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "My goal",
      text: "My goal is to help businesses and entrepreneurs digitize their processes and create exceptional web experiences. I constantly seek to learn new technologies to deliver the best solutions.",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "My profile",
      text: "Full Stack Developer with a focus on Frontend and Backend. Experienced in process automation, REST APIs, databases, and developing intuitive and responsive user interfaces.",
    },
  ]

  const skills = [
    {
      name: "Python",
      icon: <SiPython className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#3776ab]" />,
      color: "hover:bg-blue-900/30",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#f7df1e]" />,
      color: "hover:bg-yellow-900/30",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#3178c6]" />,
      color: "hover:bg-blue-900/30",
    },
    {
      name: "Java",
      icon: <FaJava className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#f89820]" />,
      color: "hover:bg-orange-900/30",
    },
    {
      name: "React",
      icon: <SiReact className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#61dafb]" />,
      color: "hover:bg-cyan-900/30",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#47a248]" />,
      color: "hover:bg-green-900/30",
    },
    {
      name: "SQL",
      icon: <SiMysql className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#4479a1]" />,
      color: "hover:bg-blue-900/30",
    },
    {
      name: "n8n",
      icon: <SiN8N className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#ea4b71]" />,
      color: "hover:bg-pink-900/30",
    },
  ]

  return (
    <section
      className="text-center bg-gradient-to-bl from-slate-950 via-slate-900 to-slate-900 py-16 sm:py-15 lg:py-15 px- sm:px-6 lg:px-8"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">About me</h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-8 "></div>

        <div className="space-y-6 ">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cards.map((card, idx) => (
              <Card key={idx} icon={card.icon} title={card.title} text={card.text} />
            ))}
          </div>


          <div className="bg-slate-950/30 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="font-bold text-2xl sm:text-3xl mb-4">My Skills</h3>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-8 sm:mb-10"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8">
              {skills.map((skill, idx) => (
                <IconSkill key={idx} name={skill.name} icon={skill.icon} color={skill.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
