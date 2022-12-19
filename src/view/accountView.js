function AccountView(props) {

    return <div id="account">
        <h2>{props.userDisplayName}</h2>
        <h3>{props.userEmail}</h3>
        {props.bestWord && (
            <div className="statContainer">
                <h4>best word:</h4>
                <div className="innerStatContainer">
                    <h1 className="bestWord">{props.bestWord.word}</h1>
                    <span className="points number"> {props.bestWord.points.toFixed(0)} points</span>
                </div>
            </div>
        )}
        <button onClick={props.onSignOut} className="button">Log out</button>
    </div>
}

export default AccountView;