
function IconSkill({ name, icon, color }) {
  return (
    <div
        className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
    >
        <div className={`bg-slate-800 p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-3 border border-slate-700 ${color}`}>
            {icon}
        </div>
        <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">
            {name}
        </span>
    </div>
  )
}

export default IconSkill