import {Navbar,Container,NavDropdown,Nav,Form, FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Header=() => {
    return <>
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container style={{display:'flex'}}>
        <Navbar.Brand style={{fontSize:30,fontFamily:'sans-serif',flex:8}} >
            <Link to="/" style={{color:'yellow'}}>
            Task Manager
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
            <Link to="/mynotes" style={{color:'yellow'}}>
            My Notes
            </Link>
            </Nav.Link>
            <NavDropdown title="Rakshit Verma" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='m-auto'>
                <Form inline>
                    <FormControl
                    type="text"
                    placeholder="search"
                    className="mr-sm-2">
                    </FormControl>
                </Form>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
}

export default Header;