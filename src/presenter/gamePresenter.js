import GameView from "../view/gameView.js";

function Game(props){

    function addWordACB(text){
        console.log(text);
    }
    function performSendACB(){
        console.log("Send");
    }

    return <div>
        <GameView randomWordOption = {["example", "type", "span", "ability", "border", "membership", "resolve"]}
                  onUserTextInput = {addWordACB}
                  onSendButtonClick ={performSendACB}/>;
    </div>
}
export default Game;