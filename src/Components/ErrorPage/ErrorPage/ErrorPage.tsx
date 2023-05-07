import "./ErrorPage.css";
import { FcSearch } from "react-icons/fc";

function ErrorPage(): JSX.Element {
    return (
        <div className="ErrorPage">
			<h1>...הדף שחיפשת לא קיים </h1>
            <h1><FcSearch size={"100px"}/></h1>
            <h5><a href="/">חזרה לדף הבית</a></h5>
        </div>
    );
}

export default ErrorPage;
