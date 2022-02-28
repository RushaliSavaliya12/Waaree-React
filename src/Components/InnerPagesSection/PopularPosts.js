import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SocialMediaIcon from '../SocialMediaIcon';

const PopularPosts = () => {

    const BlogRightCol = [
        {
            id: 1,
            postImage: "assets/images/product-slide-1.jpg",
            postLink: "#",
            postTitle: "Solar Tubes - Everything you need to...",
            postDate: "06 December 2021 ",
        },
        {
            id: 2,
            postImage: "assets/images/product-slide-2.jpg",
            postLink: "#",
            postTitle: "How Many Solar Panels are needed...",
            postDate: "15 November 2021 ",
        },
        {
            id: 3,
            postImage: "assets/images/product-slide-3.jpg",
            postLink: "#",
            postTitle: "Benefits of Solar Panels for Schools...",
            postDate: "07 September 2021",
        },
        {
            id: 4,
            postImage: "assets/images/R-M-Mall.jpg",
            postLink: "#",
            postTitle: "Bifacial solar panels: Are they worth it?",
            postDate: "30 August 2021 ",
        }
    ]

    return (
        <>
            <div className="popular-post-wrapper">
                <h5>Popular Posts</h5>
                {BlogRightCol.map((val) =>
                    <div className="populer-post-single">
                        <div className="post-image">
                            <a href={val.postLink}>
                                <img src={val.postImage} alt="" />
                            </a>
                        </div>
                        <div className="post-content">
                            <h6 className="post-name"><a href={val.postLink}>{val.postTitle}</a></h6>
                            <span className="post-date">{val.postDate}</span>
                        </div>
                    </div>
                )}
            </div>
        </>

    )
}

export default PopularPosts;