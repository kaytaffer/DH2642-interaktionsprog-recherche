import React from "react";
import HamburgerMenuView from "../view/hamburgerMenuView";
import { Link } from "react-router-dom";

function HamburgerMenu() {

    return (
        <HamburgerMenuView>
            <Link to="/">Start</Link>
            <Link to="/about">About</Link>
            <Link to="/rules">Rules</Link>
            <Link to="/highscore">High Scores</Link>
        </HamburgerMenuView>
    )
}
export default HamburgerMenu;