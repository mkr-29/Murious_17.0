import React from "react";
import './footer_style.css';
import facebook_icon from "./assets/icons8-facebook-circled.jpg"
import insta from './assets/insta2.png'
import twitter from './assets/twitter2.png';
import logotmp from './assets/logotmp.png';
import logojyc from './assets/logojyc.png';

 function Footer() {
  var curr_year = new Date().getFullYear();
  return (
    <div className="Footer_for_murious">
 

      <img src={logojyc} style={{height :'75px',width : '125px', float:"left",position:"relative",bottom:"14px" ,marginTop:"20px",marginLeft:"30px"}}/>
      <h3 style={{marginBottom: '10px' ,position:"relative",right:"100px",fontFamily:"sans-serif",marginTop:"20px", fontWeight:"bolder",fontSize:"30px"}}>Contact Us</h3>
      <img src={logotmp} style={{height :'65px',width : '150px',float:"right",position:"relative",bottom:"39px",marginRight:"50px"}}/>


      

      <div style={{textAlign:"center",fontFamily:"sans-serif",marginBottom:"10px"}}>
      <p>Jaypee university of information technology</p>
          <p>Waknaghat, H.P.- 173224,India</p>     
          <p style={{position:"relative",left:"70px"}}>Phone: +91-9418838790 </p>
          <p style={{position:"relative",right:"25px"}}>Email: anthwalingamaa@gmail.com</p></div>


          <div style={{marginBottom:"30px",position:"relative",right:"20px"}}>
            <img style={{height:"22px",width:"22px",marginRight:"10px"}} src={twitter} alt="" />
            <img style={{height:"22px",width:"22px",marginRight:"10px"}} src={insta} alt="" />
            <img style={{height:"22px",width:"22px",marginRight:"10px"}} src={facebook_icon} alt="" />
          </div>
      

      <div style={{position:"relative",right:"19px",marginBottom:"-35px"}} >
           <p>Copyright © Murious JUIT. All Rights Reserved {curr_year}</p>
        </div>
        
        </div>

  )
 }
export default Footer;