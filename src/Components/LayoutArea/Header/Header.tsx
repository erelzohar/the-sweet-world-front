import "./Header.css";
import { Avatar } from "@mui/material";
import logo from "../../../assets/images/logo.jpg"
import { Call, Instagram } from "@mui/icons-material";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <Avatar
                alt="Dina"
                src={logo}
                sx={{ width: 90, height: 90 }}
            />
            <h1 className="google-font">Dina Amira</h1>
            <div id="contact-div">
                <a href="tel:+97258641236"><Call /></a>
                <a href="https://www.instagram.com/dina.amira1998/'"><Instagram /></a>
            </div>
        </div>
    );
}

export default Header;
