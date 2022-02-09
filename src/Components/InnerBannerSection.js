import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const InnerBannerSection = (props) => {
    return (
        <section className="section inner-banner-section" style={{ backgroundImage: `url(${props.bgSrc})` }}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="inner-banner-content">
                            <h1 className="h2 reveal-fade">{props.pageTitle}</h1>
                            <div className="banner-text reveal-fade">
                                {props.bannerText}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default InnerBannerSection;