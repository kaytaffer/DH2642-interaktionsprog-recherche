function hamburgerMenuView(props){

    function showMenuACB() {
        document.getElementById("hamburgerMenu").classList.add("show");
        document.getElementById("hamburgerMenuButton").classList.add("hide");
    }

    function hideMenuACB() {
        document.getElementById("hamburgerMenu").classList.remove("show");
        document.getElementById("hamburgerMenuButton").classList.remove("hide");
    }

    return (
        <div>
            <button id="hamburgerMenuButton" onClick={showMenuACB}>☰</button>
            <div id="hamburgerMenu">
                <button id="hamburgerMenuButton" onClick={hideMenuACB}>x</button>
                <ul>
                    {props.children.map(child => <li key={child.props.children}>{child}</li>)}
                </ul>
            </div>
        </div>
    );
}
export default hamburgerMenuView;