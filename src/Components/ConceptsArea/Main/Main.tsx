import Concept from "../Concept/Concept";
import "./Main.css";
import CelebrationIcon from '@mui/icons-material/Celebration';
import DB from '../../../Services/DB';
import React from "react";
import DataModel from "../../../Models/DataModel";
import notify from "../../../Services/Notify";



function Main(): JSX.Element {
    const db=new DB();
    const [data,setData] = React.useState<DataModel>(null);

    React.useEffect(()=>{
        db.getData()
        .then(res => {
            setData(res);
        })
        .catch(err => {
            notify.error(err);
        });
    },[]);
    const {concepts} = {...data};
    return (
        <>
        <h1><span className="lineSpan">&emsp;&emsp;</span><CelebrationIcon fontSize="large"/> הקונספטים שלנו<span className="lineSpan">&emsp;&emsp;</span></h1>
        <div className="Main">
            {concepts?.map((e,i)=><Concept key={i} {...e} />)}
        </div>
        </>
    );
}

export default Main;
