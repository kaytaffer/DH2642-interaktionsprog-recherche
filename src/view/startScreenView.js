function StartScreenView(props){

   function buttonClickedACB(){
       console.log("startScreenView")
        props.onGameStart();
    }
    return (
            <button onClick={buttonClickedACB}>Start game</button>
    );
}
export default StartScreenView;
