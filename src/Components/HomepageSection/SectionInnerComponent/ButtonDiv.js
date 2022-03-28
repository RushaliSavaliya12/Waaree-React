import React from 'react';
import { Outlet, Link } from "react-router-dom";

const ButtonDiv = (props) =>{
    return(
        <Link to={props.buttonHref} className="btn btn-primary">{props.buttonText}<i className="fa fa-chevron-right"></i></Link>
    )
}

export default ButtonDiv;