'use client'

import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-24 pb-16"
    >
      <div className="grid w-full items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: text */}
        <div className="order-2 md:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Available for new opportunities
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Lesy Nugraha
          </h1>
          <p className="mt-4 text-lg font-medium text-primary sm:text-xl">
            Versatile Frontend Developer &amp; Data Enthusiast
          </p>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            A highly motivated Informatics graduate from Lampung University (GPA: 3.84) with an entrepreneurial background. I specialize in building responsive web applications, intuitive UI/UX, and data-driven strategies—bridging the gap between technical execution and real-world business goals.
          </p>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Hire Me
              <ArrowRight className="size-4" />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="mailto:backuplesynugraha@gmail.com"
              aria-label="Email"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/lesy-nugraha-164342175/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="https://github.com/nugraha221001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl border border-primary/20"
            />
            <div className="relative aspect-[4/5] w-64 overflow-hidden rounded-2xl border border-border bg-card sm:w-72 lg:w-80">
              <Image
                src="/Lesy-profile.jpeg"
                alt="Portrait of Lesy Nugraha"
                fill
                priority
                sizes="(max-width: 768px) 18rem, 20rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
