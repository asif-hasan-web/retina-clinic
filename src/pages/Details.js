import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const Details = () => {
    const {key}=useParams();
    const {services}=useAuth();
    const findingService = services.find(service=> service.key === key )
    return (
        <div className="text-center my-3">
           <Container>
           <Card className='py-5'>
                <Row>
                    <Col md={6}>
                        <Card.Img variant="top" className="img-fluid" style={
                        {height: '501px',
                        width: '701px',
                        margin: 'auto'}} 
                        src={findingService?.img} />
                        
                    </Col>
                    <Col md={6}>
                    <Card.Body >
                        <Card.Text  className="my-5">
                            <h1>{findingService?.name}</h1>
                            <br /> <br />
                            <p>{findingService?.about}</p>
                        </Card.Text>
                        </Card.Body></Col>
                </Row>
            </Card>
           </Container>
        </div>
    )
}

export default Details
