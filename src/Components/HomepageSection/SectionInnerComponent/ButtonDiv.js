import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const ButtonDiv = (props) =>{
    return(
        <a href={props.buttonHref} className="btn btn-primary">{props.buttonText}<i className="fa fa-chevron-right"></i></a>
    )
}

export default ButtonDiv;