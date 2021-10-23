// import { Button } from 'bootstrap'
import React from 'react'
import { Card,Button, Col,NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Pulse from 'react-reveal/Pulse';


const Service = ({service}) => {
    const {key,name,img,about}=service||{};
    return (
        <Col md={4}>
            <Pulse>
                        <Card style={{ height: '560px',marginBottom:'20px' }}>
                            <Card.Img variant="top" className="img-fluid text-dark" src={img} />
                            <Card.Body className="text-dark">
                            
                            <Card.Title >{name}</Card.Title>
                            <Card.Text>{about}</Card.Text>
                            

                            <Link to={`/service/${key}`}>
                                <Button variant="primary" className="text-white " style={{
                                 bottom: '0',
                                position:'absolute',
                                marginBottom:'20px'
                                }}
                                >Read More</Button>
                            </Link>
                            </Card.Body>
                        </Card>
            </Pulse>
         </Col>
                        
    )
}

export default Service
