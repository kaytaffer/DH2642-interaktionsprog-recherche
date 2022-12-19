function AccountView(props) {

    return <div id="account">
        <h2>Account</h2>
        <p>email: {props.userEmail}</p>
        <p>displayname: {props.userDisplayName}</p>
        {props.bestWord && <p>best word: {props.bestWord.word} points: {props.bestWord.points.toFixed(0)}</p>}
        <button onClick={props.onSignOut}>Log out</button>
    </div>
}

export default AccountView;