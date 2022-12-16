function TopBarView(){

    function showMenuACB() {
        document.getElementById("hamburgerMenu").classList.add("show");
        document.getElementById("topBar").classList.add("hide");
    }

    return (
        <div id="topBar">
            <button id="openHamburgerMenuButton" onClick={showMenuACB}>☰</button>
            <h1>Recherché</h1>
        </div>
    );
}
export default TopBarView;