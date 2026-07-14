import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const POSTS = [
  {
    image: '/blog-frontend.png',
    category: 'Development',
    title: 'Building Responsive UIs That Scale',
    excerpt:
      'Lessons learned crafting component-driven layouts that stay clean and maintainable as projects grow.',
  },
  {
    image: '/blog-seo.png',
    category: 'Data & SEO',
    title: 'Turning Search Trends Into Strategy',
    excerpt:
      'How I use Python and trend analysis to translate raw search data into actionable SEO decisions.',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Blog
        </p>
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Writing &amp; ideas
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          A space for future articles on frontend development, design, and data.
          Stay tuned.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {POSTS.map((post) => (
          <article
            key={post.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image || '/placeholder.svg'}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 32rem"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {post.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Read More
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
