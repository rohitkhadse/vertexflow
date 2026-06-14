function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <h2>Case Studies</h2>

      <p className="section-subtitle">
        Selected engineering projects demonstrating our technical expertise.
      </p>

      <div className="services-horizontal">

        <div className="service-column">
          <h3>Hydrogen Dispersion Study</h3>
          <p>
            Evaluated hydrogen release behavior from storage facilities and
            identified flammable cloud extents.
          </p>
        </div>

        <div className="service-column">
          <h3>LNG Vapor Dispersion Analysis</h3>
          <p>
            Assessed LNG vapor cloud formation and determined hazard distances.
          </p>
        </div>

        <div className="service-column">
          <h3>Data Center Cooling Optimization</h3>
          <p>
            Improved airflow distribution and reduced thermal hot spots.
          </p>
        </div>

      </div>
    </section>
  );
}

export default CaseStudies;