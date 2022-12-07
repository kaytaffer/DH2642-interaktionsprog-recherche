function startScreenView(props){

    function buttonClickedACB() {
        props.onGameStart();
    }

    return (
        <div>
            <button onClick={buttonClickedACB}>Start game</button>
        </div>
    );
}
export default startScreenView;