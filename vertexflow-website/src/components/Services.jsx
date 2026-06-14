function Services() {
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>

      <p className="section-subtitle">
        Specialized engineering solutions across CFD, Process Safety and Risk
        Engineering.
      </p>

      <div className="services-horizontal">

        <div className="service-column">
          <h3>CFD & Simulation</h3>

          <ul>
            <li>Hydrogen Dispersion Analysis</li>
            <li>LNG Dispersion Studies</li>
            <li>Gas Dispersion Modelling</li>
            <li>Fire and Explosion Modelling</li>
            <li>Blast Overpressure Analysis</li>
            <li>Smoke Management Studies</li>
            <li>Ventilation Analysis</li>
            <li>Data Center CFD</li>
            <li>Battery Energy Storage System CFD</li>
            <li>Process Simulation & Optimization</li>
          </ul>
        </div>

        <div className="service-column">
          <h3>HAZOP & Process Safety</h3>

          <ul>
            <li>HAZOP Studies</li>
            <li>HAZID Studies</li>
            <li>What-If Analysis</li>
            <li>LOPA Studies</li>
            <li>SIL Assessment</li>
            <li>Fire & Gas Mapping</li>
          </ul>
        </div>

        <div className="service-column">
          <h3>QRA & Risk Assessment</h3>

          <ul>
            <li>Quantitative Risk Assessment (QRA)</li>
            <li>Consequence Modelling</li>
            <li>Individual & Societal Risk Assessment</li>
            <li>Occupied Building Risk Assessment</li>
            <li>Emergency Response Planning</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Services;