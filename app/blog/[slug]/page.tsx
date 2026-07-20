import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../../sanity/lib/client'
import { PortableText, PortableTextComponents } from '@portabletext/react'

const myPortableTextComponents: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const isExternal = value?.href?.startsWith('http')
      return (
        <a 
          href={value?.href} 
          target={isExternal ? '_blank' : undefined} 
          rel={isExternal ? 'noopener noreferrer' : undefined} 
          className="font-semibold text-primary underline decoration-primary/50 underline-offset-4 transition-all hover:decoration-primary"
        >
          {children}
        </a>
      )
    },
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;

  // 1. UPDATE QUERY: Menangkap data author, categories, dan tanggal rilis
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      "image": mainImage.asset->url,
      publishedAt,
      body,
      author->{
        name,
        "image": image.asset->url
      },
      "categories": categories[]->title
    }
  `, { slug: resolvedParams.slug }, { next: { revalidate: 0 } })

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan 😢</h1>
      </div>
    )
  }

  // Konversi tanggal ke format Bahasa Indonesia (Contoh: 24 Oktober 2026)
  const formattedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : null

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <Link href="/#blog" className="mb-8 inline-block text-sm font-semibold text-primary transition-colors hover:underline">
        &larr; Kembali ke Beranda
      </Link>
      
      {/* 2. MENAMPILKAN KATEGORI (Jika ada) */}
      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((cat: string) => (
            <span key={cat} className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              {cat}
            </span>
          ))}
        </div>
      )}
      
      <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
        {post.title}
      </h1>

      {/* 3. MENAMPILKAN BIO AUTHOR & TANGGAL RILIS */}
      <div className="flex items-center gap-4 mb-10 border-b border-border pb-6">
        {post.author && (
          <div className="flex items-center gap-2.5">
            {post.author.image ? (
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-border bg-muted">
                <Image 
                  src={post.author.image} 
                  alt={post.author.name} 
                  fill 
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                {post.author.name.charAt(0)}
              </div>
            )}
            <span className="text-sm font-medium text-foreground">{post.author.name}</span>
          </div>
        )}
        
        {formattedDate && (
          <span className="text-sm text-muted-foreground border-l border-border pl-4">
            {formattedDate}
          </span>
        )}
      </div>
      
      {/* 4. PENGATURAN FOTO: Menggunakan h-62.5 dan sm:h-100 sesuai saran linter */}
      {post.image && (
        <div className="relative mb-10 w-full h-62.5 sm:h-100 overflow-hidden rounded-2xl border border-border bg-muted">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 48rem"
            priority
          />
        </div>
      )}
      
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
        <PortableText value={post.body} components={myPortableTextComponents} />
      </div>
    </article>
  )
}