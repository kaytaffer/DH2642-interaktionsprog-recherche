function TopBarView(props){

    function showMenuACB() {
        document.getElementById("hamburgerMenu").classList.add("show");
        document.getElementById("topBar").classList.add("hide");
    }

    function rightButton() {
        if(props.showBackToStart)
            return (
                <div className="buttonContainer">
                    <span>exit game</span> <button className="button" onClick={props.onBackToStart}>X</button>
                </div>)
        if(props.userLoggedIn)
            return (
                <div className="buttonContainer">
                   <button className="button" onClick={props.onAccount}>account</button>
                </div>)
        else
            return  (
                <div className="buttonContainer">
                    <button className="button" onClick={props.onLogIn}>login</button>
                </div>)

    }

    return (
        <div id="topBar">
            <button id="openHamburgerMenuButton" onClick={showMenuACB}>☰</button>
            <h1>Recherché</h1>
            {rightButton()}
        </div>
    );
}
export default TopBarView;