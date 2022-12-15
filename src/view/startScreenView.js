function StartScreenView(props){

   function buttonClickedACB(){
        props.onGameStart();
    }
    return (
        <div id="start">
            <button className="button" onClick={buttonClickedACB}>Start game</button>
        </div>
    );
}
export default StartScreenView;
