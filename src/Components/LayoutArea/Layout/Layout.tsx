import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";
import Reviews from "../../ReviewsArea/Reviews/Reviews";
import SpeedDialComponent from "../../HomeArea/SpeedDialComponent/SpeedDialComponent";
import Gallery from "../../GalleryArea/Gallery/Gallery";
import ErrorPage from "../../ErrorPage/ErrorPage/ErrorPage";
import Main from "../../ConceptsArea/Main/Main";
import ContactUs from "../../HomeArea/ContactUs/ContactUs";
import Add from "../../AdminArea/Add/Add";
import ScrollToTop from "../../../Services/ScrollToTop";


function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Router>
                <ScrollToTop/>
                <header><Header /></header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/concepts" element={<Main />} />
                        <Route path="/add" element={<Add/>} />
                        <Route path="/*" element={<ErrorPage />} />
                    </Routes>

                    <SpeedDialComponent />
                </main>
                <footer>
                    <ContactUs />
                    <Footer />
                </footer>
            </Router>
        </div>
    );
}

export default Layout;
