import { Button } from "@mui/material";
import LoginForm from "../LoginForm/LoginForm";
import UploadForm from "../UploadForm/UploadForm";
import "./Add.css";
import React from 'react';




function Add(): JSX.Element {
    const localUser = localStorage.getItem('sweetUser');
    const [loggedIn,setLoggedIn] = React.useState(localUser!==null ? true :false);
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
