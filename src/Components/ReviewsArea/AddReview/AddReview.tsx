import { Button, Rating, TextField } from "@mui/material";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import "./AddReview.css";
import React from 'react';
import notify from "../../../Services/Notify";
import DB from "../../../Services/DB";
import UploadModel from "../../../Models/UploadModel";
import ReviewModel from "../../../Models/ReviewModel";


const resolver: Resolver<UploadModel> = async (values) => {
    return {
        values: values.reviewerName ? values : {},
        errors: !values.reviewerName 
            ? {
                reviewerName: {
                    type: 'required',
                    message: 'אנא מלא שם  .',
                }
            }: (values.reviewerName.length>16 )
            ?{
                reviewerName:{
                    type:"maxLength",
                    message:'מקסימום 18 תווים.'
                }
            }:(values.reviewerContent.length>150)
            ?{
                reviewerContent:{
                    type:"maxLength",
                    message:"מקסימום 150 תווים."
                }
            }:{}
    };
}

const AddReview:React.FC<{stateHandler:(review:ReviewModel)=>void}> =(props): JSX.Element=> {
    const db = new DB()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<UploadModel>({ resolver,mode:'onBlur' });
    const [rating, setRating] = React.useState(3);

    const submit: SubmitHandler<UploadModel> = async data => {
        try {
            const date = new Date().toLocaleDateString();
            const obj = { ...data,reviewerRating:rating,reviewPostDate: date};
            
            const response = await db.postData("reviewCard",db.convertToFormData("reviewCard",obj));
            props.stateHandler({name:obj.reviewerName,rating,content:obj.reviewerContent,postDate:obj.reviewPostDate});
            reset();
            notify.success("נשלח בהצלחה!");


        }
        catch (err: any) {
            notify.error(err.message);
        }
    }
    return (
        <div className="AddReview">
            <div className="review">
                <div className="review-header">
                    <span className="review-title">דרג אותנו!</span>
                    <Rating
                        dir="ltr"
                        value={rating}
                        defaultValue={3}
                        precision={1}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                </div>
                <form className="review-form" dir="rtl" noValidate onSubmit={handleSubmit(submit)}>
                    <TextField style={{display:"flex",margin:"1rem"}} className="add-review-input" size="small" dir="rtl" multiline {...register("reviewerName")} id="name-input" error={errors.reviewerName ? true : false} helperText={errors.reviewerName?.message} placeholder="שם*" variant="standard" />
                    <div style={{display:"flex",alignItems:"end",justifyContent:"space-around"}}>
                    <TextField style={{margin:0}} className="add-review-input" size="small" dir="rtl" multiline {...register("reviewerContent")} id="review-input" placeholder="ביקורת" variant="standard" />
                    <Button id="review-btn" type="submit" size="small" variant="contained">שלח</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddReview;


