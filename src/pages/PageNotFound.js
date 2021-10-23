import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Bounce from "react-reveal/Bounce";
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    const mystyle = {
        backgroundColor: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,120,0.8939950980392157) 0%, rgba(53,73,121,0.8883928571428571) 14%, rgba(5,97,179,0.8799894957983193) 32%, rgba(59,81,85,0.8183648459383753) 74%, rgba(59,68,124,0.7651435574229692) 100%)',
        padding: "50px 0"
      };
    return (
        <div>
             <div style={mystyle}>
                <Bounce left cascade>
                        <h1 className="text-center text-white  mb-1">404 Not Found</h1>
                </Bounce>
                <Bounce right cascade>
                    <h6 className="text-center text-white py-1 mb-4" >
                            Home / 404 Not Found
                    </h6>
                </Bounce>
             </div>
             <Container>
                 <Row>
                     <Col md={{ span: 6, offset: 3 }}>
                        <div className="my-5 py-5 text-center h-100">
                            <h1 className="text-secondary"> <span className="text-danger">404 ! </span> Page Not Found</h1>
                            <br />
                            <p>The page you requested does not exist. <Link to='/About'>Click</Link> here to continue details.</p>
                        </div>
                     </Col>
                 </Row>
             </Container>
        </div>
    )
}

export default PageNotFound
