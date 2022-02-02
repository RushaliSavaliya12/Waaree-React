import React from 'react';
import { Accordion, Container} from 'react-bootstrap';
import AccordionMain from './AccordionMain';


const InvestorAccordionSection = () => {

    return (
        <section className="section investor-accordion-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="investor-accordion">
                            <Accordion defaultActiveKey="0" id="investorAccordion">
                                <AccordionMain />
                            </Accordion>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="inner-sec-round small-round-shape top-left custom-round">
                <div className="green-round big reveal-fade"></div>
                <div className="yellow-round small reveal-fade"></div>
            </div>
        </section>
    )
}


export default InvestorAccordionSection;
