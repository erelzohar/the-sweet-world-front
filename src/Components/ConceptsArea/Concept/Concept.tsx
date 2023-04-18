import "./Concept.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface conceptProps{
    imagesArr:string[],
    description:string,
    name:string
}
function Concept({imagesArr,description,name}:conceptProps): JSX.Element {
    return (
        <div className="Concept">
            <div className="Carousel">
                <Carousel dynamicHeight={true} autoPlay={true} infiniteLoop={true} stopOnHover={true}>
                    {imagesArr.map(e=><div key={e}><img src={e} alt={e} /></div>)}
                </Carousel>
            </div>
            <h5><span className="lineSpan">&emsp;&emsp;</span> {name} <span className="lineSpan">&emsp;&emsp;</span></h5>
            <h3>{description}</h3>
        </div>
    );
}

export default Concept;
