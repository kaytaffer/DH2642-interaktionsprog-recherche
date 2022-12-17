import React from "react";
import AccordionView from "../view/accordionView";

function Accordion(props) {

    /* accordions created with https://www.w3schools.com/howto/howto_js_accordion.asp */

    return (
        <AccordionView title={props.title}>
            {props.children}
        </AccordionView>
    )
}
export default Accordion;