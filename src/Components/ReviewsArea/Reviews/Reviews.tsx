import "./Reviews.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FcApproval } from "react-icons/fc";
import DB from '../../../Services/DB'
import React from "react";
import DataModel from "../../../Models/DataModel";
import notify from "../../../Services/Notify";
import globals from "../../../Services/Globals";
import ReviewCardsList from "../ReviewCardsList/ReviewCardsList";

function Reviews(): JSX.Element {
    const db = new DB();
    const [data, setData] = React.useState<DataModel>(null);

    React.useEffect(() => {
        db.getData()
            .then(res => {
                setData(res);
            })
            .catch(err => {
                notify.error(err);
            });

    }, []);
    const { reviews } = { ...data }

    return (
        <div className="Reviews">
            <h1 className="divHeader"><span className="lineSpan">&emsp;&emsp;</span><FcApproval size="50px" /> לקוחות מדברים  <span className="lineSpan">&emsp;&emsp;</span></h1>
            {reviews && <>
                <div className="Carousel">
                    <Carousel dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
                        {reviews.images.map((e, i) => <div key={i}>
                            <img alt="img" src={globals.imageUrl + e} />
                        </div>)}
                    </Carousel>
                </div>
                <ReviewCardsList {...data} />
            </>}
        </div>
    );
}

export default Reviews;
