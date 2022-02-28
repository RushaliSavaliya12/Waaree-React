import React from 'react';
import PopularPosts from './PopularPosts';
import BlogCategories from './BlogCategories';

const BlogRightCol = () => {

    return (
        <>
            <div className="blog-right-inner">
                <div className="blog-search">
                    <input type="search" id="blogSearch" name="blog Search" placeholder="Search in Blog" />
                    <div className="search-btn">
                        <input type="submit" value="" id="searchBtn" />
                    </div>
                </div>
                <PopularPosts />
                <BlogCategories />
            </div>
        </>

    )
}

export default BlogRightCol;