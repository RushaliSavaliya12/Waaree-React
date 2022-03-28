import React from 'react';

const ProductFeaturedLeftList = () => {

    const featureLeftListData = [
        {
            id: 1,
            iconSrc: "assets/images/solar-plate-icon.png",
            featureText: "Superior Module Effeciency as per International Benchmarks",
        },
        {
            id: 2,
            iconSrc: "assets/images/solar-plate-rotate-icon.png",
            featureText: "Glass with anti-reflective coating improve light transmission",
        },
        {
            id: 3,
            iconSrc: "assets/images/1500-vt-icon.png",
            featureText: "1500 VDC system voltage for lower BoS cost",
        },

    ]

    return (

        <>
            {featureLeftListData.map((val) =>
                <div className="feature-single reveal-fade">
                    <div className="icon-wrap">
                        <img src={val.iconSrc} alt="" />
                    </div>
                    <span className="feature-text">{val.featureText}</span>
                    <span className="icon-line"></span>
                </div>
            )}
        </>

    )
}

const ProductFeatureRightList = () => {

    const featureRightListData = [
        {
            id: 1,
            iconSrc: "assets/images/security-icon.png",
            featureText: "Superior Module Effeciency as per International Benchmarks",
        },
        {
            id: 2,
            iconSrc: "assets/images/PID-icon.png",
            featureText: "Glass with anti-reflective coating improve light transmission",
        },
        {
            id: 3,
            iconSrc: "assets/images/wind-snow-icon.png",
            featureText: "1500 VDC system voltage for lower BoS cost",
        },

    ]

    return (
        <>
        {
            featureRightListData.map((val) =>
                <div className="feature-single reveal-fade">
                    <div className="icon-wrap">
                        <img src={val.iconSrc} alt="" />
                    </div>
                    <span className="feature-text">{val.featureText}</span>
                    <span className="icon-line"></span>
                </div>
            )
        }
        </>
    )

}

export {ProductFeaturedLeftList, ProductFeatureRightList};