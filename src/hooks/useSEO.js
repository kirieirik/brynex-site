import { useEffect } from 'react'

export function useSEO({ title, description }) {
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

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogTitle) ogTitle.setAttribute('content', fullTitle)
    if (ogDescription && description) ogDescription.setAttribute('content', description)

    // Cleanup - restore defaults on unmount
    return () => {
      document.title = 'Brynex AS | Digitale løsninger - Nettsider, Nettbutikker & Google Ads'
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Brynex AS leverer profesjonelle digitale løsninger. Vi bygger nettsider for bedrifter, klubber og hobbyister, nettbutikker med B2B/B2C funksjonalitet, og hjelper med Google Business og Google Ads.')
      }
    }
  }, [title, description])
}
