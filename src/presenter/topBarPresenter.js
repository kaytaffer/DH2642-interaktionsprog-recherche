import React from "react";
import TopBarView from "../view/topBarView";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {userState} from "../model/atoms";

function TopBar() {
    const navigate = useNavigate();
    const user = useRecoilValue(userState)

    return (
        <TopBarView
            showBackToStart = {window.location.pathname === '/game' || window.location.pathname === '/account'}
            showExplanation = {window.location.pathname === '/game'}
            onBackToStart = {() => {navigate('/')}}
            onLogIn = {() => {navigate('/account')}}
            onAccount = {() => {navigate('/account')}}
            userLoggedIn = {user}
        />
    )
}
export default TopBar;