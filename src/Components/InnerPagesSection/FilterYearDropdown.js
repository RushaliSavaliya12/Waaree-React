import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useState, useEffect } from "react";

const FilterYearDropdown = (props) => {

    return (
        <>
            <div className="custom-dropdown mb-80" >
                <span className="dropdown-title">Filter By Year</span>
                <DropdownButton id="searchByYear" title="2022" renderMenuOnMount={true}>
                    <Dropdown.Item className="active">2022</Dropdown.Item>
                    <Dropdown.Item>2021</Dropdown.Item>
                    <Dropdown.Item>2020</Dropdown.Item>
                    <Dropdown.Item>2019</Dropdown.Item>
                    <Dropdown.Item>2018</Dropdown.Item>
                    <Dropdown.Item>2017</Dropdown.Item>
                </DropdownButton>
            </div>
        </>
    )
}

export default FilterYearDropdown;