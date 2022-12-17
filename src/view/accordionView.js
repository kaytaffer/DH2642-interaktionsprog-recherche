function accordionView(props){

    function accordionClickACB(e) {
        e.target.classList.toggle("active");
        e.target.nextElementSibling.classList.toggle("view");
    }

    return (
        <div>
            <button className="accordion" onClick={accordionClickACB}>{props.title}</button>
            <div className="accordionPanel">
                {props.children}
            </div>
        </div>);
}
export default accordionView;