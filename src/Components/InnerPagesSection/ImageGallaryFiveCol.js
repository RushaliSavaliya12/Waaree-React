import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';


const ImageGallaryFiveCol = () => {

    const ImageGallaryItemData = [
        {
            id: 1,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-1.jpg",
            gallaryItemText: "It doesn’t matter who interesting your content is",
        },
        {
            id: 2,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-2.jpg",
            gallaryItemText: "Store and/or access information on a device. Personalised ads."
        },
        {
            id: 3,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-3.jpg",
            gallaryItemText: "We and our partners use cookies to store and access personal"
        },
        {
            id: 4,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-4.jpg",
            gallaryItemText: "Dynamic Mechanical Load Test"
        },
        {
            id: 5,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-5.jpg",
            gallaryItemText: "Personalised content. Ad and content measurement, audience"
        },
        {
            id: 6,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-6.jpg",
            gallaryItemText: "clicking the link to your cookie settings in our Cookie Policy. We work in coordination"
        },
        {
            id: 7,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-7.jpg",
            gallaryItemText: "with an industry framework, signaling your preferences globally for all participating"
        },
        {
            id: 8,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-8.jpg",
            gallaryItemText: "analyzing site traffic. You may find out more about the purposes for which"
        },
        {
            id: 9,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-9.jpg",
            gallaryItemText: "We and our partners use cookies to store and access personal"
        },

    ]
    const GallryTextItem = (props) => {
        return (
            <div className="first-item gallry-text-item green-bg reveal-fade">
                <div className="gallary-text-inner">
                    <h4 className="gallary-title">{props.gallryTextTitle}</h4>
                    <div className="content-text">
                        <p>{props.gallryItemContent}</p>
                    </div>
                </div>
            </div>
        )
    }

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <>
            <div className="image-gallary-row">
                <LightGallery
                    onInit={onInit}
                    speed={500}>
                    <GallryTextItem gallryTextTitle="India's First" gallryItemContent="company to have in-house facility"/>
                    {ImageGallaryItemData.map((val) =>
                        <div className="gallary-item reveal-fade" key={val.id} data-src={val.gallaryImageSrc} data-sub-html={`<p> ${val.gallaryItemText} </p>`}>
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

export default ImageGallaryFiveCol;