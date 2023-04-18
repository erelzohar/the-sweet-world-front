import Concept from "../Concept/Concept";
import "./Main.css";
import CelebrationIcon from '@mui/icons-material/Celebration';
import image1 from '../../../assets/images/1.jpg'
import image2 from '../../../assets/images/2.jpg'
import image3 from '../../../assets/images/3.jpg'


const concept ={
    imagesArr:[image1,image2,image3],
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque alias, velit eveniet iure dolores ratione soluta eum quisquam minus nemo praesentium sunt corrupti inventore. Eligendi eius aspernatur obcaecati velit dicta?',
    name:"ספיידרמן"
}
function Main(): JSX.Element {
    return (
        <>
        <h1><span className="lineSpan">&emsp;&emsp;</span><CelebrationIcon fontSize="large"/> הקונספטים שלנו<span className="lineSpan">&emsp;&emsp;</span></h1>
        <div className="Main">
			<Concept {...concept}/>
			<Concept {...concept}/>
			<Concept {...concept}/>

        </div>
        </>
    );
}

export default Main;
