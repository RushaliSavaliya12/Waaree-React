import React from 'react';
import Pagination from 'react-bootstrap/Pagination'

const BlogPagination = (props) => {

    return (
        <>
            <Pagination>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{19}</Pagination.Item>
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Last className="last"/>
            </Pagination>
        </>
    )
}

export default BlogPagination;