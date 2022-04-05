import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const SocialFixedBtn = (data) =>{

    // setTimeout(function() {
    //   var noFullpageDiv = document.getElementsByClassName('no-fullpage');
      
    //   if(noFullpageDiv.length){

    //     var fixedSocialIcon = document.getElementById("FixedSocialIcon");
    //     var scrollToTopBtnDiv = document.getElementById("scrolltoTopDiv");

    //     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //       console.log('socialFixedIcon');
    //       fixedSocialIcon.classList.add("scrolled");
    //       scrollToTopBtnDiv.classList.add("show");
    //     }else{
    //       fixedSocialIcon.classList.remove("scrolled");
    //       scrollToTopBtnDiv.classList.remove("show");
    //     }

    //     window.onscroll = function() {

    //         if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //           console.log('dfgfdfgff');
    //           fixedSocialIcon.classList.add("scrolled");
    //           scrollToTopBtnDiv.classList.add("show");
    //         }else{
    //           fixedSocialIcon.classList.remove("scrolled");
    //           scrollToTopBtnDiv.classList.remove("show");
    //         }
    //     } 
    //   }
    // }, 400);
    const SocialData = [
      {
        id:1,
        socialClassName:"facebook",
        socialURL:"https://www.facebook.com/waareegroup",
        socialIconClassName:"fab fa-facebook-f"
      },
      {
        id:2,
        socialClassName:"twitter",
        socialURL:"https://twitter.com/waareegroup",
        socialIconClassName:"fab fa-twitter"
      },
      {
        id:3,
        socialClassName:"linkedin",
        socialURL:"https://linkedin.com/company/445538?trk=tyah",
        socialIconClassName:"fab fa-linkedin-in"
      },
      {
        id:4,
        socialClassName:"youtube",
        socialURL:"https://www.youtube.com/channel/UC2q8Mxn83c5MyOv2PCbLeiw",
        socialIconClassName:"fab fa-youtube"
      },
      {
        id:5,
        socialClassName:"instagram",
        socialURL:"https://www.instagram.com/accounts/login/?next=/waaree.group/",
        socialIconClassName:"fab fa-instagram"
      },
    ]
    return(
    <div className={`social-fixed-btn ${data.fixScroll}`} id="FixedSocialIcon">
      <ul className="social-icon fixed-btn">
        {
          SocialData.map((val) =>
            <li key={val.id}>
              <a href={val.socialURL} className={`social-link ${val.socialClassName}`} target="_blank">
                  <i className={val.socialIconClassName}></i>
                  <div className="hover-content">
                      <span className="bg-color">Follow @Waaree</span>
                      <span className="grey-bg">Visit Site</span>
                  </div>
              </a>
            </li>
        )}
          
      </ul>
    </div>
    )
}

export default SocialFixedBtn;