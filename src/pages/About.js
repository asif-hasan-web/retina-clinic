import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Fade from 'react-reveal/Fade';
import Zoom from "react-reveal/Zoom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const mystyle = {
        backgroundColor: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,120,0.8939950980392157) 0%, rgba(53,73,121,0.8883928571428571) 14%, rgba(5,97,179,0.8799894957983193) 32%, rgba(59,81,85,0.8183648459383753) 74%, rgba(59,68,124,0.7651435574229692) 100%)',
        padding: "50px 0"
      };
      const blueColor={
          color:'rgb(33, 44, 109)'
      }
      const darknevy={
          color:'rgb(12, 29, 89)'
      }
      const imgsize={
          width:'100%',
          borderRadius: '9px'
      }
  return (
    <div>
            <div style={mystyle}>
                <Bounce left cascade>
                        <h1 className="text-center text-white  mb-1">About</h1>
                </Bounce>
                <Bounce right cascade>
                    <h6 className="text-center text-white py-1 mb-4" >
                            Home / About
                    </h6>
                </Bounce>
             </div>
      <Container>
        <Row className="py-5">
          <Col sm={12} md={12} lg={6} >
            <Bounce bottom>
              <h1 className="text-dark text-center pt-5 pb-3 " style={blueColor}> <FontAwesomeIcon icon={faEye} /></h1>
              <h3 className=" text-center" style={blueColor} >
              Eyes are Prettiest, Just Adorn them
              </h3>
              <p className="text-center fw-bold py-5" style={darknevy} >
              Contact lenses are very safe. Still, wearing contact lenses can damage your eyes if you wear them too long, fail to clean them properly or do not replace them as directed by your eye doctor. Contact lenses are considered medical devices and are regulated by the U.S. Food and Drug Administration (FDA).
              </p>
            </Bounce>
          </Col>
          <Col  sm={12} md={12} lg={6}  className="py-3">
              <div>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <Bounce top>
                        <img style={imgsize} src='https://www.perfectlens.ca/img/articles/woman-putting-in-coloured-contacts.jpg' alt="" />
                        </Bounce>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Bounce right>
                        <img style={imgsize} src='https://thumbs.dreamstime.com/b/abstract-eyesight-image-attractive-european-man-portrait-digital-eye-lens-letters-dark-background-optical-surgery-231243875.jpg' alt="" />
                        </Bounce>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <Bounce left>
                        <img style={imgsize} src='https://image.freepik.com/free-photo/doctor-ophthalmologist-examining-eyes-with-test-machine_7502-4153.jpg' alt="" />
                        </Bounce>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Bounce bottom>
                        <img style={imgsize} src='https://theeyepros.com/wp-content/uploads/2019/08/Best-Optometrist.jpeg' alt="" />
                        </Bounce>
                    </Col>
                </Row>
              </div>
          </Col>
        </Row>

        <Row className="my-5">
          <Col sm={12} md={6} lg={3}>
              
            <Fade left>
              <img className="rounded-circle my-4 " style={{height:'150px', width:'150px', margin:'0 70px'}} src="https://dynl.mktgcdn.com/p/8gBRyWZCyK4IYbPq9gRmdp8n1n6FfJ9CRrhMO0ei8lY/1.0000/650x650.jpg" alt="" />
              <div className="text-center fw-light" style={darknevy}>
                <h4>Dr. Saba Khodadadian</h4>
                <h5>Optical Engineer</h5>
              </div>

            </Fade>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Fade left>
              <img className="rounded-circle my-4 " style={{height:'150px', width:'150px', margin:'0 70px'}} src="https://threebestrated.com/images/DrCharlesGoldOD-NewYork-NY.png" alt="" />
              <div className="text-center" style={darknevy}>
                <h4>Dr. Charles Gold</h4>
                <h5>Optometrist</h5>
              </div>

            </Fade>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Fade left>
              <img className="rounded-circle my-4 " style={{height:'150px', width:'150px', margin:'0 70px'}} src="https://threebestrated.com/images/DrRalphPaternosterOD-NewYork-NY.png" alt="" />
              <div className="text-center" style={darknevy}>
                <h4>Dr. Ralph Paternoster</h4>
                <h5>Production Manager</h5>
              </div>

            </Fade>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Fade left>
              <img className="rounded-circle my-4 " style={{height:'150px', width:'150px', margin:'0 70px'}} src="https://threebestrated.com/images/DrJacquelineWMullerMDTheDryEyeTreatmentCenter-NewYork-NY.jpeg" alt="" />
              <div className="text-center" style={darknevy}>
                <h4>Dr. Jacqueline</h4>
                <h5>Sales Executive</h5>
              </div>

            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
