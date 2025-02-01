import'./header.css'


const Header = ()=>{


    return(
      <header className="header">
      <a href="#" className="logo">.Kanin</a>
      <i className='bx bx-menu' id="menu-icon"></i>
      <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
      </nav>
  </header>


    
    )
  }
  
  export default Header;
  