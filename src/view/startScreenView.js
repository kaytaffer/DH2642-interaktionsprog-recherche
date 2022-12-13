function StartScreenView(props){

   function buttonClickedACB(){
        props.onGameStart();
    }
    return (
            <button onClick={buttonClickedACB}>Start game</button>
    );
}
export default StartScreenView;
