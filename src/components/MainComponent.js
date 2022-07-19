import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FileUploader from './FileUploader';
import "./MainComponent.css";
import TopNavBar from "./TopNavBar";

const MainComponent = () => {
  return (
    <Container fluid className = "main-component" id = "home">
      <TopNavBar/>
      <div className = "initial-text"> 
        <h1>
          Are you sure you sure your dog is really a dog? And what about your cat, doesn't it seem a little doggy?
        </h1> 
        Come and check it out, just upload a picture of it and we will check it for you. 
      </div>
    </Container>
  );
}

export default MainComponent;