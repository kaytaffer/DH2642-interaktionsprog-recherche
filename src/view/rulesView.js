function rulesView(props){

    const gradientStyle = {background: "linear-gradient(90deg, #7165FA "
            + (20)
            + "%, rgba(217, 217, 217, 0) "
            + (20)
            + "%)"};

    return (
        <div id="rules">
            <h2>Rules</h2>
            <p>Recherché is a game about finding the most rare synonyms to a given word.
                It consists of {props.rounds} rounds, and the goal is to get as many points as possible.</p>

            <p>When you start a game, you'll see a word on the screen.</p>
            <div className="gameExample">
                <div className="roundContainer">
                    <span className="roundDescription">round 1 of 5</span>
                    <div id="roundProgressBar" style={gradientStyle}/>
                </div>

                <div className="timeContainer">
                    <span className="timeDescription">time left</span>
                    <div className="time"> 00:29</div>
                </div>
                <h1 className="givenWord">[recherché]</h1>

                <input className="wordInput" type = "text"
                       placeholder="Give us your best synonyms..."
                       id="wordInput"
                       style={{ width:"270px" }}
                        disabled={true}/>
                <button className="button" disabled={true}>Send</button>

                <ul className="wordList">
                    <li>obscure</li>
                    <li>rare</li>
                    <li>common</li>
                </ul>
            </div>
            <p>Above the word, you can see what round you're on, and how much time is left
                of the round. Write one synonym at a time, and press
                enter or click the button. Below the input box, you will see a list of
                your entered synonyms.</p>
            <p>When the time is up, you'll see your scores for the round.</p>

            <div className="gameExample">
                <h1 className="givenWord">[recherché]</h1>

                <h3>Your synonyms:</h3>
                <table className="userSynonyms">
                    <tbody>
                    <tr><td>obscure</td><td>100</td></tr>
                    <tr><td>rare</td><td>50</td></tr>
                    <tr><td><span className="strikethrough">common</span></td></tr>
                    </tbody>
                </table>
                <p>
                    Score this round: <span className="number">150</span>
                </p>
                <p>
                    Total score: <span className="number">150</span>
                </p>

                <props.Accordion title="Definitions">
                    <ol className="definitions">
                        <li>Exquisite; lavishly elegant and refined.</li>
                        <li>Exotic or obscure.</li>
                    </ol>
                </props.Accordion>

                <props.Accordion title="Example synonyms">
                    <ul className="wordList">
                        <li>rare</li>
                        <li>uncommon</li>
                        <li>original</li>
                    </ul>
                </props.Accordion>
            </div>

            <p>Rare words give higher scores. How rare a word is is determined by how often it
            is used in the English language. Words that are not correct synonyms give no points.</p>

            <p>Along with the score, you can also see the definition of the word, and some example
                synonyms. Click the title to see the content.</p>

            <p>After four more rounds, the game is over. If your score was in the top 10, you can
            enter your name to be added to the {props.highScoreLink}.</p>
            <div className="rulesButtonContainer">
                <button className="button" onClick={props.onClickPlay}>Play the game!</button>
            </div>

        </div>
    );
}
export default rulesView;