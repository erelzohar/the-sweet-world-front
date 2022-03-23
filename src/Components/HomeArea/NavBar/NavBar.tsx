import { Fab } from "@mui/material";
import "./NavBar.css";

function NavBar(): JSX.Element {
    const categories: string[] = ["החלקות", "תוספות שיער", "איפור מקצועי", "פתיחת תלתלים", "מוצרים וקורסים"]
    return (
        <div className="NavBar">
            {categories.map(c => <Fab key={c} variant="extended" size="large" color="primary" aria-label="add">
                {c}
            </Fab>)}
        </div>
    );
}

export default NavBar;
