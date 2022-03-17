import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


const UseSolarBoxSingle = () => {

    const UseSolarBoxSingleData = [
        {
            id: 1,
            useSolarIconSrc: "assets/images/economically-lamp-icon.png",
            useSolarTitle: "Economically sensible",
            useSolarText: "There are 0 recurring costs on solar power supply.",
        },
        {
            id: 2,
            useSolarIconSrc: "assets/images/enviorement-leaf-icon.png",
            useSolarTitle: "Environmentally sustainable",
            useSolarText: "Solar power will not run-out like traditional power sources such as fossil fuels.",
        },

    ]

    return (
        <>
            {UseSolarBoxSingleData.map((val) =>
                <div className="use-solar-box reveal-fade stagger-animation">

                    <div className="icon-wrap">
                        <img src={val.useSolarIconSrc} alt="" />
                    </div>
                    <div className="use-solar-text">
                        <h4>{val.useSolarTitle}</h4>
                        <span>{val.useSolarText}</span>
                    </div>

                </div>
            )}
        </>
    )
}

export default UseSolarBoxSingle;