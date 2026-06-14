function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img
          src={`${import.meta.env.BASE_URL}images/vertexflow-logo.png`}
          alt="VertexFlow Dynamics"
        />
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#industries">Industries</a>
        <a href="#case-studies">Case Studies</a>
        <a href="#resources">Resources</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;