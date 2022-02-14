import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


const ServiceListColSingle = () => {

    const ServiceListColData = {
        'Extra Generation' :
        {   
            'li1':'Module operates 10-15*C cooler for extra generation',
            'li2':'Designed for quick installation and easy O&M',
            'li3':'Can be modified for tracking',
        },
        'No Envoirment Impact' :
        {   
            'li1':'Certified for use with drinking-water',
            'li2':'Freshwater or seawater compatible',
            'li3':'Lead-free solar module available',
            'li4':'Minimum contact with water surface',
            'li5':'Abundant light and air passage for life',
            'li6':'Underwater',
            'li7':'Resistant to biofouling (algae)',
        },
        'Durable & Reliable' :
        {   
            'li1':'Stable against high winds, waves',
            'li2':'Tolerates variation in water draft',
            'li3':'Freshwater or seawater compatible',
            'li4':'Corrosion resistant metal structures',
            'li5':'PV module engineered for marine use (10 years)',
            'li6':'UV resistant floats for long-life',
            'li7':'Floats have redundant leak-tolerant features',
            'li8':'Smart tethering & anchoring solution',
        },
        'Key Differentiation' :
        {   
            'li1':'Stable against high winds, waves',
            'li2':'Tolerates variation in water draft',
            'li3':'Freshwater or seawater compatible',
            'li4':'Corrosion resistant metal structures',
            'li5':'PV module engineered for marine use (10 years)',
            'li6':'UV resistant floats for long-life',
            'li7':'Floats have redundant leak-tolerant features',
            'li8':'Smart tethering & anchoring solution',
        }
    }

    return (
        <>
            {Object.keys(ServiceListColData).map((key) => {
                return(
                    <Col md={6} className="service-list-col reveal-fade" key={key}>
                        <div className="col-inner">
                            <h4 className="service-list-title">{key}</h4>
                            <ul className="service-listing">
                                {Object.keys(ServiceListColData[key]).map((serviceListkey) => (
                                    <li key={serviceListkey}>{ServiceListColData[key][serviceListkey]}</li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                )
            })}
        </>
    )

}

export default ServiceListColSingle;