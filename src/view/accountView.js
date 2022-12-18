function AccountView(props) {
    function changeDisplayNameACB(e) {
        e.preventDefault();
        props.onChangeDisplayName(document.getElementById("newDisplayName").value);
        document.location.reload()
    }

    return <div id="account">
        <h2>Account</h2>
        <p>email: {props.userEmail}</p>
        <p>displayname: {props.userDisplayName}</p>
        {props.bestWord && <p>best word: {props.bestWord.word} points: {props.bestWord.points.toFixed(0)}</p>}
        <form onSubmit={changeDisplayNameACB}>
            <label>new display name</label>
            <input type="text" id="newDisplayName" placeholder="New Display Name"/>
            <input type="submit" id="submitNewDisplayName"/>
        </form>
        <button onClick={props.onSignOut}>Log out</button>
    </div>
}

export default AccountView;