import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./progressAnimation/AnimatedProgressProvider";


const RadialPieChart = () => {

    const RadialPieChartData = [
        {
            id: 1,
            percentage: "12",
            roundInnerText: "15+ Years",
        },
        {
            id: 2,
            percentage: "28",
            roundInnerText: "10 to 15 Years",
        },
        {
            id: 3,
            percentage: "60",
            roundInnerText: "Below 10 Years",
        }
    ]

    return (
        <>
            <div className="radial-chart-wrapper">

                {RadialPieChartData.map((val) =>
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={val.percentage}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                    >
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                // <CircularProgressbar
                                //     value={value}
                                //     text={`${roundedValue}%`}
                                //     styles={buildStyles({ pathTransition: "none" })}
                                // />
                                <CircularProgressbarWithChildren value={value} className="radial-chart-single">
                                    <div className="progressbar-inner">
                                        <span className="progressbar-text">{val.roundInnerText}</span>
                                        <h4>{`${roundedValue}%`}</h4>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                )}

            </div>


        </>

    )
}



export default RadialPieChart