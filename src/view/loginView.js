function LoginView(props) {

    function loginACB(e) {
        e.preventDefault();
        props.onLogin(document.getElementById("loginEmail").value,
            document.getElementById("loginPassword").value);
    }

    function createAccountACB(e) {
        e.preventDefault();
        props.onCreateAccount(document.getElementById("createAccountName").value,
            document.getElementById("createAccountEmail").value,
            document.getElementById("createAccountPassword").value);
    }

    return <div id="login">
        <h2>Login</h2>
        <form onSubmit={loginACB}>
            <div>
                <label>Email</label>
                <input type="email" id="loginEmail" placeholder="email" className="loginInput"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" id="loginPassword" placeholder="password" className="loginInput"/>
            </div>
            <input type="submit" id="submitLogin" className="button"/>
        </form>
        {props.error && props.error.form === 'login' && <p className="error">{props.error.error}</p>}

        <h2>Create Account</h2>
        <form onSubmit={createAccountACB}>
            <div>
                <label>Name</label>
                <input type="name" id="createAccountName" placeholder="name" className="loginInput"/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" id="createAccountEmail" placeholder="email" className="loginInput"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" id="createAccountPassword" placeholder="password" className="loginInput"/>
            </div>
            <input type="submit" id="submitCreateAccount" className="button"/>
        </form>
        {props.error && props.error.form === 'createAccount' && <p className="error">{props.error.error}</p>}
    </div>
}

export default LoginView;