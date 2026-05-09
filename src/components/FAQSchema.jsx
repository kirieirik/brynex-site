import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

function FAQSchema({ items, title = 'Ofte stilte spørsmål' }) {
  const [openIndex, setOpenIndex] = useState(null)

  // FAQ Schema for ChatGPT / Google AI Overviews
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item, idx) => ({
      "@type": "Question",
      "@id": `${window.location.href}#q${idx + 1}`,
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>{title}</h2>
          </div>

          <div className="faq-list">
            {items.map((item, idx) => (
              <details
                key={idx}
                className="faq-item"
                open={openIndex === idx}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenIndex(openIndex === idx ? null : idx)
                }}
              >
                <summary className="faq-question">
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`faq-icon ${openIndex === idx ? 'open' : ''}`}
                  />
                </summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQSchema
