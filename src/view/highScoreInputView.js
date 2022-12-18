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
            <h1>An eloge for a new High Score!</h1>
            <input className="wordInput" type = "text"
                   placeholder="Name for the leaderboard..."
                   id="wordInput"
                   autoFocus={true}
                   autoComplete={"off"}
                   style={{ width:"270px" }}
                   value = {props.inputText}
                   onChange={textInputChangeACB}
                   onKeyDown={keyGoesDownACB}
                   hidden ={props.onEnteredName}/>
            <button className="button" onClick={sendButtonClickedACB} hidden={props.onEnteredName}>Save</button>
            <p hidden = {!props.onEnteredName}>Name saved to high score list!</p>
        </div>
    );
}
export default highScoreInputView;