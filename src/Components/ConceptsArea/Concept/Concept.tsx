import "./Concept.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ConceptModel from "../../../Models/ConceptModel";
import globals from "../../../Services/Globals";

function Concept(concept:ConceptModel): JSX.Element {
    return (
        <div className="Concept">
            <div className="Carousel">
                <Carousel showThumbs={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true} stopOnHover={true}>
                    {concept.images.map(e=><div key={e}><img src={globals.imageUrl+e} alt={e} /></div>)}
                </Carousel>
            </div>
            <span className="lineSpan">&emsp;&emsp;</span><h5> {concept.title} </h5><span className="lineSpan">&emsp;&emsp;</span>
            <h3 style={{textAlign:"center"}} dir="rtl">{concept.description}</h3>
        </div>
    );
}

export default Concept;
