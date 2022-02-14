import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';


const ImageGallaryFourCol = () => {

    const ImageGallaryFourColData = [
        {
            id: 1,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-1.jpg",
            gallaryItemText: "NTPC, Kawas-1000 Kwp",
        },
        {
            id: 2,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-2.jpg",
            gallaryItemText: "NLC- 220 Kw"
        },
        {
            id: 3,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-3.jpg",
            gallaryItemText: "NTPC, Kawas-1000 Kwp"
        },
        {
            id: 4,
            gallaryImageSrc: "assets/images/gallary-item/gallary-item-4.jpg",
            gallaryItemText: "NLC- 220 Kw"
        },

    ]

    return (
        <>
            <div className="image-gallary-row four-col-row">
                <LightGallery
                    speed={500}>
                    {ImageGallaryFourColData.map((val) =>
                        <div className="gallary-item reveal-fade" key={val.id} data-src={val.gallaryImageSrc} data-sub-html={`<p> ${val.gallaryItemText} </p>`}>
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

export default ImageGallaryFourCol;