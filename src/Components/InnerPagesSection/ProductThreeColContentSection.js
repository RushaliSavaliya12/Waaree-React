import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';

const ProductThreeColContentSection = (props) => {

    return (
        <section className="section product-type-content-section" style={{ backgroundColor: "#f0faf2" }}>
            <div className="section-inner">
                <div className="section-wrap">
                    <Container>
                        <SectionTitle sectionTitle={props.productsectionTitle} titleTheme="dark-title" />
                        <div className="product-type-content-wrap">
                            <Row className="product-type-content-row p-inner-50">
                                {props.productContentCol}
                            </Row>
                            <div className="btn-wrap load-more text-center">
                                <ButtonDiv buttonHref="#" buttonText="Load More" />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )

}

export default ProductThreeColContentSection;