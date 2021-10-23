import React from 'react'
import useAuth from '../hooks/useAuth'
import ServiceBg from "../assets/serviceBenner.jpg";
import Slide from 'react-reveal/Slide';
import { Container, Row } from 'react-bootstrap';
import Service from '../Component/Service/Service';


const Services = () => {
    const {services}=useAuth()
    return (
        <div>
            <div style={{ 
            background: `url(${ServiceBg})`, 
         backgroundSize: 'cover',
          minHeight: '100vh',
          width: '100%',
          backgroundPosition: 'center' }}
          className="overlybody"
          
          >
              

                <div className="py-5   text-white">
                    <div className="text-center pt-5">
                        <Slide left>
                            <h1>OUR <span className='text-success'>OPTOMETRY SERVICES</span></h1>
                        </Slide>

                        <Slide right>
                            <p className="mb-0">
                            Our Services To Give Best Care For Your Eyes.
                            </p>
                        </Slide>
                    </div>

                    <Container>
                        <div className="my-3 d-flex flex-wrap justify-content-between">
                            <Row>
                                    {services.map((service) => (
                                        <Service key={service.key} service={service} />
                                    ))}
                            </Row>
                        </div>
                    </Container>
            </div>
        </div>
        </div>
    )
}

export default Services
