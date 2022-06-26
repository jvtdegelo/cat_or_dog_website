import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const TopNavBar = () => {
	return (
		<Navbar bg = "dark" variant = "dark">
			<Container>
				<Navbar.Brand href = "#home">
					Cat or dog
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