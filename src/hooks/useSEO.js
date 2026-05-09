import { useEffect } from 'react'

export function useSEO({ title, description, canonicalPath, ogImage }) {
  useEffect(() => {
    // Update document title
    const fullTitle = title 
      ? `${title} | Brynex AS` 
      : 'Brynex AS | Digitale løsninger - Nettsider, Nettbutikker & Google Ads'
    document.title = fullTitle

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }

    // --- NEW: Canonical URL per side ---
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    const fullCanonical = `https://brynex.no${canonicalPath || window.location.pathname}`
    canonical.setAttribute('href', fullCanonical)

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    const ogImageMeta = document.querySelector('meta[property="og:image"]')
    
    if (ogTitle) ogTitle.setAttribute('content', fullTitle)
    if (ogDescription && description) ogDescription.setAttribute('content', description)
    if (ogUrl) ogUrl.setAttribute('content', fullCanonical)
    if (ogImageMeta && ogImage) ogImageMeta.setAttribute('content', ogImage)

    // Cleanup - restore defaults on unmount
    return () => {
      document.title = 'Brynex AS | Digitale løsninger - Nettsider, Nettbutikker & Google Ads'
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Brynex AS leverer profesjonelle digitale løsninger. Vi bygger nettsider for bedrifter, klubber og hobbyister, nettbutikker med B2B/B2C funksjonalitet, og hjelper med Google Business og Google Ads.')
      }
    }
  }, [title, description, canonicalPath, ogImage])
}
