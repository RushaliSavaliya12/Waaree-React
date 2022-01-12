import React from 'react';

const SectionTitle = (props) =>{

    return <h2 className={`section-title reveal-fade ${props.titleTheme}`}>{props.sectionTitle}</h2>
    
}

export default SectionTitle;