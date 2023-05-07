import DataModel from "../../../Models/DataModel";
import ReviewModel from "../../../Models/ReviewModel";
import AddReview from "../AddReview/AddReview";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./ReviewCardsList.css";
import React from 'react';


function ReviewCardsList(props:DataModel): JSX.Element {
    const {reviews} = {...props};
    const [screenWidth,setWidth] = React.useState(window.screen.width);
    const [reviewsState,setReviews] = React.useState<ReviewModel[]>(reviews.reviews);

    React.useEffect(()=>{
        window.addEventListener('resize',()=>{setWidth(window.screen.width)});
        return ()=>window.removeEventListener('resize',null);
    },[])
    
    const stateHandler = (review:ReviewModel):void=>{
        const newState = [...reviewsState];
        newState.unshift(review);
        setReviews(newState);
    }

    

    return (
        <div className="ReviewCardsList" style={{gridTemplateColumns:(screenWidth>600 ? `repeat(${reviewsState.length+1},22vw)`:'80vw')}}>
            <AddReview stateHandler={stateHandler}/>
			{reviewsState && reviewsState.map((e,i)=><ReviewCard key={i} {...e} />)}
        </div>
    );
}

export default ReviewCardsList;
