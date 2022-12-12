import { Link } from "react-router-dom"; //TODO is this import ok in view? can presenter do this?

function hamburgerMenuView(){

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
                    <li><Link to="/">Start</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/rules">Rules</Link></li>
                    <li><Link to="/highscore">High Scores</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default hamburgerMenuView;