import React from 'react';
import logo from './logo.svg';
import './App.css';
import imageInSrc from "./imageInSrc.jpg" ;
import './style.css'
function App() {
  return (
    <div className="App">
    <div style={{border:'solid 1px black',maxWidth:'100vw'}} >  
 
 <h1 className="title red" >Clubistes Mahares</h1>  

     <br/>  

          <img src={imageInSrc} style={{width:'400px',height:'400px'}} /> <br/> 

          <img src="/imageInPublic.jpg" style={{width:'400px',height:'400px'}} />  

</div>  

<video width="320" height="240" controls>  

   <source src="myVideo.mp4" type="video/mp4"/> 

</video> 
    </div>
  );
}

export default App;
