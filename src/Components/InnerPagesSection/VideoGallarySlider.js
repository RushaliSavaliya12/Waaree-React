import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';



const VideoGallarySlider = () => {

  const VideoGallaryFourColData = [
    {
      id: 1,
      gallaryVideoSrc: "https://www.youtube.com/embed/KVPUq-K7pEg",
      gallaryImageSrc: "assets/images/gallary-item/gallary-item-1.jpg",
      gallaryItemText: "Vivamus pellentesque",
      gallaryItemPosition: "Founder @Group Of Compines",
      gradiantTag: "Creators",
    },
    {
      id: 2,
      gallaryVideoSrc: "https://www.youtube.com/embed/6ba0gc76jRg",
      gallaryImageSrc: "assets/images/gallary-item/gallary-item-2.jpg",
      gallaryItemText: "Etiam vel",
      gallaryItemPosition: "Personal Banking Pro",
      gradiantTag: "Finance",
    },
    {
      id: 3,
      gallaryVideoSrc: "https://www.youtube.com/embed/_8Pwc5uBbGE",
      gallaryImageSrc: "assets/images/gallary-item/gallary-item-3.jpg",
      gallaryItemText: "Orci varius",
      gallaryItemPosition: "Founder of @TMagnis dis",
      gradiantTag: "Banking",
    },
    {
      id: 4,
      gallaryVideoSrc: "https://www.youtube.com/embed/AJrTFrhrl_A",
      gallaryImageSrc: "assets/images/gallary-item/gallary-item-4.jpg",
      gallaryItemText: "Utsit Amet",
      gallaryItemPosition: "CEO @Nam ut tempor",
      gradiantTag: "Finance",
    },
    {
      id: 5,
      gallaryVideoSrc: "https://www.youtube.com/embed/eFgH8hDHng8",
      gallaryImageSrc: "assets/images/gallary-item/gallary-item-4.jpg",
      gallaryItemText: "Utsit Amet",
      gallaryItemPosition: "CEO @Nam ut tempor",
      gradiantTag: "Finance",
    },

  ]

  var settingsVideoSlider = {
    speed: 600,
    arrows: true,
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 1199,
          settings: {
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 2,
          }
      },
    ]
  };

  return (
    <div className="video-gallary-slider-wrapper">

      <Slider className="video-gallary-slider" {...settingsVideoSlider}>
        {VideoGallaryFourColData.map((val) =>
          <LightGallery
            speed={500}
            plugins={[lgVideo]}>
            <div className="gallary-item" key={val.id} data-sub-html={`<p> ${val.gallaryItemText} </p>`} data-src={val.gallaryVideoSrc} data-poster={val.gallaryImageSrc}>
              <a href={val.gallaryImageSrc}>
                <img alt="" src={val.gallaryImageSrc} />
                <div className="gallary-text-wrap">
                  <div className="gallary-title-text">
                    <p>{val.gallaryItemText}</p>
                  </div>
                  <span>{val.gallaryItemPosition}</span>
                  <span className="gradiant-tag">{val.gradiantTag}</span>
                </div>

              </a>
            </div>
          </LightGallery>
        )}
      </Slider>

    </div>

  );
}


export default VideoGallarySlider;