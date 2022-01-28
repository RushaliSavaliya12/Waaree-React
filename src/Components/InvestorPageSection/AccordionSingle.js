import React from 'react';
import { Accordion } from 'react-bootstrap';
import DownloadPdfCol from './DownloadPdfCol';

const AccordionSingle = () => {

    const InvestorAccordionData = [
        {
            id: 1,
            cardHeaderId: "headingOne",
            collapseId: "collapseOne",
            accordionHeading: "Company Financial Information",
            AccordionShowClass: "show",
            ariaExpandValue:"true",
        },
        {
            id: 2,
            cardHeaderId: "headingTwo",
            collapseId: "collapseTwo",
            accordionHeading: "Group Company Financial Information",
            AccordionShowClass: "",
            ariaExpandValue:"false",
        },
        {
            id: 3,
            cardHeaderId: "headingThree",
            collapseId: "collapseThree",
            accordionHeading: "Material Creditors",
            AccordionShowClass: "",
            ariaExpandValue:"false",
        },
    ]

    return (
        <>
        {InvestorAccordionData.map((val) =>
                <Accordion.Item eventKey={val.id} key={val.id} className="reveal-fade">
                    <Accordion.Header className="h4">{val.accordionHeading}<span class="plus-icon"></span></Accordion.Header>
                    <Accordion.Body>
                        <div className="card-body">
                            <div className="accordion-boxes-row row">
                                <DownloadPdfCol pdfTitle="Standalone Financials March 2019" pdfHref="assets/documents/Standalone-Financials-March-2019.pdf"/>
                                <DownloadPdfCol pdfTitle="Standalone Financials March 2020" pdfHref="assets/documents/Standalone-Financials-March-2020.pdf"/>
                                <DownloadPdfCol pdfTitle="Standalone Financials March 2021" pdfHref="assets/documents/Standalone-Financials-March-2021.pdf"/>
                                <DownloadPdfCol pdfTitle="WEL Consolidated Financials FY 2019-20" pdfHref="assets/documents/WEL_Consolidated_Financials_FY_2019-20.pdf"/>
                                <DownloadPdfCol pdfTitle="WEL Consolidated Financials March 2019" pdfHref="assets/documents/WEL_Consolidated_Financials_March_2019.pdf  "/>
                                <DownloadPdfCol pdfTitle="Signed WEL Consol March 21 Balance sheet" pdfHref="assets/documents/Signed_WEL_Consol_March_21_Balance_sheet.pdf"/>
                                <DownloadPdfCol pdfTitle="Signed Special Purpose Audited financials 31.03.2021" pdfHref="assets/documents/Signed_Special_Purpose_Audited_financials_31.03.2021.pdf"/>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
        )}
        </>
    )

}


export default AccordionSingle; 