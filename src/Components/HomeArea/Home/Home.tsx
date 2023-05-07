import "./Home.css";
import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { FcCalendar, FcGraduationCap, FcDepartment, FcBullish, FcCloseUpMode, FcCollaboration, FcGallery } from "react-icons/fc";
import DB from '../../../Services/DB';
import { CircularProgress } from "@mui/material";
import ConceptModel from "../../../Models/ConceptModel";
import DataModel from "../../../Models/DataModel";
import notify from "../../../Services/Notify";
import globals from "../../../Services/Globals";
import ReactPlayer, { FacebookConfig } from 'react-player/facebook';

function Home(): JSX.Element {
    const db = new DB();
    const [data, setData] = React.useState<DataModel>(null);
    const [loading, setLoading] = React.useState(true);
    const [config, setConfig] = React.useState<FacebookConfig>({ appId: "764137928715938" });

    React.useEffect(() => {
        if (window.screen.width > 600) {
            setConfig({ ...config, attributes: { "data-height": "370px" } })
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
    const { concepts, gallery, reviews } = { ...data };
    console.log(concepts);
    
    const scrollRef = React.useRef(null);
    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
    return (
        <div className="Home">
            <div id="intro" >
                <div id="jumbotron" className="jumbotron jumbotron-fluid" dir="rtl">
                    <div className="container">
                        <h1 id="introHeader" className="display-2">הפקות אירועים וימי הולדת לכל הגילאים!</h1>
                        <p className="lead d-none d-sm-inline">מתנפחים יבשים ורטובים לכל הגילאים , מתנפחי משחק , מגוון דוכני מזון , עמדות משחק , שולחנות שוק ועוד מלא הפתעות.
                            <br />
                            לפרטים נוספים והצעת מחיר
                            <span onClick={scrollToBottom} style={{ cursor: 'pointer', display: "inline", color: "lawngreen", fontSize: "inherit" }}> צור קשר<PhoneIcon />
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div id="concepts">
                <Link to="/concepts" >
                    <h1 className="divHeader"><span className="lineSpan">&emsp;&emsp;</span><FcCloseUpMode fontSize="inherit" /> ההפעלות שלנו <span className="lineSpan">&emsp;&emsp;</span></h1>
                </Link>
                <Carousel className="Carousel" swipeable={true} dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
                    {concepts?.map((e: ConceptModel) =>
                        <div key={e.title}>
                            <img alt="" src={globals.imageUrl + e.images[0]} />
                            <p style={{bottom:"20%"}} className="legend">{e.title}</p>
                        </div>
                    )}
                </Carousel>
            </div>
            <div id="gallery">
                <Link to="/gallery" >
                    <h1 className="divHeader"><span className="lineSpan">&emsp;&emsp;</span><FcGallery fontSize="inherit" /> גלריה  <span className="lineSpan">&emsp;&emsp;</span></h1>
                </Link>
                <div className="iframes-grid-container">
                    {loading ? <CircularProgress color="error" size="10vw" /> :
                        <div className="iframes" style={{ gridTemplateColumns: 'repeat(9,23vw)' }}>
                            {gallery?.playground.slice(0, 3).map((e, i) => <ReactPlayer playing muted url={e} key={i} width="100%" height="100%" config={config} />)}
                            {gallery?.tables.slice(0, 3).map((e, i) => <ReactPlayer playing muted url={e} key={i} width="100%" height="100%" config={config} />)}
                            {gallery?.sweets.slice(0, 3).map((e, i) => <ReactPlayer playing muted url={e} key={i} width="100%" height="100%" config={config} />)}
                        </div>
                    }
                </div>
            </div>
            <div id="reviews">
                <Link to="/reviews" color="white">
                    <h1 className="divHeader"><span className="lineSpan">&emsp;&emsp;</span><FcCollaboration fontSize="inherit" /> ביקורות <span className="lineSpan">&emsp;&emsp;</span></h1>
                </Link>
                {reviews && <Carousel className="Carousel" dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
                    {reviews.images.map((e, i) => <div key={i}>
                        <img alt="img" src={globals.imageUrl + e} />
                    </div>)}
                </Carousel>}
            </div>

            <div className="about-us-container">
                <h1 className="divHeader"><span className="lineSpan">&emsp;&emsp;</span><FcCalendar fontSize="inherit" /> האירועים שלנו <span className="lineSpan">&emsp;&emsp;</span></h1>
                <div className="about-us-content">
                    <div className="about-us-child">
                        <FcGraduationCap size="50px" />
                        <h4>בתי ספר</h4>העולם המתוק ימצא לכם הדרך הכי מקורית ומיוחדת להפתיע את התלמידים והמורים. אנחנו נבנה עבורכם את האירוע הכי כיפי שאי פעם תקבלו! אחרי אירוע כזה, מבטיחים שהתלמידים יחכו בקוצר רוח לפגוש אותנו גם בשנה הבאה.
                    </div>
                    <div className="about-us-child">
                        <FcBullish size="50px" />
                        <h4> ארגונים וחברות</h4>
                        מוכנים לשבור את שגרת העבודה של העובדים שלכם בסטייל. בעזרת האטרקציות המיוחדות של העולם המתוק נספק לכם אירוע חברה בלתי נשכח! ניצור עבורכם תכנית המתאימה בדיוק עבורכם תוך מתן שירות מקצועי ואדיב.
                    </div>
                    <div className="about-us-child">
                        <FcDepartment size="50px" />
                        <h4>עיריות</h4>
                        אם בא לכם לפנק את תושבי העיר ,הילדים והמשפחות אתם בידיים טובות. העולם המתוק יפיק עבורכם אירוע קהילתי מושלם ומהנה עם אטרקציות מיוחדות ומטריפות. מגוון רחב של פעילויות מגוונות לכל הגילאים שיגרמו למשתתפים הנאה מקסימלית   .
                    </div>
                    <div className="about-us-child">
                        <br />
                        <CelebrationIcon fontSize="large" color='secondary' sx={{margin:'3px'}} />
                        <h4>ימי הולדת ומסיבות</h4>
                        בואו לחגוג איתנו את ימי ההולדת הכי כיפים והכי מגבשים שיש עם מגוון רחב של אטרקציות. צרו איתנו קשר ואנחנו נדאג לכם להפקה מסודרת, מאורגנת ולצחוק בלתי פוסק.
                    </div>
                </div>
            </div>
            <div ref={scrollRef} style={{ float: "left", clear: "both", margin: 0, padding: 0, height: 0, width: 0 }}></div>
        </div >
    );
}

export default Home;
