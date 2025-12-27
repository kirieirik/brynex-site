function LogoMarquee() {
  const logos = [
    { name: 'React', file: 'react.svg', url: 'https://react.dev' },
    { name: 'WordPress', file: 'wordpress.svg', url: 'https://wordpress.org' },
    { name: 'WooCommerce', file: 'woocommerce.svg', url: 'https://woocommerce.com' },
    { name: 'Vite', file: 'vite.svg', url: 'https://vite.dev' },
    { name: 'Tripletex', file: 'tripletex.svg', url: 'https://www.tripletex.no' },
    { name: 'SuperOffice', file: 'superoffice.svg', url: 'https://www.superoffice.com' },
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="logo-marquee-section">
      <p className="logo-marquee-title">Teknologier og verktøy vi jobber med</p>
      <div className="logo-marquee-container">
        <div className="logo-marquee-track">
          {duplicatedLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="logo-marquee-item"
              title={logo.name}
            >
              <img src={`/logos/${logo.file}`} alt={logo.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoMarquee
