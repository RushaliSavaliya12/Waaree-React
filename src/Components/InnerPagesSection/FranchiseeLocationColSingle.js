import React from 'react';

const FranchiseeLocationColSingle = (props) => {

    return (
        <div className="franchisee-loc-single">
            <div className="location-col-inner">
                <h5 className="location-title">{props.locationTitle}</h5>
                <div className="location-address">
                    <span>{props.locationAddress}</span>

                </div>
                <div className="location-contact-sec">
                    <ul>
                        <li>
                            <span className="icon-wrap">
                                <i className="fas fa-phone-volume"></i>
                            </span>
                            <a className="contact-info mobile-contact" href={`tel:${props.mobileNumber}`}>
                                {props.mobileNumber}
                            </a>
                        </li>
                        <li>
                            <span className="icon-wrap">
                                <i className="far fa-envelope"></i>
                            </span>
                            <a className="contact-info" href={`mailto:${props.emailId}`}>
                                {props.emailId}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default FranchiseeLocationColSingle;