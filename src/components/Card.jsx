
function Card({ icon, title, text }) {
  return (
    <article className="bg-slate-950/30 rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10 relative border-blue-400/0 border hover:border-blue-400 h-full">
      <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 lg:mb-10">
        {icon}
        <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-center">{title}</h2>
      </div>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center">{text}</p>
    </article>
  )
}

export default Card
