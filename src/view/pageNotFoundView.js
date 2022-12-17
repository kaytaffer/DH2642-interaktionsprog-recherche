import { Link } from "react-router-dom"; //TODO is this import ok in view? can presenter do this?

function PageNotFoundView(){

    return (
        <div id="pageNotFound">
            <h1>Page Not found</h1>
            <Link to="/">Go to start</Link>
        </div>
    );
}
export default PageNotFoundView;