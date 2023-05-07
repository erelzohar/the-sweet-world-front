import React from "react";
import "./Gallery.css";
import DataModel from "../../../Models/DataModel";
import DB from '../../../Services/DB';
import notify from "../../../Services/Notify";
import ReactPlayer, { FacebookConfig } from 'react-player/facebook';
import { CircularProgress } from "@mui/material";


function Gallery(): JSX.Element {
    const db = new DB();
    const [data, setData] = React.useState<DataModel>(null);
    const [loading, setLoading] = React.useState(true);
    const [config,setConfig] = React.useState<FacebookConfig>({appId: "764137928715938"});

    React.useEffect(() => {
        if (window.screen.width > 600) {
            setConfig({...config,attributes: { "data-height": "370px" }})
        }
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        db.getData()
            .then(res => {
                setData(res);
            })
            .catch(err => {
                notify.error(err);
            });
    }, []);
    const { gallery } = { ...data };

    return (
        <div className="Gallery">
            <div className="playground">
                <h1><span className="lineSpan">&emsp;&emsp;</span> ההפעלות שלנו <span className="lineSpan">&emsp;&emsp;</span></h1>
                <div className="iframes-grid-container">
                    {loading ? <CircularProgress color="error" size="10vw" /> : <div className="iframes" style={{ gridTemplateColumns: `repeat(${gallery?.playground.length},25vw)` }}>
                        {gallery?.playground.map((e, i) => <ReactPlayer playing muted width="auto" height="auto" key={i} url={e} config={config} />)}
                    </div>}
                </div>
            </div>
            <div className="tables">
                <h1><span className="lineSpan">&emsp;&emsp;</span> שולחנות שוק <span className="lineSpan">&emsp;&emsp;</span></h1>
                <div className="iframes-grid-container">
                    {loading ? <CircularProgress color="error" size="10vw" /> : <div className="iframes" style={{ gridTemplateColumns: `repeat(${gallery?.playground.length},25vw)` }}>
                        {gallery?.tables.map((e, i) => <ReactPlayer playing muted width="auto" height="auto" key={i} url={e} config={config} />)}
                    </div>}
                </div>
            </div>
            <div className="sweets">
                <h1><span className="lineSpan">&emsp;&emsp;</span> מתוקים ותוספות <span className="lineSpan">&emsp;&emsp;</span></h1>
                <div className="iframes-grid-container">
                    <div className="iframes" style={{ gridTemplateColumns: `repeat(${gallery?.playground.length},25vw)` }}>
                        {gallery?.sweets.map((e, i) => <ReactPlayer playing muted width="auto" height="auto" key={i} url={e} config={config} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
