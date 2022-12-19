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
            <label>Email</label>
            <input type="email" id="loginEmail" placeholder="email"/>
            <label>Password</label>
            <input type="password" id="loginPassword" placeholder="password"/>
            <input type="submit" id="submitLogin"/>
        </form>
        {props.error && props.error.form === 'login' && <p className="error">{props.error.error}</p>}

        <h2>Create Account</h2>
        <form onSubmit={createAccountACB}>
            <label>Name</label>
            <input type="name" id="createAccountName" placeholder="name"/>
            <label>Email</label>
            <input type="email" id="createAccountEmail" placeholder="email"/>
            <label>Password</label>
            <input type="password" id="createAccountPassword" placeholder="password"/>
            <input type="submit" id="submitCreateAccount"/>
        </form>
        {props.error && props.error.form === 'createAccount' && <p className="error">{props.error.error}</p>}
    </div>
}

export default LoginView;