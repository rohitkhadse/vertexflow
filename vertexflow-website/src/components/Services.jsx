function Services() {
  const services = [
    "Hydrogen Dispersion Analysis",
    "LNG Dispersion Studies",
    "Gas Dispersion Modelling",
    "Fire & Explosion Modelling",
    "Blast Overpressure Analysis",
    "Smoke Management Studies",
    "Ventilation Analysis",
    "Data Center CFD",
    "Battery Energy Storage System (BESS) CFD",
    "Process Simulation & Optimization",
  ];

  return (
    <section id="services" className="section">
      <h2>Our Expertise</h2>

      <p className="section-subtitle">
        Comprehensive CFD, Process Safety and Risk Engineering services.
      </p>

      <div className="grid">
        {services.map((service) => (
          <div className="card" key={service}>
            <h3>{service}</h3>
            <p>
              Technical engineering support to improve safety,
              performance and compliance.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;