import React from 'react'

//Router
import { LinkContainer } from "react-router-bootstrap";

//Boostrap Components
import { Navbar, Nav, Container, Button, ButtonGroup } from "react-bootstrap"; //installed using the console


function TopMenu() {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Scrapper Web</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/article/create">Create Article</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default TopMenu