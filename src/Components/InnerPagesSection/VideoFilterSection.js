import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import VideoGallaryFourCol from './VideoGallaryFourCol';


const VideoFilterSection = () => {
    return (
        <>
            <section className="section video-gallary-section video-filter-section" style={{ backgroundColor: "#f0faf2" }}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Workshops" titleTheme="dark-title" />
                            <div className="video-filter-btn">
                                <div className="filter-btn-wrap">
                                    <ul className='filter-btn-list'>
                                        <li>
                                            <a className="filter-btn btn active">All</a>
                                        </li>
                                        <li>
                                            <a className="filter-btn btn">Content</a>
                                        </li>
                                        <li>
                                            <a className="filter-btn btn">Design</a>
                                        </li>
                                        <li>
                                            <a className="filter-btn btn">Tehcnology</a>
                                        </li>
                                        <li>
                                            <a className="filter-btn btn">Waaree Prime</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="gallary-wrapper">
                                <VideoGallaryFourCol />
                            </div>
                        </div>
                    </Container>
                    <div class="section-inner-round"></div>
                </div>
                
            </section>
        </>
    )
}

export default VideoFilterSection;