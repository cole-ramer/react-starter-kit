export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 group">
      {/* 2x2 grid logo mark */}
      <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
        <div className="bg-accent rounded-[2px]" />
        <div className="bg-accent/40 rounded-[2px]" />
        <div className="bg-accent/40 rounded-[2px]" />
        <div className="bg-accent rounded-[2px]" />
      </div>
      <span className="font-display font-bold text-sm tracking-tight text-ink group-hover:text-accent transition-colors">
        react-starter
      </span>
    </a>
  )
}
