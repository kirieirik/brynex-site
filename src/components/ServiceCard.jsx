import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function ServiceCard({ icon: Icon, title, description, details }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`service-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="service-card-header">
        <div className="service-icon">
          <Icon size={32} />
        </div>
        <h3>{title}</h3>
        <p className="service-description">{description}</p>
      </div>
      
      {details && details.length > 0 && (
        <>
          <button
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Vis mindre' : 'Les mer'}
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          <div className={`service-details ${isExpanded ? 'show' : ''}`}>
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default ServiceCard
