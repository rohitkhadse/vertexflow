function Industries() {
  const industries = [
    "Oil & Gas",
    "LNG",
    "Hydrogen",
    "Chemical & Petrochemical",
    "Renewable Energy",
    "Data Centers",
    "Battery Energy Storage Systems",
    "Industrial Infrastructure",
  ];

  return (
    <section id="industries" className="section light">
      <h2>Industries We Serve</h2>

      <div className="grid">
        {industries.map((industry) => (
          <div className="card" key={industry}>
            <h3>{industry}</h3>
            <p>
              Advanced engineering and safety studies for complex industrial
              facilities.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Industries;