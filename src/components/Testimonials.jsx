import { Star, Quote } from 'lucide-react'
import { StaggerContainer, StaggerItem, FadeIn } from './Animations'

function Testimonials() {
  const testimonials = [
    {
      name: 'Fredrik Hansen',
      company: 'FH Fjellsprengning AS',
      text: 'Brynex har fikset både nettside og google bedriftsprofil for meg, og jeg er superfornøyd! Enkel og ha med å gjøre, og utfører jobben du vil ha gjort.',
      rating: 5,
      image: null
    },
    {
      name: 'Bilpleie Bobel',
      company: 'Bilpleie Bobel',
      text: 'Vi trengte en enkel nettside for vår bilpleiebedrift. Brynex leverte raskt og til en god avtalt pris. Anbefales!',
      rating: 5,
      image: null
    },
    {
      name: 'Lars',
      company: 'VVS Isolering AS',
      text: 'Brynex hjalp oss med å sette opp en profesjonell nettside slik at vi kunne tiltrekke flere kunder. Fornøyd med resultat og pris!',
      rating: 5,
      image: null
    }
  ]

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} size={16} fill="currentColor" />
    ))
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <h2>Hva kundene sier</h2>
            <p>Vi er stolte av å levere løsninger som kundene våre har behov for</p>
          </div>
        </FadeIn>

        <StaggerContainer className="testimonials-grid" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  <Quote size={32} />
                </div>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} />
                    ) : (
                      <span>{getInitials(testimonial.name)}</span>
                    )}
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Testimonials
