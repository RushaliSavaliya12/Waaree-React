import React from 'react';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';


const VideoGallaryTwoCol = () => {

    const VideoGallaryFourColData = [
        {
            id: 1,
            gallaryVideoSrc: "https://www.youtube.com/embed/KVPUq-K7pEg",
            gallaryImageSrc: "assets/images/success-stody-video-cover-bg-1.png",
            gallaryItemText: "Waaree Energies Corporate Video",
        },
        {
            id: 2,
            gallaryVideoSrc: "https://www.youtube.com/embed/6ba0gc76jRg",
            gallaryImageSrc: "assets/images/success-stody-video-cover-bg-2.png",
            gallaryItemText: "What is Hetero Junction Technology in Solar Panels?"
        },

    ]

    return (
        <>
            <div className="video-gallary-row two-col-row">
                <LightGallery
                    speed={500}
                    plugins={[lgVideo]}
                    closable={true}
                >
                    {VideoGallaryFourColData.map((val) =>
                        <div className="gallary-item reveal-fade" key={val.id} data-sub-html={`<p> ${val.gallaryItemText} </p>`} data-src={val.gallaryVideoSrc} data-poster={val.gallaryImageSrc}>

                            <a href={val.gallaryImageSrc}>

                                <img alt="" src={val.gallaryImageSrc} />
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

export default VideoGallaryTwoCol;