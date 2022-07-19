import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./TopNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons'


const TopNavBar = () => {
	return (
		<Navbar>
			<Container>
				<Navbar.Brand href = "#home">
					<FontAwesomeIcon 
						icon={faCat} 
						size="2x"
						margin="5px"
						className="fa-fw"
					/>
					<FontAwesomeIcon 
						icon={faDog} 
						size="2x"
						className="fa-flip-horizontal fa-fw"
						margin="5px"
					/>

				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#dataPolicy">Data Policy</Nav.Link>
					<Nav.Link href="#thisProject">This Project</Nav.Link>
					<Nav.Link href="#aboutMe">About me</Nav.Link>
				</Nav>
			</Container>
			
		</Navbar>
	);
}


export default TopNavBar;