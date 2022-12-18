function AccountView(props) {
    return <div id="account">
        <h2>Account</h2>
        <p>{props.userId}</p>
        <button onClick={props.onSignOut}>Log out</button>
    </div>
}

export default AccountView;