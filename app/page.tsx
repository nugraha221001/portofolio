import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ExperienceSection } from '@/components/experience-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { BlogSection } from '@/components/blog-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <TechStackSection />
        <BlogSection />
      </main>
      <SiteFooter />
    </div>
  )
}
