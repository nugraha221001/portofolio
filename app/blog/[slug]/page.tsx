import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../../sanity/lib/client'
import { urlFor } from '../../../sanity/lib/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'

const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      
      return (
        <div className="my-10 w-full flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(value).url()}
            alt={value.alt || 'Gambar artikel'}
            className="rounded-2xl border border-border max-w-full h-auto max-h-150 object-contain shadow-sm"
          />
          {value.alt && (
            <span className="mt-3 text-sm text-muted-foreground italic text-center">
              {value.alt}
            </span>
          )}
        </div>
      )
    }
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-10 mb-4 text-foreground">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3 text-foreground">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground bg-muted/30 py-2 rounded-r-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="leading-relaxed mb-6 text-muted-foreground">{children}</p>,
  },
  // 👇 INI ADALAH TAMBAHAN ATURAN PENOMORAN DAN BULLET
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-6 text-muted-foreground space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-6 text-muted-foreground space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  // 👆 AKHIR TAMBAHAN ATURAN
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

      <div className="flex items-center gap-4 mb-10 border-b border-border pb-6">
        {post.author && (
          <div className="flex items-center gap-2.5">
            {post.author.image ? (
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-border bg-muted">
                <Image 
                  src={post.author.image} 
                  alt={post.author.name} 
                  fill 
                  sizes="36px"
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