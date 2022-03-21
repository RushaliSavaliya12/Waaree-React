import React from 'react';
import { useState, useEffect } from "react";
import CounterAnimation from '../CounterAnimation';

const EnergyCounterRow = () => {

    useEffect(() => {
        CounterAnimation();
    });

    const EnergyCounterRowData = [
        {
            id: 1,
            counterNumber: "54.3",
            counterText: "kg coal",
            subText: "",
            counterSubText: "from being burned",
        },
        {
            id: 2,
            counterNumber: "294",
            counterText: "litres",
            subText: "",
            counterSubText: "of water consumption",
        },
        {
            id: 3,
            counterNumber: "82",
            counterText: "kg of CO",
            subText: "2",
            counterSubText: "being released into the atmosphere",
        },

    ]

    return (
        <>
            {EnergyCounterRowData.map((val) =>
                <div className="energy-counter-single reveal-fade stagger-animation">
                    <div className="counter-inner">
                        <h4 className="counter-title">
                            <span className="coun-anim">{val.counterNumber}</span> <span>{val.counterText}<sub>{val.subText}</sub></span>
                        </h4>
                        <span>{val.counterSubText}</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default EnergyCounterRow;