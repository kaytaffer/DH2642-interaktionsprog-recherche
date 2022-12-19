function AccountView(props) {

    function formatDate(date) {
        return date.getDate() + ' ' + date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear();
    }

    return <div id="account">
        <h2>{props.userDisplayName}</h2>
        <h3>{props.userEmail}</h3>
        <div className="containerForAllStats">
            {props.bestWord && (
                <div className="statContainer">
                    <h4>best word:</h4>
                    <div className="innerStatContainer">
                        <h1 className="bestWord">{props.bestWord.word}</h1>
                        <span className="points number"> {props.bestWord.points.toFixed(0)} points</span>
                    </div>
                </div>
            )}
            {props.bestGame && (
                <div className="statContainer">
                    <h4>best game:</h4>
                    <div className="innerStatContainer">
                        <h1 className="bestWord">{formatDate(new Date(props.bestGame.date))}</h1>
                        <span className="points number"> {props.bestGame.score.toFixed(0)} points</span>
                    </div>
                </div>
            )}
        </div>
        <button onClick={props.onSignOut} className="button">Log out</button>
    </div>
}

export default AccountView;