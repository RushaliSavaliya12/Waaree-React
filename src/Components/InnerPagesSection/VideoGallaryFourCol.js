import React from 'react';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';


const VideoGallaryFourCol = () => {

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

    return (
        <>
            <div className="video-gallary-row four-col-row">
                <LightGallery
                    speed={500}
                    closable={true}
                    plugins={[lgVideo]}
                >
                    {VideoGallaryFourColData.map((val) =>
                        <div className="gallary-item reveal-fade" key={val.id} data-sub-html={`<p> ${val.gallaryItemText} </p>`} data-src={val.gallaryVideoSrc} data-poster={val.gallaryImageSrc}>

                            <a href={val.gallaryImageSrc}>

                                <img alt="" src={val.gallaryImageSrc} />
                                <div className="gallary-text">
                                    <p>{val.gallaryItemText}</p>
                                </div>
                            </a>

                        </div>
                    )}
                </LightGallery>
                <div className="btn-wrap text-center">
                    <ButtonDiv buttonHref="" buttonText="Load More" />
                </div>

            </div>
        </>
    )
}

export default VideoGallaryFourCol;