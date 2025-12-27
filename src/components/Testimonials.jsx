import { Star, Quote } from 'lucide-react'
import { StaggerContainer, StaggerItem, FadeIn } from './Animations'

function Testimonials() {
  const testimonials = [
    {
      name: 'Thomas Berg',
      company: 'Berg Elektro AS',
      text: 'Brynex leverte en fantastisk nettside for oss. Prosessen var enkel og resultatet overgikk forventningene. Vi får stadig henvendelser fra nye kunder som har funnet oss på Google.',
      rating: 5,
      image: null
    },
    {
      name: 'Maria Olsen',
      company: 'Olsen & Co Interiør',
      text: 'Vi trengte en nettbutikk som fungerte for både privatkunder og bedrifter. Brynex forstod behovene våre og leverte en løsning som har økt salget vårt betydelig.',
      rating: 5,
      image: null
    },
    {
      name: 'Anders Kristiansen',
      company: 'Nordvik Idrettslag',
      text: 'Som frivillig i et idrettslag hadde vi begrenset budsjett. Brynex ga oss en profesjonell nettside til en pris vi hadde råd til. Medlemmene er veldig fornøyde!',
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
            <p>Vi er stolte av å levere løsninger som kundene våre elsker</p>
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
