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
      gallaryItemText: "Waaree Energies Corporate Video",
    },
    {
      id: 2,
      gallaryVideoSrc: "https://www.youtube.com/embed/6ba0gc76jRg",
      gallaryImageSrc: "assets/images/gallary-item/gallary-item-2.jpg",
      gallaryItemText: "What is Hetero Junction Technology in Solar Panels?"
    },
    {
      id: 3,
      gallaryVideoSrc: "https://www.youtube.com/embed/_8Pwc5uBbGE",
      gallaryImageSrc: "assets/images/gallary-item/gallary-item-3.jpg",
      gallaryItemText: "What is advantage Of Mbb Modules (Multi busbar Module)"
    },
    {
      id: 4,
      gallaryVideoSrc: "https://www.youtube.com/embed/AJrTFrhrl_A",
      gallaryImageSrc: "assets/images/gallary-item/gallary-item-4.jpg",
      gallaryItemText: "Mr. Hitesh Doshi- Q & A InterSolar Mumbai 2013"
    },
    {
      id: 5,
      gallaryVideoSrc: "https://www.youtube.com/embed/eFgH8hDHng8",
      gallaryImageSrc: "assets/images/gallary-item/gallary-item-4.jpg",
      gallaryItemText: "महानगर न्यूज - वारी सोलरच्या दर्ज"
    },

  ]

  var settingsVideoSlider = {
    speed: 600,
    arrows: true,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="video-gallary-row four-col-row">
      <LightGallery
        speed={500}
        plugins={[lgVideo]}>
        <Slider className="video-gallary-slider" {...settingsVideoSlider}>
          {VideoGallaryFourColData.map((val) =>
            <div className="gallary-item" key={val.id} data-sub-html={`<p> ${val.gallaryItemText} </p>`} data-src={val.gallaryVideoSrc} data-poster={val.gallaryImageSrc}>
              <a href={val.gallaryImageSrc}>
                <img alt="" src={val.gallaryImageSrc} />
                <div className="gallary-text">
                  <p>{val.gallaryItemText}</p>
                </div>
              </a>
            </div>
          )}
        </Slider>
      </LightGallery>
    </div>

      );
  }


      export default VideoGallarySlider;