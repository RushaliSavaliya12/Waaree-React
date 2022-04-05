import React from 'react';

const SocialMediaIcon = () =>{
    return (
        <>
        <ul className="social-icon">
            <li>
                <a href="https://www.facebook.com/waareegroup" className="social-link facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
            </li>
            <li>
                <a href="https://twitter.com/waareegroup" className="social-link twitter" target="_blank"><i className="fab fa-twitter"></i></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/company/445538?trk=tyah" className="social-link linkedin" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UC2q8Mxn83c5MyOv2PCbLeiw" className="social-link youtube" target="_blank"><i className="fab fa-youtube"></i></a>
            </li>
            <li>
                <a href="https://www.instagram.com/accounts/login/?next=/waaree.group/" className="social-link instagram" target="_blank"><i className="fab fa-instagram"></i></a>
            </li>
        </ul>
        </>
    )
}

export default SocialMediaIcon;