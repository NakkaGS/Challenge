import React from 'react'

//Boostrap Components
import { Navbar, Nav, Container } from "react-bootstrap"; //installed using the console

//Components
import SearchBox from "../components/SearchBox";


function TopMenu() {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Scrapper Web</Navbar.Brand>
          <SearchBox/>
          <Nav className="me-auto">
            <Nav.Link href="/article/create">Create Article</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default TopMenu