import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


const NewsSingle = () => {
    const NewsData = [
        {
            id: 1,
            newsDate: "14.July.2021",
            newsTag: "Partnership",
            newsImage: "assets/images/case-study-building.jpg",
            newsTitle: "Waaree Energy Storage System announces partnership with Zypp Electric",
            newsText: "When Hitesh Doshi started a thermal equipment trading business in Mumbai in 1989, he was simply looking to make ends meet and earn a living. Launching Mahavir Thermo Equip with a borrowed capital of Rs 5,000, Hitesh began trading temperature and pressure gauges.",
            newsLinkUrl: "#"
        },
        {
            id: 2,
            newsDate: "18.Aug.2021",
            newsTag: "Electrical",
            newsImage: "assets/images/solar-product.jpg",
            newsTitle: "WAAREE commissions 16 MW project for MAHAGENCO under Agrifeeder scheme",
            newsText: "Mr. Sridhar Pinnapureddy, Founder and CEO, CtrlS Datacenters Ltd said, The combustion of fossil fuels has led to dramatic rise in carbon dioxide emissions globally, and it is my belief that as a responsible business it is prudent to embrace clean energy. We are delighted to have partnered with WAAREE to take a major step in deployment of solar energy at our Mumbai Rated-4 Hyperscale datacenter. We chose to install the solar panels on all the four sides of the building instead of roof top solar as it provides large space for absorption of sunlight. We therefore replaced the conventional glass in our data center facility, with solar panels thereby generate higher power through clean energy and thereby reducing carbon footprint. Besides, the Waaree BIPV panels act as a thermal insulation by blocking the sun and thus also reducing the power consumption of the air conditioning system, thus saving on electricity bills considerably. He further added, We are delighted to have found a suitable partner in WAAREE, who have played a key role in supporting our innovation in deploying clean energy",
            newsLinkUrl: "#"
        },
        {
            id: 3,
            newsDate: "25.July.2021",
            newsTag: "Solar Power",
            newsImage: "assets/images/suitanable-2.jpg",
            newsTitle: "Waaree Energies commissions 2.5 MW 'group captive' solar project for Raymond",
            newsText: "Speaking on this achievement Dr. Hitesh Doshi, CMD Waaree Energies Ltd, said , We are happy to be part of such a innovative BIPV project and we are thankful to Ctrl S for not only giving us opportunity but implementing such great idea and making India’s first largest BIPV project. Waaree BIPV technology can be adapted to any building that requires a glass facade, including but not limited to skyscrapers, malls, apartments, modern homes, datacentres and many more existing Buildings, or the ones that are in design stage. The challenge of not only the space to mount Solar Panels is addressed by Waaree BIPV solutions but also the aesthetics and beauty of building is enhanced by replacing normal glass to solar panels. Waaree will continue to design and develop products to increase use of solar energy.",
            newsLinkUrl: "#"
        },
        {
            id: 4,
            newsDate: "14.July.2021",
            newsTag: "Partnership",
            newsImage: "assets/images/case-study-building.jpg",
            newsTitle: "Waaree Energy Storage System announces partnership with Zypp Electric",
            newsText: "When Hitesh Doshi started a thermal equipment trading business in Mumbai in 1989, he was simply looking to make ends meet and earn a living. Launching Mahavir Thermo Equip with a borrowed capital of Rs 5,000, Hitesh began trading temperature and pressure gauges.",
            newsLinkUrl: "#"
        },
        {
            id: 5,
            newsDate: "18.Aug.2021",
            newsTag: "Electrical",
            newsImage: "assets/images/solar-product.jpg",
            newsTitle: "WAAREE commissions 16 MW project for MAHAGENCO under Agrifeeder scheme",
            newsText: "Mr. Sridhar Pinnapureddy, Founder and CEO, CtrlS Datacenters Ltd said, The combustion of fossil fuels has led to dramatic rise in carbon dioxide emissions globally, and it is my belief that as a responsible business it is prudent to embrace clean energy. We are delighted to have partnered with WAAREE to take a major step in deployment of solar energy at our Mumbai Rated-4 Hyperscale datacenter. We chose to install the solar panels on all the four sides of the building instead of roof top solar as it provides large space for absorption of sunlight. We therefore replaced the conventional glass in our data center facility, with solar panels thereby generate higher power through clean energy and thereby reducing carbon footprint. Besides, the Waaree BIPV panels act as a thermal insulation by blocking the sun and thus also reducing the power consumption of the air conditioning system, thus saving on electricity bills considerably. He further added, We are delighted to have found a suitable partner in WAAREE, who have played a key role in supporting our innovation in deploying clean energy",
            newsLinkUrl: "#"
        },
        {
            id: 6,
            newsDate: "25.July.2021",
            newsTag: "Solar Power",
            newsImage: "assets/images/suitanable-2.jpg",
            newsTitle: "Waaree Energies commissions 2.5 MW 'group captive' solar project for Raymond",
            newsText: "Speaking on this achievement Dr. Hitesh Doshi, CMD Waaree Energies Ltd, said , We are happy to be part of such a innovative BIPV project and we are thankful to Ctrl S for not only giving us opportunity but implementing such great idea and making India’s first largest BIPV project. Waaree BIPV technology can be adapted to any building that requires a glass facade, including but not limited to skyscrapers, malls, apartments, modern homes, datacentres and many more existing Buildings, or the ones that are in design stage. The challenge of not only the space to mount Solar Panels is addressed by Waaree BIPV solutions but also the aesthetics and beauty of building is enhanced by replacing normal glass to solar panels. Waaree will continue to design and develop products to increase use of solar energy.",
            newsLinkUrl: "#"
        },
        {
            id: 7,
            newsDate: "14.July.2021",
            newsTag: "Partnership",
            newsImage: "assets/images/case-study-building.jpg",
            newsTitle: "Waaree Energy Storage System announces partnership with Zypp Electric",
            newsText: "When Hitesh Doshi started a thermal equipment trading business in Mumbai in 1989, he was simply looking to make ends meet and earn a living. Launching Mahavir Thermo Equip with a borrowed capital of Rs 5,000, Hitesh began trading temperature and pressure gauges.",
            newsLinkUrl: "#"
        },
        {
            id: 8,
            newsDate: "18.Aug.2021",
            newsTag: "Electrical",
            newsImage: "assets/images/solar-product.jpg",
            newsTitle: "WAAREE commissions 16 MW project for MAHAGENCO under Agrifeeder scheme",
            newsText: "Mr. Sridhar Pinnapureddy, Founder and CEO, CtrlS Datacenters Ltd said, The combustion of fossil fuels has led to dramatic rise in carbon dioxide emissions globally, and it is my belief that as a responsible business it is prudent to embrace clean energy. We are delighted to have partnered with WAAREE to take a major step in deployment of solar energy at our Mumbai Rated-4 Hyperscale datacenter. We chose to install the solar panels on all the four sides of the building instead of roof top solar as it provides large space for absorption of sunlight. We therefore replaced the conventional glass in our data center facility, with solar panels thereby generate higher power through clean energy and thereby reducing carbon footprint. Besides, the Waaree BIPV panels act as a thermal insulation by blocking the sun and thus also reducing the power consumption of the air conditioning system, thus saving on electricity bills considerably. He further added, We are delighted to have found a suitable partner in WAAREE, who have played a key role in supporting our innovation in deploying clean energy",
            newsLinkUrl: "#"
        },
        {
            id: 9,
            newsDate: "25.July.2021",
            newsTag: "Solar Power",
            newsImage: "assets/images/suitanable-2.jpg",
            newsTitle: "Waaree Energies commissions 2.5 MW 'group captive' solar project for Raymond",
            newsText: "Speaking on this achievement Dr. Hitesh Doshi, CMD Waaree Energies Ltd, said , We are happy to be part of such a innovative BIPV project and we are thankful to Ctrl S for not only giving us opportunity but implementing such great idea and making India’s first largest BIPV project. Waaree BIPV technology can be adapted to any building that requires a glass facade, including but not limited to skyscrapers, malls, apartments, modern homes, datacentres and many more existing Buildings, or the ones that are in design stage. The challenge of not only the space to mount Solar Panels is addressed by Waaree BIPV solutions but also the aesthetics and beauty of building is enhanced by replacing normal glass to solar panels. Waaree will continue to design and develop products to increase use of solar energy.",
            newsLinkUrl: "#"
        },

    ]
    return (
        <>
            {NewsData.map((val) =>
                <div className="news-single reveal-fade">
                    <div className="news-single-wrap">
                        <Row>
                            <Col lg={4} md={5} className="news-image-col">
                                <div className="col-inner">
                                    <div className="news-info">
                                        <span className="news-date">{val.newsDate}</span>
                                        <div className="news-tag-wrap">
                                            <span className="news-tag">{val.newsTag}</span>
                                        </div>
                                        <div className="news-image">
                                            <img src={val.newsImage} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} md={7} className="news-content-col">
                                <div className="col-inner">
                                    <h4 className="news-title">
                                        <a href={val.newsLinkUrl}>{val.newsTitle}</a>
                                    </h4>
                                    <div className="content-text">
                                        <p>{val.newsText}</p>
                                    </div>
                                    <div class="read-more-link"><a href={val.newsLinkUrl} class="read-more">Read More<i class="fa fa-chevron-right"></i></a></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            )}
        </>

    )
}

export default NewsSingle;