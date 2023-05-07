import { Box, Button, Modal, TextField, Typography, Input, Select, MenuItem, InputLabel } from "@mui/material";
import "./GenericModal.css";
import React from "react";
import notify from "../../../Services/Notify";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import DB from '../../../Services/DB';
import UploadModel from "../../../Models/UploadModel";


const GenericModal: React.FC<{ type: string, stateCleaner: () => void }> = (props): JSX.Element => {
    const db = new DB();
    const resolver: Resolver<UploadModel> = async (values) => {
        if (props.type === "concept") {
            return {
                values: values.conceptImages && values.title && values.description ? values : {},
                errors: !values.conceptImages && !values.title && !values.description
                    ? {
                        conceptImages: {
                            type: 'optional',
                            message: 'אנא הוסף לפחות תמונה אחת .'
                        },
                        title: {
                            type: 'required',
                            message: 'אנא מלא כותרת .'
                        },
                        description: {
                            type: 'required',
                            message: 'אנא מלא תיאור .'
                        }
                    } : !values.conceptImages && !values.title
                        ? {
                            conceptImages: {
                                type: 'optional',
                                message: 'אנא הוסף לפחות תמונה אחת .'
                            },
                            title: {
                                type: 'required',
                                message: 'אנא מלא כותרת .'
                            }
                        } : !values.description ? {
                            description: {
                                type: 'required',
                                message: 'אנא מלא תיאור .'
                            }
                        } : !values.conceptImages
                            ? {
                                conceptImages: {
                                    type: "optional",
                                    message: 'אנא הוסף לפחות תמונה אחת .'
                                }
                            } : {}
            }
        }
        else if (props.type === "review") {
            return {
                values: values.reviewsImages ? values : {},
                errors: !values.reviewsImages ? {
                    reviewsImages: {
                        type: 'optional',
                        message: 'אנא הוסף לפחות תמונה אחת .'
                    }
                } : {}
            }
        }
        else if (props.type === "gallery") {
            return {
                values: values.videoUrl && values.galleryCat ? values : {},
                errors: !values.videoUrl && !values.galleryCat ? {
                    videoUrl: {
                        type: 'required',
                        message: 'אנא מלא קישור לסרטון .'
                    },
                    galleryCat: {
                        type: 'required',
                        message: 'אנא מלא קטגוריה  .'
                    }
                } : !values.videoUrl ? {
                    videoUrl: {
                        type: 'required',
                        message: 'אנא מלא קישור לסרטון .'
                    }
                } : !values.galleryCat ? {
                    galleryCat: {
                        type: 'required',
                        message: 'אנא מלא קטגוריה  .'
                    }
                } : {}
            }
        }

    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm<UploadModel>({
        resolver, mode: 'onChange', defaultValues: {
            title: null,
            description: null,
            videoUrl: null
        }
    });

    const submit: SubmitHandler<UploadModel> = async data => {
        try {
            const obj = { ...data };            
            await db.postData(props.type, db.convertToFormData(props.type, obj));

            notify.success('.נשמר בהצלחה');
            props.stateCleaner();
        }
        catch (err: any) {
            notify.error(err.message);
        }
    }
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
        props.stateCleaner();
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        direction: "rtl"
    };
    return (
        <div className="GenericModal">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" style={{ margin: "3px" }}>
                        {props.type === 'concept' ? "הוספת קונספט" : props.type === 'gallery' ? "הוספת סרטון לגלריה" : "הוספת ביקורות"}
                    </Typography>
                    <form className="modalForm" id="upload-form" noValidate onSubmit={handleSubmit(submit)}>
                        {
                            props.type === "concept" && <>
                                <TextField {...register("title")} error={errors.title ? true : false} helperText={errors.title?.message} id="title-input" label="כותרת " variant="outlined" />
                                <TextField {...register("description")} error={errors.description ? true : false} helperText={errors.description?.message} id="description-input" label="תיאור" variant="outlined" />
                                <input {...register("conceptImages")} type="file" id="image-input" placeholder="בחר תמונה" accept="image/*" multiple />
                                <span style={{ color: "red" }}>{errors.conceptImages?.message}</span>
                            </>
                        }
                        {
                            props.type === "gallery" && <>
                                <TextField {...register("videoUrl")} error={errors.videoUrl ? true : false} helperText={errors.videoUrl?.message} id="videoUrl-input" label="קישור לסרטון " variant="outlined" />
                                <Select
                                    defaultValue="playground"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    {...register('galleryCat')}

                                >
                                    <MenuItem value={'playground'}>ההפעלות שלנו</MenuItem>
                                    <MenuItem value={'tables'}>שולחנות שוק</MenuItem>
                                    <MenuItem value={'sweets'}>מתוקים ותוספות</MenuItem>
                                </Select>
                            </>
                        }
                        {
                            props.type === "review" && <>
                                <input {...register("reviewsImages")} type="file" id="image-input" placeholder="בחר תמונה" accept="image/*" multiple />
                            </>
                        }
                        <Button type="submit">שליחה</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default GenericModal;
