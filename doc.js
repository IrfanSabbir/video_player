import React from 'react';
import logo from './epic.png';
import './App.css';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import YouTube from 'react-youtube';

import ReactPlayer from 'react-player'
import video from './asset/Mongoo Crash course.mp4'
function App() {
  const onReady=(event)=>{
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 2,
    },
  };
  return (
    <div className="App">
     
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{width:"50%" ,display:"flex" , justifyContent:"center" , margin:'5px'}}>
        <Player >
             <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
        </div>
        <a
          className="App-link"
          href="https://www.facebook.com/epicgroundlol/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know Epic Ground
        </a>

        <YouTube videoId="GDxFqin2rlc" opts={opts} onReady={(e)=>onReady(e)} /><br/>
        <hr/>

        <div style={{width:"100%" ,display:"flex" , justifyContent:"center" , margin:'5px'}}>
             <ReactPlayer 
             controls
             url={video}
             config={{ file: { 
              attributes: {
                controlsList: 'nodownload'
              }
            }}}
             />
        </div>
        <hr/>

        <div style={{width:"100%" ,display:"flex" , justifyContent:"center" , margin:'5px'}}>
             <ReactPlayer controls url='https://www.facebook.com/epicgroundlol/videos/273567583976656/'/>
        </div>
        <div style={{width:"100%" ,display:"flex" , justifyContent:"center" , margin:'5px'}}>
             <ReactPlayer controls url='https://www.facebook.com/epicgroundlol/videos/905049369997947/'/>
        </div>
         <div style={{width:"100%" ,display:"flex" , justifyContent:"center", margin:'5px'}}>
             <ReactPlayer controls url='https://www.youtube.com/watch?v=nsZYU0ZrwNM&feature=share&fbclid=IwAR3FdjpkJfehUFR4OYFefrSm_eNajCQm0i5hIRDtiWRzX6B1zvJq_Kow-Ns'/>
        </div>
        <div style={{width:"100%" ,display:"flex" , justifyContent:"center" , margin:'5px'}}>
             <ReactPlayer controls url='https://www.facebook.com/somoynews.tv/videos/4229488420426585/'/>
        </div><br/><br/><br/><br/>
    </div>
  );
}



export default App;
