import React from 'react';
import '../styles.css'; 
import logo from '../imgvid/logo.jpg';
import who from '../imgvid/who.jpg'; 
import down from '../imgvid/down.webp'; 
import pay from '../imgvid/pay.webp'; 
import appVideo from '../imgvid/app.mp4';
import past from '../imgvid/past.mp4';
import present from '../imgvid/present.mp4';
import mission from '../imgvid/mission.mp4';
import vision from '../imgvid/vision.mp4';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const AboutPage = () =>{
  return (
    <div>
      <Navbar/>

      <div className="hero3">
        <h2>#Know Us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="sec1">
      <video autoPlay muted loop src={past}></video>
        <div className="text">
          <h1>Our Past...</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
        </div>
      </div>

      <div className="sec1">
        
        <div className="text">
          <h1>Who We Are Now?</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
        </div>
        <video autoPlay muted loop src={present}></video>
      </div>

      <div className="sec1">
      <video autoPlay muted loop src={mission}></video>
        <div className="text">
          <h1>Our Mission...</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
        </div>
      </div>

      <div className="sec1">
        
        <div className="text">
          <h1>Our Vision...</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
        </div>
        <video autoPlay muted loop src={vision}></video>
      </div>

      <div className="sec2">
        <h1>Download Our App</h1><br />
        <p>To avail our services and know more about us</p><br></br><br></br>
        <div className="vid">
          <video autoPlay muted loop src={appVideo}></video>
        </div>
      </div>


      <Footer/>
    </div>
  );
}

export default AboutPage;