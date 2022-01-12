import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

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
    ]
    return(
      <div className="fixed-btn contact-fixed-btn">
        <ul>
          {contactbtnData.map((val) =>
            <li key={val.id}>
              <div className="fixed-btn-div"><i className={val.iconClassName}></i></div>
              <a href={val.contactURL} className="hover-content">
                {val.contactText}
              </a>
            </li>
          )}
          
        </ul>
      </div>
    )
}

export default ContactBtnFix;