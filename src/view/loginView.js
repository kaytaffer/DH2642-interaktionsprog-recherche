function LoginView(props) {

    function loginACB(e) {
        e.preventDefault();
        props.onLogin(document.getElementById("email").value,
            document.getElementById("password").value);
    }

    return <div id="login">
        <h2>Login</h2>
        <form onSubmit={loginACB}>
            <label>Email</label>
            <input type="email" id="email" placeholder="email"/>
            <label>Password</label>
            <input type="password" id="password" placeholder="password"/>
            <input type="submit" id="submit"/>
        </form>

        <form>

        </form>
    </div>
}

export default LoginView;