import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Outlet, Link } from "react-router-dom";


const BoardDirectorSlider = () => {
  const BoardDirectorSliderData = [
    {
      id: 1,
      boardDirectorImage: "assets/images/hitesh-chimanlal.jpg",
      boardDirectorTitle: "Hitesh Chimanlal Doshi",
      boardDirectorPosition: "Chairman & Managing Director",
      boardDirectorLink: "/team-detail",
    },
    {
      id: 2,
      boardDirectorImage: "assets/images/hitesh-mehta.jpg",
      boardDirectorTitle: "Hitesh Pranjivan Mehta",
      boardDirectorPosition: "Whole-time Director & CFO",
      boardDirectorLink: "/team-detail",
    },
    {
      id: 3,
      boardDirectorImage: "assets/images/richa-goyal.jpg",
      boardDirectorTitle: "Richa Manoj Goyal",
      boardDirectorPosition: "Independent Director",
      boardDirectorLink: "/team-detail",
    },
    {
      id: 4,
      boardDirectorImage: "assets/images/Jayesh-D-shah.jpg",
      boardDirectorTitle: "JAYESH DHIRAJLAL SHAH",
      boardDirectorPosition: "Independent Director",
      boardDirectorLink: "/team-detail",
    },
    {
      id: 5,
      boardDirectorImage: "assets/images/R-M-Mall.jpg",
      boardDirectorTitle: "Rajendar Mohan Malla",
      boardDirectorPosition: "Independent Director",
      boardDirectorLink: "/team-detail",
    },
    {
      id: 6,
      boardDirectorImage: "assets/images/Waaree-Viren-Doshi.jpg",
      boardDirectorTitle: "Virenkumar Chimanlal Doshi",
      boardDirectorPosition: "Whole-time Director",
      boardDirectorLink: "/team-detail",
    },
    {
      id: 7,
      boardDirectorImage: "assets/images/sujit_kumar_varma.jpg",
      boardDirectorTitle: "Sujit Kumar Varma",
      boardDirectorPosition: "Independent Director",
      boardDirectorLink: "/team-detail",
    },
  ]

  var settingsBoardDirector = {
    speed: 600,
    arrows: true,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <Slider className="board-director-slider" {...settingsBoardDirector}>
      {BoardDirectorSliderData.map((val) =>
        <div className="slide-single reveal-fade" key={val.id}>
          <div className="slide-inner">
            <div className="board-member-image">
              <Link to={val.boardDirectorLink}>
                <img src={val.boardDirectorImage} alt="" />
              </Link>
            </div>
            <div className="board-member-detail">
              <h5 className="member-title">{val.boardDirectorTitle}</h5>
              <span className="member-position">{val.boardDirectorPosition}</span>
              <div className="read-more-link">
                <Link to={val.boardDirectorLink} className="read-more">View More<i className="fas fa-chevron-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Slider>
  );
}

export default BoardDirectorSlider;