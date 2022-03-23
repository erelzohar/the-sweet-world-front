import NavBar from "../NavBar/NavBar";
import SpeedDialComponent from "../SpeedDialComponent/SpeedDialComponent";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <NavBar />
            <SpeedDialComponent />
        </div>
    );
}

export default Home;
