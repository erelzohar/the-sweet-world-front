import { Button } from "@mui/material";
import LoginForm from "../LoginForm/LoginForm";
import UploadForm from "../UploadForm/UploadForm";
import "./Add.css";
import React from 'react';
import axios from "axios";
import globals from "../../../Services/Globals";




function Add(): JSX.Element {
    const [loggedIn,setLoggedIn] = React.useState(false);
    React.useEffect( ()=>{
        const localUser = localStorage.getItem('sweetUser');
        if (!localUser) return;
        let user = JSON.parse(localUser);
        const checkUser = async ()=>{
            const formData = new FormData();
            formData.append("username",user.username);
            formData.append("password",user.password);

            await axios.post(globals.loginUrl, formData)
            .then(res => setLoggedIn(true))
            .catch(err =>err)
        }
        checkUser();
    },[])
    
    const stateHandler = (isLoggedIn:boolean)=>{setLoggedIn(isLoggedIn)};
    const logout=()=>{
        setLoggedIn(false);
        localStorage.removeItem("sweetUser");
    }

    return (
        <div className="Add">
            {loggedIn && <Button id="logout-btn" variant="contained" color="error" onClick={logout}>יציאה</Button>}
            {loggedIn ? <UploadForm /> : <LoginForm stateHandler={stateHandler} state={loggedIn} /> }
        </div>
    );
}

export default Add;
