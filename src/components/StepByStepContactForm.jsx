import { useState } from 'react'
import { ChevronRight, ChevronLeft, CheckCircle, Send } from 'lucide-react'

function StepByStepContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    service: '',
    goal: '',
    currentStatus: '',
    region: '',
    timeline: '',
    budget: '',
    contactMethod: '',
    name: '',
    phone: '',
    email: ''
  })

  const steps = [
    {
      number: 1,
      title: 'Firmanavn eller klubbnavn?',
      key: 'company',
      type: 'text',
      placeholder: 'F.eks. "Vestby Mekanisk AS"'
    },
    {
      number: 2,
      title: 'Hvilken tjeneste er du interessert i?',
      key: 'service',
      type: 'select',
      options: [
        'Nettside for bedrift',
        'Nettside for klubb/forening',
        'Nettbutikk (B2C)',
        'Nettbutikk (B2B)',
        'Google Bedriftsprofil',
        'Google Ads',
        'SEO (Søkemotoroptimalisering)',
        'Annet'
      ]
    },
    {
      number: 3,
      title: 'Hva er ditt hovedmål?',
      key: 'goal',
      type: 'select',
      options: [
        'Økt synlighet online',
        'Flere salgsprosesser',
        'Bedre konvertering',
        'Bedre rangeringer i Google',
        'Annet'
      ]
    },
    {
      number: 4,
      title: 'Hvor er du nå?',
      key: 'currentStatus',
      type: 'select',
      options: [
        'Uten nettside',
        'Har nettside (men det går ikke bra)',
        'Nystart (vil jobbe med dette nå)',
        'Leter etter å skalere'
      ]
    },
    {
      number: 5,
      title: 'Hvilket område er du i?',
      key: 'region',
      type: 'select',
      options: [
        'Østlandet (Oslo, Akershus, Vestfold)',
        'Sogn og Fjordane',
        'Hordaland',
        'Rogaland',
        'Agder',
        'Innlandet',
        'Trøndelag',
        'Nordland',
        'Troms og Finnmark',
        'Utlandet'
      ]
    },
    {
      number: 6,
      title: 'Når trenger du dette gjort?',
      key: 'timeline',
      type: 'select',
      options: [
        'Asap (så fort som mulig)',
        'Innen 1-2 måneder',
        'Innen 3 måneder',
        'Usikker (ønske bare å høre om muligheter)'
      ]
    },
    {
      number: 7,
      title: 'Omtrentlig budsjett?',
      key: 'budget',
      type: 'select',
      options: [
        'Under 10.000 kr',
        '10.000 - 25.000 kr',
        'Over 25.000 kr',
        'Avhenger av løsning'
      ]
    },
    {
      number: 8,
      title: 'Beste måte å kontakte deg?',
      key: 'contactMethod',
      type: 'select',
      options: [
        'Telefon',
        'E-mail',
        'Både telefon og e-mail',
        'Du tar kontakt når du er klar'
      ]
    },
    {
      number: 9,
      title: 'Siste info - hvem er det som skal motta kontakt?',
      key: 'contactInfo',
      type: 'contact',
      fields: [
        { key: 'name', label: 'Navn', placeholder: 'Ditt navn', type: 'text' },
        { key: 'phone', label: 'Telefonnummer', placeholder: '+47 000 00 000', type: 'tel' },
        { key: 'email', label: 'E-postadresse', placeholder: 'din@epost.no', type: 'email' }
      ]
    }
  ]

  const currentStepData = steps[currentStep - 1]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xqekpvvd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'Firmanavn': formData.company,
          'Tjeneste': formData.service,
          'Hovedmål': formData.goal,
          'Nåværende status': formData.currentStatus,
          'Område': formData.region,
          'Tidslinje': formData.timeline,
          'Budsjett': formData.budget,
          'Kontaktmetode': formData.contactMethod,
          'Navn': formData.name,
          'Telefon': formData.phone,
          'E-post': formData.email
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Noe gikk galt. Prøv igjen eller send e-post direkte til post@brynex.no')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Noe gikk galt. Prøv igjen eller send e-post direkte til post@brynex.no')
    }

    setIsSubmitting(false)
  }

  const isCurrentStepValid = () => {
    if (currentStepData.type === 'contact') {
      return formData.name && formData.phone && formData.email
    }
    return formData[currentStepData.key] !== ''
  }

  if (isSubmitted) {
    return (
      <div className="step-form-success">
        <div className="success-content">
          <CheckCircle size={80} className="success-icon" />
          <h3>Takk for din henvendelse!</h3>
          <p>Vi har mottatt søknaden din og vil ta kontakt så snart som mulig – vanligvis innen 24 timer på hverdager.</p>
          <button
            className="btn btn-outline"
            onClick={() => {
              setIsSubmitted(false)
              setCurrentStep(1)
              setFormData({
                company: '',
                service: '',
                goal: '',
                currentStatus: '',
                region: '',
                timeline: '',
                budget: '',
                contactMethod: '',
                name: '',
                phone: '',
                email: ''
              })
            }}
          >
            Ny henvendelse
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="step-form-wrapper">
      <div className="step-form-container">
        {/* Progress Bar */}
        <div className="step-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(currentStep / steps.length) * 100}%` }}></div>
          </div>
          <div className="progress-text">
            Steg <span className="step-number">{currentStep}</span> av <span className="total-steps">{steps.length}</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="step-form">
          <div className="step-content">
            <h2>{currentStepData.title}</h2>

            {/* Text Input */}
            {currentStepData.type === 'text' && (
              <input
                type="text"
                name={currentStepData.key}
                value={formData[currentStepData.key]}
                onChange={handleInputChange}
                placeholder={currentStepData.placeholder}
                className="step-input"
                autoFocus
              />
            )}

            {/* Select Options */}
            {currentStepData.type === 'select' && (
              <div className="step-options">
                {currentStepData.options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`option-button ${formData[currentStepData.key] === option ? 'selected' : ''}`}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, [currentStepData.key]: option }))
                      setTimeout(handleNextStep, 300)
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* Contact Fields */}
            {currentStepData.type === 'contact' && (
              <div className="contact-fields">
                {currentStepData.fields.map(field => (
                  <div key={field.key} className="form-group">
                    <label htmlFor={field.key}>{field.label} *</label>
                    <input
                      type={field.type}
                      id={field.key}
                      name={field.key}
                      value={formData[field.key]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      required
                      className="step-input"
                      autoFocus={field.key === 'name'}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="step-buttons">
            <button
              type="button"
              onClick={handlePreviousStep}
              disabled={currentStep === 1}
              className="btn btn-secondary btn-nav"
            >
              <ChevronLeft size={20} />
              Tilbake
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!isCurrentStepValid()}
                className="btn btn-primary btn-nav"
              >
                Neste
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isCurrentStepValid() || isSubmitting}
                className="btn btn-primary btn-nav btn-submit"
              >
                {isSubmitting ? 'Sender...' : 'Send inn'}
                {!isSubmitting && <Send size={20} />}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default StepByStepContactForm
