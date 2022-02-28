import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SocialMediaIcon from '../SocialMediaIcon';
import AudioPlayerDiv from '../InnerPagesSection/AudioPlayer';

const BlogDetailCol = (props) => {

    return (
        <>
            <div className="blog-single">
                <div class="blog-inner">
                    <div className="blog-image">
                        <a href="">
                            <img src="assets/images/restaurant-case-study.jpg" />
                        </a>
                    </div>
                    <div className="blog-title-wrap">
                        <h4>
                            <a href="#">Solar tubes are a simple alternative to skylights if you want more natural light in your house, but skylights are too big, expensive, or difficult to maintain</a>
                        </h4>
                        <div className="blog-date-share-wrap">
                            <div class="blog-date">03 December 2021 at <span>Solar Panel</span></div>
                            <div className="share-btn">
                                <span>Share This</span>
                                <SocialMediaIcon />
                            </div>
                        </div>
                        <AudioPlayerDiv />
                    </div>
                    <div className="blog-detail-content">
                        <div className="content-text">
                            <p>Because of the steep decline in panel costs and the growth in the efficiency of these systems, solar plants have swiftly become one of the fastest-growing sources of renewable energy in many regions of the world. However, these rooftop solar projects are built on exposed rooftops, so they are vulnerable to lightning strikes, particularly in India's high-lightning-prone cities. A lightning arrestor will help you in such a situation!</p>
                        </div>
                        <div className="content-text">
                            <h4 className="content-section-title ">How Does a Lightning Arrestor Work?</h4>
                            <p>A lightning arrestor or surge diverter is a device that is used to safeguard the equipment at substations from waves. In other words, a lightning arrestor directs abnormally high voltage to the ground while maintaining power supply continuity. It is connected between the line and the earth, in tandem with the equipment at the substation that needs to be safeguarded.</p>
                        </div>
                        <div className="content-text">
                        <h4 className="content-section-title ">What is a Lightning Arrestor?</h4>
                            <div className="grin-check-listing">
                                <ul>
                                    <li>Lighting strokes can be minimized in terms of property damage</li>

                                    <li>The substation's outdoor equipment can be safeguarded</li>

                                    <li>Surges in the outlets can be prevented</li>

                                    <li>Interference in the electromagnetic field</li>

                                    <li>It's easy to use</li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-text">
                        <h4 className="content-section-title ">How Does a Lightning Arrestor Work?</h4>
                            <p>A lightning arrestor or surge diverter is a device that is used to safeguard the equipment at substations from waves. In other words, a lightning arrestor directs abnormally high voltage to the ground while maintaining power supply continuity. It is connected between the line and the earth, in tandem with the equipment at the substation that needs to be safeguarded.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetailCol;