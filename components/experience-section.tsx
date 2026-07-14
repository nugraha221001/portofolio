import { Code2, PenTool, LineChart } from 'lucide-react'

const EXPERIENCES = [
  {
    icon: Code2,
    role: 'Frontend Trainee',
    company: 'Ruangguru Camp',
    description:
      'Built responsive, component-driven interfaces and translated designs into clean, maintainable code.',
    tags: ['HTML', 'CSS', 'ReactJS'],
  },
  {
    icon: PenTool,
    role: 'UI/UX Intern',
    company: 'Queen Network Nusantara',
    description:
      'Crafted wireframes and interactive prototypes, refining user flows for clarity and usability.',
    tags: ['Wireframing', 'Prototyping'],
  },
  {
    icon: LineChart,
    role: 'SEO & Data Intern',
    company: 'Liputan Enam Dot Com & Kazee Digital Indonesia',
    description:
      'Analyzed search trends and content performance to drive data-informed SEO strategies.',
    tags: ['Python', 'Trend Analysis'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Experience
        </p>
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Where I&apos;ve been building
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          A snapshot of the roles that shaped my skills across development,
          design, and data.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {EXPERIENCES.map((exp) => (
          <article
            key={exp.company}
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
              <exp.icon className="size-5" />
            </div>
            <h3 className="text-lg font-semibold">{exp.role}</h3>
            <p className="mt-0.5 text-sm font-medium text-primary">
              @ {exp.company}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {exp.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
