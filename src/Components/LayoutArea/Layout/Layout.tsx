import App from "../../../App";
import Home from "../../HomeArea/Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header><Header /></header>
            <main><Home /></main>
            <footer><Footer /></footer>
        </div>
    );
}

export default Layout;
