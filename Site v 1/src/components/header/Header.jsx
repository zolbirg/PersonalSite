import classes from './header.module.css'


const Header = ()=>{


    return(
      <header className={classes.header}>
      <a href="#home" className={classes.logo}>.Kanin</a>
      <nav className={classes.navbar}>
          <a href="#home" className={classes.active}>Home</a>
          <a href="#about">Me</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
      </nav>
  </header>


    
    )
  }
  
  export default Header;
  