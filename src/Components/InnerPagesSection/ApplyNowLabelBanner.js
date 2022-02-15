import React from 'react';

const ApplyNowLabelBanner = (props) => {
    return (
        <>
            <div className="apply-now-banner" style={{ backgroundImage: `url(${props.bgSrc})`}}>
                <div className="apply-banner-wrap">
                    <div className="icon-wrap">
                        <img src={props.applyIconSrc} alt=""/>
                    </div>
                    <h4>{props.applyBannerText}</h4>
                </div>
            </div>
        </>
    )

}


export default ApplyNowLabelBanner;