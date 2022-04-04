import { useRef } from "react";
import NavBar from "../NavBar/NavBar";
import SpeedDialComponent from "../SpeedDialComponent/SpeedDialComponent";
import "./Home.css";
import image1 from '../../../assets/images/1.jpg'
import image2 from '../../../assets/images/2.jpg'
import image3 from '../../../assets/images/3.jpg'

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
    console.log(typeof slideRef);

    return (
        <div className="Home">
            <NavBar elementsRefs={refsObj} />
            <div id="slide">
                <h1 ref={slideRef}>החלקות</h1>
                <img src={image3} alt="" />
            </div>
            <div id="add">
                <h1 ref={addRef}>תוספות שיער</h1>
                <img src={image3} alt="" />
            </div>
            <div id="makeup">
                <h1 ref={makeupRef}>איפור מקצועי</h1>
                <img src={image3} alt="" />
            </div>
            <div id="curls">
                <h1 ref={curlsRef}>פתיחת תלתלים</h1>
                <img src={image1} alt="" />
            </div>
            <div id="products">
                <h1 ref={productsRef} >מוצרים וקורסים</h1>
                <img src={image2} alt="" />

            </div>


            <SpeedDialComponent />
        </div>
    );
}

export default Home;
