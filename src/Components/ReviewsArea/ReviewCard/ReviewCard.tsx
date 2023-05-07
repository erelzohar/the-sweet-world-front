import { Rating } from "@mui/material";
import "./ReviewCard.css";
import ReviewModel from "../../../Models/ReviewModel";


function ReviewCard(props:ReviewModel): JSX.Element {    
    return (
        <div className="ReviewCard">
            <div className="review">
                <div className="review-header">
                    <span className="review-title">{props.name}</span>
                    <Rating dir="ltr" value={+props.rating ? +props.rating : 3} precision={1} readOnly/>
                </div>
                <div className="review-content">
                    <p>{props.content}</p>
                </div>
                <p id="postDate">{props.postDate}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
