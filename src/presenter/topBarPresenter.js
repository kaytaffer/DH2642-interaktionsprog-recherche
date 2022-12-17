import React from "react";
import TopBarView from "../view/topBarView";
import {useNavigate} from "react-router-dom";

function TopBar() {
    const navigate = useNavigate();

    return (
        <TopBarView
            showBackToStart = {window.location.pathname === '/game'}
            onBackToStart = {() => {navigate('/')}}
        />
    )
}
export default TopBar;