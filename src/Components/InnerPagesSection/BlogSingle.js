import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SocialMediaIcon from '../SocialMediaIcon';

const BlogSingle = () => {

    const BlogSingleData = [
        {
            id: 1,
            blogImageSrc: "assets/images/franchiees-image.jpg",
            blogLink: "#",
            blogTitleText: "Solar Water Heater: The Complete Guide",
            blogDate: "03 December 2021",
            BlogdateType: "Solar Panel",
            blogContentText: "Solar tubes are a simple alternative to skylights if you want more natural light in your house, but skylights are too big, expensive, or difficult to maintain",
        },
        {
            id: 2,
            blogImageSrc: "assets/images/restaurant-case-study.jpg",
            blogLink: "#",
            blogTitleText: "What is a Solar Biscuit (Digital Solar)?",
            blogDate: "03 December 2021",
            BlogdateType: "Solar Panel",
            blogContentText: "It's only natural that, given recent advancements in solar energy technology, solar water heating would follow suit. That water, whether in a pool or your home...",
        },
        {
            id: 3,
            blogImageSrc: "assets/images/franchiees-image.jpg",
            blogLink: "#",
            blogTitleText: "Solar Water Heater: The Complete Guide",
            blogDate: "03 December 2021",
            BlogdateType: "Solar Panel",
            blogContentText: "It's only natural that, given recent advancements in solar energy technology, solar water heating would follow suit. That water, whether in a pool or your home...",
        },
        {
            id: 4,
            blogImageSrc: "assets/images/franchiees-image.jpg",
            blogLink: "#",
            blogTitleText: "What is a Solar Biscuit (Digital Solar)?",
            blogDate: "24 November 2021",
            BlogdateType: "Solar Panel",
            blogContentText: "It's only natural that, given recent advancements in solar energy technology, solar water heating would follow suit. That water, whether in a pool or your home...",
        },
        {
            id: 5,
            blogImageSrc: "assets/images/rooftop-solar.jpg",
            blogLink: "#",
            blogTitleText: "Solar Heated Tent for Soldiers - Features, Benefits & Applications",
            blogDate: "24 November 2021",
            BlogdateType: "Sun Power",
            blogContentText: "At the high altitudes where the electricity infrastructure is not developed yet, these solar heated tents are like a blessing. Solar heated tents are not widely used by soldiers now...",
        }
    ]

    return (
        <>
            {BlogSingleData.map((val) =>
                <div className="blog-single reveal-fade" key={val.id}>
                    <div class="blog-inner">
                        <div className="blog-image">
                            <a href={val.blogLink}>
                                <img src={val.blogImageSrc} />
                            </a>
                        </div>
                        <div className="blog-title-wrap">
                            <h4>
                                <a href={val.blogLink}>{val.blogTitleText}</a>
                            </h4>
                            <div className="blog-date-share-wrap">
                                <div class="blog-date">{val.blogDate} at <span>{val.BlogdateType}</span></div>
                                <div className="share-btn">
                                    <span>Share This</span>
                                    <SocialMediaIcon />
                                </div>
                            </div>
                        </div>
                        <div className="blog-detail-content">
                            <p>{val.blogContentText}</p>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default BlogSingle;