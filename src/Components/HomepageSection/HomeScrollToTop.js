import React from 'react';

const HomeScrollToTop = () =>{

    const scrollToTop = () => {
        let element = document.getElementsByClassName('inner-scrollToTop')[0];
        element.click();
    };
    return(
    <div className="scroll-top-btn home-scroll-top">
        <a href="#" onClick={() => scrollToTop()}><i className="fas fa-chevron-up"></i></a>
    </div>
    )

}

export default HomeScrollToTop;