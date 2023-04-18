import "./Reviews.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FcApproval } from "react-icons/fc";
import image1 from '../../../assets/images/1.jpg';
import image2 from '../../../assets/images/2.jpg';
import image3 from '../../../assets/images/3.jpg';

function Reviews(): JSX.Element {
    return (
        <div className="Reviews">
            <h1 className="divHeader"><span className="lineSpan">&emsp;&emsp;</span><FcApproval size="50px"/> לקוחות מדברים  <span className="lineSpan">&emsp;&emsp;</span></h1>
            <div className="Carousel">
                <Carousel dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img alt="img" src={image1} />
                    </div>
                    <div>
                        <img alt="img" src={image2} />
                    </div>
                    <div>
                        <img alt="img" src={image3} />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Reviews;
