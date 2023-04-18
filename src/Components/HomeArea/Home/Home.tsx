import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { FcCalendar } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcCloseUpMode } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";

function Home(): JSX.Element {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed'
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books'
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink'
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen'
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds'
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs'
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop'
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors'
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee'
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage'
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle'
        },
        {
            img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table'
        }
    ];
    return (
        <div className="Home">
            <div id="intro" >
                <div id="jumbotron" className="jumbotron jumbotron-fluid" dir="rtl">
                    <div className="container">
                        <h1 id="introHeader" className="display-2">הפקות אירועים וימי הולדת לכל הגילאים!</h1>
                        <p className="lead d-none d-sm-inline">מתנפחים יבשים ורטובים לכל הגילאים , מתנפחי משחק , מגוון דוכני מזון , עמדות משחק , שולחנות שוק ועוד מלא הפתעות.
                            <br />
                            לפרטים נוספים והצעת מחיר
                            <Link to="/contact" style={{ display: "inline", color: "red" }}> צור קשר<PhoneIcon />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <div id="concepts">
                <Link to="/concepts" >
                    <h1 className="divHeader"><span className="lineSpan">&emsp;&emsp;</span><FcCloseUpMode fontSize="inherit" /> הקונספטים שלנו <span className="lineSpan">&emsp;&emsp;</span></h1>
                </Link>
                <Carousel className="Carousel" swipeable={true} dynamicHeight={true} autoPlay={true} infiniteLoop={true} >
                    <div>
                        <img src={itemData[0].img} />
                        <p className="legend">{itemData[0].title}</p>
                    </div>
                    <div>
                        <img src={itemData[4].img} />
                        <p className="legend">{itemData[1].title}</p>
                    </div>
                    <div>
                        <p className="legend">{itemData[2].title}</p>
                        <img src={itemData[2].img} />
                    </div>
                </Carousel>

            </div>

            <div className="iframes-grid-container">
                <Link to="/gallery">
                    <h1 className="divHeader"><span className="lineSpan">&emsp;&emsp;</span><FcGallery fontSize="inherit" /> גלריה  <span className="lineSpan">&emsp;&emsp;</span></h1>
                </Link>
                <div className="iframes home-iframes">
                    <figure className="image is-2by1">
                        <iframe title="iframe" scrolling="no" className="has-ratio" width="640" height="360" src="https://www.facebook.com/plugins/video.php?height=130&href=https%3A%2F%2Fwww.facebook.com%2Fsweetword102%2Fvideos%2F1419728535434136%2F&show_text=false&width=200&t=0" frameBorder="0" allowFullScreen></iframe>
                    </figure>
                    <figure className="image is-16by9">
                        <iframe scrolling="no" title="iframe" className="has-ratio" width="640" height="360" src="https://www.facebook.com/plugins/video.php?height=130&href=https%3A%2F%2Fwww.facebook.com%2Fsweetword102%2Fvideos%2F1419728535434136%2F&show_text=false&width=200&t=0" frameBorder="0" allowFullScreen></iframe>
                    </figure>
                    <figure className="image is-16by9">
                        <iframe scrolling="no" title="iframe" className="has-ratio" width="640" height="360" src="https://www.facebook.com/plugins/video.php?height=130&href=https%3A%2F%2Fwww.facebook.com%2Fsweetword102%2Fvideos%2F1419728535434136%2F&show_text=false&width=200&t=0" frameBorder="0" allowFullScreen></iframe>
                    </figure>
                    <figure className="image is-16by9">
                        <iframe scrolling="no" title="iframe" className="has-ratio" width="640" height="360" src="https://www.facebook.com/plugins/video.php?height=130&href=https%3A%2F%2Fwww.facebook.com%2Fsweetword102%2Fvideos%2F1419728535434136%2F&show_text=false&width=200&t=0" frameBorder="0" allowFullScreen></iframe>
                    </figure>
                </div>
            </div>

            <div id="reviews">
                <Link to="/reviews" color="white">
                    <h1 className="divHeader"><span className="lineSpan">&emsp;&emsp;</span><FcCollaboration fontSize="inherit" /> ביקורות <span className="lineSpan">&emsp;&emsp;</span></h1>
                    <Box id="reviewsBox" sx={{ width: 600, height: 600, overflowY: 'scroll', borderRadius: '5px' }}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {itemData.map((item) =>
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            )}
                        </ImageList>
                    </Box>
                </Link>
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
                        <CelebrationIcon fontSize="large" color="error" />
                        <h4>ימי הולדת ומסיבות</h4>
                        בואו לחגוג איתנו את ימי ההולדת ומסיבות הכיתה הכי כיפים והכי מגבשים שיש. צרו איתנו קשר ואנחנו נדאג לכם להפקה מסודרת, מאורגנת ולצחוק בלתי פוסק.
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Home;
