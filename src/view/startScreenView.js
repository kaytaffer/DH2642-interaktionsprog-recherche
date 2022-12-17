function StartScreenView(props){

   function buttonClickedACB(){
        props.onGameStart();
    }
    return (
        <div id="start">
            <h1>Welcome</h1>
            <p className="instruction">Recherché is a game about finding the most rare synonyms to a given word.</p>
            <button className="button" onClick={buttonClickedACB}>Start game</button>
            <span className="rulesFromStart">or <props.Link to='/rules'>read the rules</props.Link> first</span>
        </div>
    );
}
export default StartScreenView;
