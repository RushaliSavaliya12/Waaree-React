import React from 'react';
import { Container, Col, Row, ButtonGroup } from 'react-bootstrap';


const IconCounterSingle = () => {

    const IconCounterData = [
        {
            id: 1,
            counterIconSrc: "assets/images/trainee-student-icon.png",
            counterNumber: "20",
            counterTitleSub: "k+",
            CounterText: "Trainee Students",
        },
        {
            id: 2,
            counterIconSrc: "assets/images/event-workshop-icon.png",
            counterNumber: "37",
            counterTitleSub: "",
            CounterText: "Events & Workshops",
        },
        {
            id: 3,
            counterIconSrc: "assets/images/app-download-icon.png",
            counterNumber: "10",
            counterTitleSub: "k+",
            CounterText: "App Downloads",
        }
    ]

    return (
        <>
            {IconCounterData.map((val) =>

                <Col lg={4} className="counter-single" key={val.id}>
                    <div className='col-inner'>
                        <div className='icon-wrap'>
                            <img src={val.counterIconSrc} />
                        </div>
                        <div className="counter-content">
                            <h3 className="counter-title">
                                <span class="coun-anim">{val.counterNumber}</span>
                                {val.counterTitleSub}
                            </h3>
                            <span className="counter-text">{val.CounterText}</span>
                        </div>
                    </div>
                </Col>
            )}
        </>

    )
}

export default IconCounterSingle;