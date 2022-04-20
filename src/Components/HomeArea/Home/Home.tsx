import { useRef } from "react";
import NavBar from "../NavBar/NavBar";
import SpeedDialComponent from "../SpeedDialComponent/SpeedDialComponent";
import "./Home.css";
import image1 from '../../../assets/images/1.jpg'
import image2 from '../../../assets/images/2.jpg'
import image3 from '../../../assets/images/3.jpg'
import products1 from '../../../assets/images/products-1.jpg'
import products2 from '../../../assets/images/products-2.jpg'
import products3 from '../../../assets/images/products-3.jpg'
import slide1 from '../../../assets/images/slide-1.jpg'
import slide2 from '../../../assets/images/slide-2.jpg'
import slide3 from '../../../assets/images/slide-3.jpg'
import slide4 from '../../../assets/images/slide-4.jpg'

function Home(): JSX.Element {

    const slideRef = useRef(null);
    const curlsRef = useRef(null);
    const productsRef = useRef(null);
    const addRef = useRef(null);
    const makeupRef = useRef(null);

    const refsObj = {
        slideRef,
        curlsRef,
        productsRef,
        addRef,
        makeupRef
    };

    return (
        <div className="Home">
            <NavBar elementsRefs={refsObj} />

            <div dir="rtl" id="slide">
                <h1 ref={slideRef}>החלקות</h1>
                <img src={image3} alt="" />
                <img src={slide1} alt="" />
                <img src={slide2} alt="" />
                <img src={slide3} alt="" />
                <img src={slide4} alt="" />
            </div>

            <div dir="rtl" id="add">
                <h1 ref={addRef}>תוספות שיער</h1>
                <img src={image3} alt="" />
            </div>

            <div dir="rtl" id="makeup">
                <h1 ref={makeupRef}>איפור מקצועי</h1>
                <img src={image3} alt="" />
            </div>

            <div dir="rtl" id="curls">
                <h1 ref={curlsRef}>פתיחת תלתלים</h1>
                <img src={image1} alt="" />
            </div>

            <div dir="rtl" id="products">
                <h1 ref={productsRef} >מוצרים וקורסים</h1>
                <img src={image2} alt="" />
                <img src={products1} alt="" />
                <img src={products2} alt="" />
                <img src={products3} alt="" />
            </div>

            <SpeedDialComponent />
        </div>
    );
}

export default Home;
