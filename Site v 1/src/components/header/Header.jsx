import'./header.css'


const Header = ()=>{


    return(
      <header className="header">
      <a href="#" className="logo">.Kanin</a>
      <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">Me</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
      </nav>
  </header>


    
    )
  }
  
  export default Header;
  