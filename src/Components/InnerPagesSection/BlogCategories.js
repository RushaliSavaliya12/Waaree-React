import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SocialMediaIcon from '../SocialMediaIcon';

const BlogCategories = () => {

    const BlogCategoriesData = [
        {
            id: 1,
            blogCategroiesLink:"#",
            blogCategorieName:"Solar",
        },
        {
            id: 2,
            blogCategroiesLink:"#",
            blogCategorieName:"Lithium-ion Battery",
        },
        {
            id: 3,
            blogCategroiesLink:"#",
            blogCategorieName:"Solar Pump",
        },
        {
            id: 4,
            blogCategroiesLink:"#",
            blogCategorieName:"Solar",
        }
    ]

    return (
        <>
            <div className="blog-categories-wrapper">
                <h5>Categories</h5>
                <ul>
                    {BlogCategoriesData.map((val) =>
                        <li>
                            <a href={val.blogCategroiesLink}>{val.blogCategorieName}</a>
                        </li>
                    )}
                </ul>
            </div>
        </>

    )
}

export default BlogCategories;