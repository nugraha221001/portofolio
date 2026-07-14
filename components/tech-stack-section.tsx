import { Atom, Code2, PenTool, Terminal, Search, Cpu, FileSpreadsheet } from 'lucide-react'

const STACK = [
  { icon: Atom, label: 'ReactJS' },
  { icon: Code2, label: 'HTML / CSS' },
  { icon: PenTool, label: 'Figma' },
  { icon: Terminal, label: 'Python' },
  { icon: Search, label: 'SEO' },
  { icon: Cpu, label: 'IoT' },
  { icon: FileSpreadsheet, label: 'Microsoft Office' },
]

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="border-y border-border/60 bg-card/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Tech Stack
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I work with
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          {STACK.map((item) => (
            <div
              key={item.label}
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              <item.icon className="size-4 text-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
