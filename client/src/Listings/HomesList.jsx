import React from "react";
import { Col, Row, Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import './HomeList.css';
import { FaBath, FaBed, FaSquare} from 'react-icons/fa';

function HomesList (props) {
    console.log(props.homes);
    const homes = props.homes.map(function(home) {
      return (
                <Col sm = "3" key={home._id} >
                <Card>
                <CardImg
                  alt="..."
                  src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
                  top
                ></CardImg>
                <CardBody>
                  <CardTitle>{home.price}</CardTitle>
                  <div className="homeStats">
                      <div>{home.beds} <FaBed/></div>
                  
                      <div> {home.baths} <FaBath/></div>
                      <div>{home.sq_Ft} <FaSquare/></div>
                  </div>
                  <CardText >
                  <div className="addressTxt">
                        <div> {home.address}</div>
                        <div>{home.city}, {home.state}, {home.zip_code}</div>
                        </div>
                  </CardText>
                  <button className="button--moema" >learn more</button>
                </CardBody>
              </Card>
              </Col>
            )
        })
        return (
            <div>
            <Row>
                    {homes}
            </Row>
            </div>
        );
}
    
    

export default HomesList;