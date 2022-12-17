import React from "react";
import RulesView from "../view/rulesView";
import {Link, useNavigate} from "react-router-dom";
import Accordion from "../presenter/accordionPresenter";

function Rules() {
    const navigate = useNavigate();

    return (
        <RulesView
            highScoreLink={<Link to='/highscore'>high score list</Link>}
            onClickPlay={() => {navigate('/game')}}
            Accordion={Accordion}/>
    )
}
export default Rules;