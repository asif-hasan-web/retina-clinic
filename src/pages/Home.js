import React from 'react'
import { Card, Col, Container,  Row } from 'react-bootstrap'
import Doctor from "../assets/singledoctor.png";
import SectionBg from "../assets/benner-bg.jpg";
import ServiceBg from "../assets/serviceBenner.jpg";
import Zoom from 'react-reveal/Zoom';
import Shake from 'react-reveal/Shake';
import HeadShake from 'react-reveal/HeadShake';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import '../../src/App.css'
import useAuth from '../hooks/useAuth';
import Service from '../Component/Service/Service';
import "./../App.css"






const Home = () => {
    const {services}=useAuth()

    return (
       <div className='text-whtie'>
            <div style={{ 
            background: `url(${SectionBg})`, 
         backgroundSize: 'cover',
          minHeight: '100vh',
          width: '100%',
          backgroundPosition: 'center center' }}>
        <Container >
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <div style={{padding:'330px 0'}}>
                         <Zoom left cascade>
                            <h1 style={
                                {
                                    fontSize: '64px',
                                    fontWeight: '300',
                                    textTransform: 'uppercase',
                                    paddingBottom: '27px',
                            }
                            }>Best Lasik clinik to help yout vision !</h1>
                        </Zoom>
                        <Shake>
                              <p className='fw-bold'>In general, most people who have laser-assisted in situ keratomileusis (LASIK) eye surgery achieve 20/20 vision or better, which works well for most activities. But most people still eventually need glasses for driving at night or reading as they get older.</p>
                        </Shake>
                           
                          
                              <button className="btn btn-outline-dark w-25 fw-bold p-2 mt-2 " to='/contract'  >More About</button>
                    </div>
                </Col>
                <Col  md={6} sm={12}  lg={6}>
                <Fade bottom>
                    <div style={{
                         background: `url(${Doctor})`,
                         backgroundSize:'cover',
                        width: '71%',
                        minHeight: '94%',
                        right: '327px',
                        position: 'absolute'
                      }}></div>
                    </Fade>
                </Col>
            </Row>
        </Container>
        </div>
        
        {/* //wellcome message */}
        <div className='my-5 py-5'>
            <Container>
                <Row>
                    <Col md={6} sm={8}  lg={6}>
                    <Slide left>
                        <h2>Wellcome to <span className="text-success fs-1">Retina Center</span></h2>
                         <h6 className='my-3 pt-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</h6>
                    </Slide>
                         <hr />
                         <Zoom bottom>

                            <p>Eyecare Center of Retina is a leading provider of optometry services and vision care products in the Retina community. We would like to help you achieve and maintain clear vision for years to come.</p>
                            <p>Our experienced eye doctors offer comprehensive vision examinations at our Retina optometry office. We specialize in the diagnosis and treatment of a wide array of eye diseases, conditions, and problems. Advanced diagnostic technology and vision correction products are used to provide you with the most precise vision possible. We make people’s lives better everyday by preserving and restoring vision. Give yourself the gift of clear vision – schedule an appointment with us today.</p>
                         </Zoom>
                    </Col>
                    <Col md={6} sm={8}  lg={6}>
                        <Row>
                            <Col md={6}>
                                <HeadShake>

                                <img src={'https://sinceindependence-english.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/09/basic-eye-care-1.png'} className=' mb-4 welcomeImg' alt="" />
                                </HeadShake>
                            </Col>
                            <Col md={6}>
                                <HeadShake>

                                <img src={'https://blog-images.pharmeasy.in/2018/03/29075941/PE_Blog181.png'} className=' mb-4 welcomeImg' alt="" />
                                </HeadShake>
                            </Col>
                            <Col md={6}>
                                <HeadShake>

                                <img src={'https://www.aoa.org/AOA/Images/News_2021/surgical_procedures.jpg'} className=' mb-4 welcomeImg' alt="" />
                                </HeadShake>
                            </Col>
                            <Col md={6}>
                                <HeadShake>

                                <img src={'https://www.dim-tg.org/wp-content/uploads/2020/03/LCA10.jpg'} className=' mb-4 welcomeImg' alt="" />
                                </HeadShake>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

       {/* service sections */}
        <div style={{ 
            background: `url(${ServiceBg})`, 
         backgroundSize: 'cover',
          minHeight: '100vh',
          width: '100%',
          backgroundPosition: 'center' }}
          className="overlybody"
          
          >
              

                <div className="py-5  text-white">
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
                        {services.slice(0, 6)?.map((service) => (
                            <Service key={service.key} service={service} />
                        ))}
                        </Row>
                    </div>
                    </Container>
            </div>
        </div>

        {/* letest news */}
        <div className ="my-5 py-5">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={12}>
                        <div className="text-center my-5 mb-5 pt-5">
                            <Slide left>
                                <h2>Latest <span className='text-success fs-1s fw-bold'>News</span></h2>
                            </Slide>

                            <Slide right>
                                <p className="mb-0">
                                Recent Posts About Our Strore
                                </p>
                            </Slide>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={12} lg={4}>
                    <Jump>

                        <Card >
                                <Card.Img variant="top" className='newsimg' src={'https://i.pinimg.com/236x/98/8a/66/988a664dc71fa01d9d361c785101a20b--dental-implants-body-language.jpg'} />
                                <Card.Body>
                                    <Card.Title>Blepharitis Types and Causes</Card.Title>
                                    <Card.Text>
                                    A common disorder of the eye, blepharitis, is a condition in which there is visible inflammation in the eyelids.
                                    Bacteria causes irritation and the eyelids become red and itchy. Though it does not cause permanent damage to vision, blepharitis causes discomfort to patients. Women in their peri- and post-menopausal stage are more prone to the dysfunction of the meibomian glands.
                                    </Card.Text>
                                    
                                </Card.Body>
                        </Card>
                    </Jump>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                        <Jump>

                        <Card >
                                <Card.Img variant="top" className='newsimg' src={'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20170314065652/ri/673/picture/2017/3/Older_person%27s_eye_680x_-_Wallenrock_.jpg'} />
                                <Card.Body>
                                    <Card.Title>Causes of eye cancer</Card.Title>
                                    <Card.Text>
                                    There is however no direct association with these risk factors. This means that all those who have these risk factors may not develop eye cancers. Being aware of these factors, however, may help healthy lifestyle choices and avoidance of certain harmful exposures.Based on their findings, the researchers are urging clinical trials to test the drug in patients with AMD. If successful
                                    </Card.Text>
                                    
                                </Card.Body>
                        </Card>
                        </Jump>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                        <Jump>

                            <Card >
                                    <Card.Img variant="top" className='newsimg' src={'https://us.123rf.com/450wm/puhhha/puhhha1701/puhhha170100166/69164405-healthy-eyevision-beautiful-happy-woman-with-focus-on-her-eyes-closeup-of-smiling-girl-with-cheerful.jpg?ver=6'} />
                                    <Card.Body>
                                        <Card.Title>Fluoxetine and AMD</Card.Title>
                                        <Card.Text>
                                        An antidepressant best known as Prozac could offer the first treatment for the leading cause of blindness among people over 50, new research from the University of Virginia School of Medicine suggests.UVA's Bradley D. Gelfand, PhD, and collaborators have found early evidence that the drug fluoxetine may be effective against atrophic (or "dry") age-related macular degeneration, a condition that affects nearly 200 million people worldwide.
                                        </Card.Text>
                                        
                                    </Card.Body>
                            </Card>
                        </Jump>
                    </Col>
                </Row>
            </Container>
        </div>
       </div>
        
        
    )
}

export default Home
