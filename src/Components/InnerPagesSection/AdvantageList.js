import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';

const AdvantageList = () => {
    const advantageListData = [
        {
            id: 1,
            listText: "60 (10x6) Polycrystalline silicon cell of 157 x 157 mm size"
        },
        {
            id: 2,
            listText: "Higher power output & lower BOS cost, Minimised micro-cracks"
        },
        {
            id: 3,
            listText: "40 mm andoized aluminium alloy: Robust Protection"
        },
        {
            id: 4,
            listText: "60 (10x6) Polycrystalline silicon cell of 157 x 157 mm size"
        },
        {
            id: 5,
            listText: "60 (10x6) Polycrystalline silicon cell of 157 x 157 mm size"
        },
        {
            id: 6,
            listText: "60 (10x6) Polycrystalline silicon cell of 157 x 157 mm size"
        }
    ]

    return (
        <>
            <div className="advantage-list-wrap">
                <ul className="no-type-list custom-two-grid">
                    {advantageListData.map((val) =>
                        <li className="reveal-fade stagger-animation">{val.listText}</li>
                    )}
                </ul>
            </div>
        </>

)

}

export default AdvantageList;