import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import "./LoginForm.css";
import React from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import notify from "../../../Services/Notify";

interface Credentials {
    username: string,
    password: string
}
interface formProps{
    stateHandler:(isLoggedIn:boolean)=>void,
    state:boolean
}
const resolver: Resolver<Credentials> = async (values) => {
    return {
        values: values.username && values.password ? values : {},
        errors: !values.username && !values.password
            ? {
                username: {
                    type: 'required',
                    message: 'אנא מלא שם משתמש .',
                },
                password: {
                    type: 'required',
                    message: 'אנא מלא סיסמא .',
                }
            }
            : !values.username ? {
                name: {
                    type: 'required',
                    message: 'אנא מלא שם משתמש .',
                }
            } : !values.password ? {
                message: {
                    type: 'required',
                    message: 'אנא מלא סיסמא .',
                }
            } : {},
    };
}

const LoginForm:React.FC<formProps>=(props): JSX.Element=> {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Credentials>({ resolver,mode:'onBlur' });
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {};
    const submit: SubmitHandler<Credentials> = data => {
        try {
            const obj = { ...data }

            if (obj.username === process.env.REACT_APP_USERNAME && obj.password === process.env.REACT_APP_PASSWORD) {
                props.stateHandler(true);
                setOpen(false);
                notify.success('!התחברת בהצלחה');
                localStorage.setItem('sweetUser', JSON.stringify(obj));
            }
            else {
                notify.error('שם משתמש או סיסמא שגויים');
            }
        }
        catch (err: any) {
            notify.error(err.message);
        }
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div className="LoginForm">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{margin:"3px"}}>
                        התחברות
                    </Typography>
                    <form className="modalForm" id="login-form" noValidate onSubmit={handleSubmit(submit)}>
                        <TextField {...register("username")} id="username-input" error={errors.username ? true : false} helperText={errors.username?.message} label="שם משתמש" variant="outlined" />
                        <TextField type="password" {...register("password")} id="password-input" error={errors.password ? true : false} helperText={errors.password?.message} label="סיסמא" variant="outlined" />
                        <Button type="submit">Login</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default LoginForm;
