import './portfolio.css'



export default function Portfolio (){
    
  

    return(
      
      
      <>
  {/*
  Please note: this code is in no way ready to be used as is in production on your website. It will need to be adapted to be cross browser compliant & accessible. I just wanted to share how one might go about this effect with CSS & JS and no other dependencies
*/}
  <div className="container">
    <div className="card-column column-0">
      <div className="card card-color-0">
        <div className="border" />
        
        <h1>Hey now, you're an allstar</h1>
      </div>
      <div className="card card-color-2">
        <div className="border" />
       
        <h1>Hey now, you're a rock star</h1>
      </div>
    </div>
    <div className="card-column column-1">
      <div className="card card-color-1">
        <div className="border" />
        
        <h1>Get your game on, go play</h1>
      </div>
      <div className="card card-color-3">
        <div className="border" />
        
        <h1>Get the show on, get paid</h1>
      </div>
    </div>
  </div>
  <div id="cover" className="cover" />
  <div id="open-content" className="open-content">
    <a href="#" id="close-content" className="close-content">
      <span className="x-1" />
      <span className="x-2" />
    </a>
    <img id="open-content-image" src="" />
    <div className="text" id="open-content-text"></div>
  </div>
</>


      
    )
}