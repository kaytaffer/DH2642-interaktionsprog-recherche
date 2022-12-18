function LoginView(props) {

    function loginACB(e) {
        e.preventDefault();
        props.onLogin(document.getElementById("loginEmail").value,
            document.getElementById("loginPassword").value);
    }

    function createAccountACB(e) {
        e.preventDefault();
        props.onCreateAccount(document.getElementById("createAccountEmail").value,
            document.getElementById("createAccountPassword").value);
    }

    return <div id="login">
        <h2>Login</h2>
        <form onSubmit={loginACB}>
            <label>Email</label>
            <input type="email" id="loginEmail" placeholder="email"/>
            <label>Password</label>
            <input type="password" id="loginPassword" placeholder="password"/>
            <input type="submit" id="submit"/>
        </form>

        <h2>Create Account</h2>
        <form onSubmit={createAccountACB}>
            <label>Email</label>
            <input type="email" id="createAccountEmail" placeholder="email"/>
            <label>Password</label>
            <input type="password" id="createAccountPassword" placeholder="password"/>
            <input type="submit" id="submit"/>
        </form>
    </div>
}

export default LoginView;