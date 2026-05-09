import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

function Breadcrumb({ items }) {
  // Breadcrumb Schema for Google / AI models
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.label,
      "item": `https://brynex.no${item.path}`
    }))
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      <nav className="breadcrumb-nav" aria-label="Brødsmulsti">
        <div className="breadcrumb-container">
          {items.map((item, idx) => (
            <div key={`${item.path}-${idx}`} className="breadcrumb-item">
              <Link to={item.path} className="breadcrumb-link">
                {item.label}
              </Link>
              {idx < items.length - 1 && (
                <ChevronRight size={16} className="breadcrumb-separator" />
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Breadcrumb
