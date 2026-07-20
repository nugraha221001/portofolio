import { MapPin, Mail, X } from 'lucide-react'
import {
  InstagramIcon,
  WhatsappIcon,
  TiktokIcon,
} from '@/components/brand-icons'

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-border/60 bg-card/40"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center">
        <a href="#home" className="text-xl font-semibold tracking-tight">
          Lesy<span className="text-primary">.</span>
        </a>

        <a
          href="mailto:backuplesynugraha@gmail.com"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
        >
          <Mail className="size-4" />
          backuplesynugraha@gmail.com
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/anugrah_terindah22/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="size-4" />
          </a>
          <a
            href="https://wa.me/6285609480507"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <WhatsappIcon className="size-4" />
          </a>
          <a
            href="https://x.com/LesyNugraha_X"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) profile"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <X className="size-4" />
          </a>
          <a
            href="https://www.tiktok.com/@agaagar_" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok profile"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <TiktokIcon className="size-4" />
          </a>
        </div>

        <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          Based in Lampung, Indonesia
        </p>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Lesy Nugraha. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
