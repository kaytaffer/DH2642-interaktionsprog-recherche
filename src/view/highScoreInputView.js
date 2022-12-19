function highScoreInputView(props){

    function textInputChangeACB(){
        props.onTextInputChange(document.getElementById("nameInput").value)
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
            <h1>A new High Score!</h1>
            <input className="wordInput" type = "text"
                   placeholder="Name for the leaderboard..."
                   id="nameInput"
                   autoFocus={true}
                   autoComplete={"off"}
                   style={{ width:"270px" }}
                   value = {props.nameInputValue}
                   onChange={textInputChangeACB}
                   onKeyDown={keyGoesDownACB}
                   hidden ={props.onEnteredName}/>
            <button className="button" onClick={sendButtonClickedACB} hidden={props.onEnteredName}>Save</button>
            <p hidden = {!props.onEnteredName}>Name saved to high score list!</p>
        </div>
    );
}
export default highScoreInputView;