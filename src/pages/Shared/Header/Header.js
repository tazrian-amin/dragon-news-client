import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftAside from '../LeftAside/LeftAside';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to="/">Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">All News</Nav.Link>
                    </Nav>
                    <Nav>
                        <Link to="/profile" className='pe-0 pt-1'>
                            {user?.photoURL ?
                                <Image
                                    src={user.photoURL}
                                    style={{ height: '30px' }}
                                    roundedCircle
                                ></Image>
                                :
                                <FaUserAlt></FaUserAlt>
                            }
                        </Link>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='ms-2 pt-2 fw-semibold'>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} className='ms-2' variant="outline-danger">Sign Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button className='mx-2' variant="outline-primary">Log In</Button></Link>
                                        <Link to='/register'><Button className='' variant="outline-primary">Register</Button></Link>
                                    </>
                            }
                        </>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftAside></LeftAside>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;