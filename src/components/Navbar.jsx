import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#profiles">Public Profiles</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
