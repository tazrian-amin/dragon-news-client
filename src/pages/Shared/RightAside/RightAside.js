import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaYoutube, FaDiscord, FaShieldAlt, FaRegFileAlt } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightAside = () => {

    const { user, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <>
                {
                    !user &&
                    <ButtonGroup vertical>
                        <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                        <Button className='mb-2' variant="outline-dark"><FaGithub></FaGithub> Login with GitHub</Button>
                    </ButtonGroup>
                }
            </>
            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className="mb-2"><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaDiscord></FaDiscord> Discord</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaShieldAlt></FaShieldAlt> Privacy Policy</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaRegFileAlt></FaRegFileAlt> Terms & Conditions</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightAside;