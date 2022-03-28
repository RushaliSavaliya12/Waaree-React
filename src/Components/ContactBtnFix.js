import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const ContactBtnFix = () =>{
    const contactbtnData = [
      {
        id:1,
        contactURL:"tel:1800-2121-321",
        iconClassName:"fas fa-phone-volume",
        contactText:"1800-2121-321",
      },
      {
        id:2,
        contactURL:"mailto:waaree@waaree.com",
        iconClassName:"fas fa-question-circle",
        contactText:"waaree@waaree.com",
      },
      {
        id:3,
        contactURL:"/enquiry",
        iconClassName:"far fa-file-alt",
        contactText:"Enquiry",
      },
      {
        id:4,
        contactURL:"#",
        iconClassName:"fas fa-calculator",
        contactText:"Solar Calculator",
      },
    ]
    return(
      <>
      <div className="fixed-btn contact-fixed-btn">
        <ul>
          {contactbtnData.map((val) =>
            <li key={val.id}>
              <div className="fixed-btn-div"><i className={val.iconClassName}></i></div>
              <Link to={val.contactURL} className="hover-content">
                {val.contactText}
              </Link>
            </li>
          )}
          
        </ul>
      </div>
      <Outlet />
      </>
    )
}

export default ContactBtnFix;