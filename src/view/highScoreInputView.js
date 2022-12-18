function highScoreInputView(props){

    function textInputChangeACB(event){
        props.onTextInputChange(event)
    }
    function sendButtonClickedACB(){
        props.onAddEnteredName();
    }
    function keyGoesDownACB(event){
        if(event.key !== "Enter") {return}
        props.onAddEnteredName();
    }

    return (
        <div id="newHighScore">
            <h1>An eloge for a nova High Score!</h1>
            <input className="wordInput" type = "text"
                   placeholder="Name for the leaderboard..."
                   id="nameInput"
                   autoFocus={true}
                   autoComplete={"off"}
                   style={{ width:"270px" }}
                   value = {props.displayName}
                   onChange={textInputChangeACB}
                   onKeyDown={keyGoesDownACB}/>
            <button className="button" onClick={sendButtonClickedACB}>Send</button>
        </div>
    );
}
export default highScoreInputView;