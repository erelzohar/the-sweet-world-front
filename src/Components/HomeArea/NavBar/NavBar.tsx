import { Fab } from "@mui/material";
import { MutableRefObject} from "react";
import "./NavBar.css";

interface NavBarProps {
    elementsRefs: {
        curlsRef:MutableRefObject<any>,
        slideRef:MutableRefObject<any>,
        productsRef:MutableRefObject<any>,
        addRef:MutableRefObject<any>,
        makeupRef:MutableRefObject<any>
    };
}

interface categoriesInterface {
    name: string,
    ref: string 
}

function NavBar(props: NavBarProps): JSX.Element {

    const categories: categoriesInterface[] = [
        {
            name: "החלקות",
            ref: 'slideRef'
        },
        {
            name: "תוספות שיער",
            ref: 'addRef'
        },
        {
            name: "איפור מקצועי",
            ref: 'makeupRef'
        },
        {
            name: "פתיחת תלתלים",
            ref: 'curlsRef'
        }, {
            name: "מוצרים וקורסים",
            ref: 'productsRef'
        }];
    return (

        <div className="NavBar">
            {categories.map(c => <Fab key={c.ref} onClick={()=>props.elementsRefs[c.ref as keyof typeof props.elementsRefs].current.scrollIntoView({behavior:"smooth"})} variant="extended" size="large" color="primary" aria-label="add">
                {c.name}
            </Fab>)}
        </div>
    );
}

export default NavBar;
