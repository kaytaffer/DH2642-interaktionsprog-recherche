function PageNotFoundView(props){
    return (
        <div id="pageNotFound">
            <h2>Page Not Found</h2>
            <p>Sorry! The page <span className="number">{props.location}</span> does not exist.</p>
            <p>Try <props.Link to="/">going back to start</props.Link>, or check out the links in the menu.</p>
        </div>
    );
}
export default PageNotFoundView;