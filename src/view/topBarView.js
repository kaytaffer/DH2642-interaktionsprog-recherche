function TopBarView(props){

    function showMenuACB() {
        document.getElementById("hamburgerMenu").classList.add("show");
        document.getElementById("topBar").classList.add("hide");
    }

    function backToStartButton() {
        if(props.showBackToStart)
            return (
                <div className="buttonContainer">
                    <span>exit game</span> <button className="button" onClick={props.onBackToStart}>X</button>
                </div>)
    }

    return (
        <div id="topBar">
            <button id="openHamburgerMenuButton" onClick={showMenuACB}>☰</button>
            <h1 onClick={props.onBackToStart}>Recherché</h1>
            {backToStartButton()}
        </div>
    );
}
export default TopBarView;