function AggregateRatingSchema({ rating = 5, reviewCount = 42, ratingCount = 42 }) {
  // Aggregate Rating Schema for reviews/testimonials
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brynex AS",
    "url": "https://brynex.no",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "ratingCount": ratingCount,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    }
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  )
}

export default AggregateRatingSchema
