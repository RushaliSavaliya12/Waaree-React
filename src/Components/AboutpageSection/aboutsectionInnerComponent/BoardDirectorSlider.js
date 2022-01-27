import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';


const BoardDirectorSlider = () => {
  const BoardDirectorSliderData = [
    {
      id: 1,
      boardDirectorImage: "assets/images/hitesh-chimanlal.jpg",
      boardDirectorTitle: "Hitesh Chimanlal Doshi",
      boardDirectorPosition: "Chairman & Managing Director",
      boardDirectorLink: "https://www.waaree.com/board-directors",
    },
    {
      id: 2,
      boardDirectorImage: "assets/images/hitesh-mehta.jpg",
      boardDirectorTitle: "Hitesh Pranjivan Mehta",
      boardDirectorPosition: "Whole-time Director & CFO",
      boardDirectorLink: "https://www.waaree.com/board-directors",
    },
    {
      id: 3,
      boardDirectorImage: "assets/images/richa-goyal.jpg",
      boardDirectorTitle: "Richa Manoj Goyal",
      boardDirectorPosition: "Independent Director",
      boardDirectorLink: "https://www.waaree.com/board-directors",
    },
    {
      id: 4,
      boardDirectorImage: "assets/images/Jayesh-D-shah.jpg",
      boardDirectorTitle: "JAYESH DHIRAJLAL SHAH",
      boardDirectorPosition: "Independent Director",
      boardDirectorLink: "https://www.waaree.com/board-directors",
    },
    {
      id: 5,
      boardDirectorImage: "assets/images/R-M-Mall.jpg",
      boardDirectorTitle: "Rajendar Mohan Malla",
      boardDirectorPosition: "Independent Director",
      boardDirectorLink: "https://www.waaree.com/board-directors",
    },
    {
      id: 6,
      boardDirectorImage: "assets/images/Waaree-Viren-Doshi.jpg",
      boardDirectorTitle: "Virenkumar Chimanlal Doshi",
      boardDirectorPosition: "Whole-time Director",
      boardDirectorLink: "https://www.waaree.com/board-directors",
    },
    {
      id: 7,
      boardDirectorImage: "assets/images/sujit_kumar_varma.jpg",
      boardDirectorTitle: "Sujit Kumar Varma",
      boardDirectorPosition: "Independent Director",
      boardDirectorLink: "https://www.waaree.com/board-directors",
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
              <a href={val.boardDirectorLink}>
                <img src={val.boardDirectorImage} alt="" />
              </a>
            </div>
            <div className="board-member-detail">
              <h5 className="member-title">{val.boardDirectorTitle}</h5>
              <span className="member-position">{val.boardDirectorPosition}</span>
              <div className="read-more-link">
                <a href={val.boardDirectorLink} className="read-more">View More<i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Slider>
  );
}

export default BoardDirectorSlider;