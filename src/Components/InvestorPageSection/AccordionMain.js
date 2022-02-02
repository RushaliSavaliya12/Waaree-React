import React from 'react';
import { Accordion } from 'react-bootstrap';
import DownloadPdfCol from './DownloadPdfCol';

const AccordionMain = () => {

    const InvestorAccordionbodyData1 = () => {
        return (
            <>
                <DownloadPdfCol pdfTitle="Standalone Financials March 2019" pdfHref="assets/documents/Standalone-Financials-March-2019.pdf" />
                <DownloadPdfCol pdfTitle="Standalone Financials March 2020" pdfHref="assets/documents/Standalone-Financials-March-2020.pdf" />
                <DownloadPdfCol pdfTitle="Standalone Financials March 2021" pdfHref="assets/documents/Standalone-Financials-March-2021.pdf" />
                <DownloadPdfCol pdfTitle="WEL Consolidated Financials FY 2019-20" pdfHref="assets/documents/WEL_Consolidated_Financials_FY_2019-20.pdf" />
                <DownloadPdfCol pdfTitle="WEL Consolidated Financials March 2019" pdfHref="assets/documents/WEL_Consolidated_Financials_March_2019.pdf  " />
                <DownloadPdfCol pdfTitle="Signed WEL Consol March 21 Balance sheet" pdfHref="assets/documents/Signed_WEL_Consol_March_21_Balance_sheet.pdf" />
                <DownloadPdfCol pdfTitle="Signed Special Purpose Audited financials 31.03.2021" pdfHref="assets/documents/Signed_Special_Purpose_Audited_financials_31.03.2021.pdf" />
            </>
        )
    }
    const InvestorAccordionbodyData2 = () => {
        return (
            <>
                <DownloadPdfCol pdfTitle="Waaree Renewables Private Limited" pdfHref="assets/documents/Waaree-Renewables-Private-Limited.pdf" />
                <DownloadPdfCol pdfTitle="Waacox Energy Private Limited" pdfHref="assets/documents/Waacox-Energy-Private-Limited.pdf" />
                <DownloadPdfCol pdfTitle="Greentech Powe Private Limited" pdfHref="assets/documents/Greentech-Power-Private-Limited.pdf" />
            </>
        )
    }
    const InvestorAccordionbodyData3 = () => {
        return (
            <>
                <DownloadPdfCol pdfTitle="Material Creditors" pdfHref="assets/documents/Material-Creditors_31032021.pdf" />
            </>
        )
    }

    const AccordionSingle = (props) => {
        return (
            <>
                <Accordion.Item eventKey={props.id} key={props.id} className="reveal-fade">
                    <Accordion.Header className="h4">{props.accordionHeading}<span class="plus-icon"></span></Accordion.Header>
                    <Accordion.Body>
                        <div className="card-body">
                            <div className="accordion-boxes-row row">
                                {props.InvestorAccordionbodyData}
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </>
        )
    }


    return (
        <>
            <AccordionSingle id="1" accordionHeading="Company Financial Information" InvestorAccordionbodyData={<InvestorAccordionbodyData1/>} />
            <AccordionSingle id="2" accordionHeading="Group Company Financial Information" InvestorAccordionbodyData={<InvestorAccordionbodyData2/>} />
            <AccordionSingle id="3" accordionHeading="Material Creditors" InvestorAccordionbodyData={<InvestorAccordionbodyData3/>} />
        </>
)

}


export default AccordionMain; 