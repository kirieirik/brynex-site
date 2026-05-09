function ServiceSchema({ services }) {
  // Service Catalog Schema for Google & AI models
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brynex AS",
    "url": "https://brynex.no",
    "logo": "https://brynex.no/Brynex.svg",
    "image": "https://brynex.no/Brynex.svg",
    "description": "Digitale løsninger: nettsider, nettbutikker, Google Ads og lokal SEO",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NO"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digitale Tjenester",
      "itemListElement": services.map((service, idx) => ({
        "@type": "Offer",
        "@id": service.url,
        "position": idx + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "url": service.url,
          "image": "https://brynex.no/Brynex.svg"
        },
        "price": service.price,
        "priceCurrency": "NOK",
        "availability": "https://schema.org/InStock",
        "areaServed": "NO"
      }))
    }
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  )
}

export default ServiceSchema
