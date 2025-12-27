import { FadeIn, HeroText } from '../components/Animations'
import { useSEO } from '../hooks/useSEO'

function Personvern() {
  useSEO({
    title: 'Personvernerklæring',
    description: 'Les vår personvernerklæring. Brynex AS tar personvern på alvor og behandler dine data i henhold til GDPR.'
  })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <HeroText>
            <h1>Personvernerklæring</h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="page-subtitle">
              Sist oppdatert: 27. desember 2025
            </p>
          </HeroText>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <FadeIn>
            <div className="legal-section">
              <h2>1. Innledning</h2>
              <p>
                Brynex AS («vi», «oss», «vår») er opptatt av å beskytte personvernet ditt. 
                Denne personvernerklæringen forklarer hvordan vi samler inn, bruker, lagrer 
                og beskytter dine personopplysninger når du bruker nettstedet vårt.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. Behandlingsansvarlig</h2>
              <p>
                Brynex AS er behandlingsansvarlig for personopplysninger som samles inn 
                via dette nettstedet. Du kan kontakte oss på:
              </p>
              <ul>
                <li>E-post: kontakt@brynex.no</li>
                <li>Nettsted: brynex.no</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>3. Hvilke opplysninger vi samler inn</h2>
              <p>Vi kan samle inn følgende typer personopplysninger:</p>
              <h3>Opplysninger du gir oss frivillig:</h3>
              <ul>
                <li>Navn og kontaktinformasjon når du fyller ut kontaktskjema</li>
                <li>E-postadresse når du sender oss en henvendelse</li>
                <li>Annen informasjon du velger å dele med oss</li>
              </ul>
              <h3>Automatisk innsamlet informasjon:</h3>
              <ul>
                <li>IP-adresse (anonymisert)</li>
                <li>Nettlesertype og -versjon</li>
                <li>Hvilke sider du besøker og når</li>
                <li>Henvisende nettsted</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>4. Hvorfor vi behandler personopplysninger</h2>
              <p>Vi bruker personopplysningene dine til følgende formål:</p>
              <ul>
                <li>Svare på henvendelser du sender via kontaktskjema</li>
                <li>Levere tjenester du har bestilt</li>
                <li>Forbedre nettstedet vårt og brukeropplevelsen</li>
                <li>Overholde lovpålagte forpliktelser</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>5. Rettslig grunnlag</h2>
              <p>Vi behandler personopplysninger basert på:</p>
              <ul>
                <li><strong>Samtykke:</strong> Når du sender inn kontaktskjema</li>
                <li><strong>Avtale:</strong> Når det er nødvendig for å levere tjenester du har bestilt</li>
                <li><strong>Berettiget interesse:</strong> For å forbedre våre tjenester og nettsted</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>6. Deling av opplysninger</h2>
              <p>
                Vi selger aldri personopplysningene dine til tredjeparter. Vi kan dele 
                opplysninger med:
              </p>
              <ul>
                <li>Tjenesteleverandører som hjelper oss med drift av nettstedet</li>
                <li>Myndigheter når vi er lovpålagt å gjøre det</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>7. Lagring og sikkerhet</h2>
              <p>
                Vi lagrer personopplysninger kun så lenge det er nødvendig for formålet 
                de ble samlet inn for. Vi har implementert tekniske og organisatoriske 
                tiltak for å beskytte opplysningene mot uautorisert tilgang, endring 
                eller sletting.
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Dine rettigheter</h2>
              <p>Du har følgende rettigheter i henhold til GDPR:</p>
              <ul>
                <li><strong>Innsyn:</strong> Du kan be om å få vite hvilke opplysninger vi har om deg</li>
                <li><strong>Retting:</strong> Du kan be om å få rettet feilaktige opplysninger</li>
                <li><strong>Sletting:</strong> Du kan be om å få slettet dine opplysninger</li>
                <li><strong>Begrensning:</strong> Du kan be om begrenset behandling</li>
                <li><strong>Dataportabilitet:</strong> Du kan be om å få utlevert dine data</li>
                <li><strong>Innsigelse:</strong> Du kan protestere mot behandling basert på berettiget interesse</li>
              </ul>
              <p>
                For å utøve dine rettigheter, kontakt oss på kontakt@brynex.no.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Informasjonskapsler (cookies)</h2>
              <p>
                Dette nettstedet bruker kun teknisk nødvendige informasjonskapsler for 
                at nettstedet skal fungere. Vi bruker ikke sporings-cookies eller 
                tredjeparts-cookies for markedsføring.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Endringer i personvernerklæringen</h2>
              <p>
                Vi kan oppdatere denne personvernerklæringen fra tid til annen. Ved 
                vesentlige endringer vil vi varsle deg via nettstedet. Vi anbefaler 
                at du regelmessig sjekker denne siden.
              </p>
            </div>

            <div className="legal-section">
              <h2>11. Klage</h2>
              <p>
                Hvis du mener at vi ikke behandler personopplysningene dine i samsvar 
                med regelverket, kan du klage til Datatilsynet: 
                <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer">
                  www.datatilsynet.no
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Personvern
