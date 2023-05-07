import "./Footer.css";
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div id="footer-contact">
                <a target="blank" href="https://www.instagram.com/sweet_world102/"><BsInstagram /> sweet_world102</a>
                <a target="blank" href="https://wa.me/972535200876"><BsWhatsapp /> 053-520-0876</a>
                <a target="blank" href="https://www.facebook.com/sweetword102/"><BsFacebook /> העולם המתוק - הפעלות ימי הולדת</a>
            </div>
            <div>
                &copy; All rights reserved to EZ web development.
            </div>
        </div>
    );
}

export default Footer;
