import { useState } from 'react'
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify';

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: "", message: "" })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: "", message: "" })

    try {

      const serviceID = "service_a5icnjj" 
      const templateID = "template_ihct0qc" 
      const publicKey = "R6omrhYZ_b4PiV7ue" 

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Francisco", 
      }

      await emailjs.send(serviceID, templateID, templateParams, publicKey)

      setStatus({
        type: "success",
        message: "¡Mensaje enviado exitosamente! Te responderé pronto.",
      })
      toast.success('Email sent correctly!', {
      theme: "dark",
    });
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus({
        type: "error",
        message: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
      })
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <form className='p-8 bg-slate-950/30 rounded-2xl shadow-lg w-full' onSubmit={handleSubmit}>
        <div className="mb-6">
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-slate-300 placeholder-slate-500 text-left"
                placeholder="Name"
            />
        </div>

        <div className="mb-6">
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-slate-300 placeholder-slate-500 text-left"
                placeholder="Your E-mail"
            />
        </div>

        <div className="mb-8">
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none text-slate-300 placeholder-slate-500 text-left"
                placeholder="Tell me about your project..."
            ></textarea>
        </div>

            <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
                Send Message
            </button>
    </form>
  )
}

export default ContactForm