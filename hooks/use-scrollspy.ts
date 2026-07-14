'use client'

import { useEffect, useState } from 'react'

export function useScrollspy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset

      // If near the bottom of the page, activate the last section.
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 4
      ) {
        setActiveId(ids[ids.length - 1])
        return
      }

      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids, offset])

  return activeId
}
