import './loginstyles.css';
function Login() {
  return (
    <div className="Login">
    <div className="wrapper fadeInDown">
        <div id="formContent">
            <div className="fadeIn first">
            </div>

            <form>
                <input type="text" id="login" className="fadeIn second mt-5" name="login" placeholder="login"/>
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
                <input type="submit" className="fadeIn fourth" value="Log In"/>
            </form>

            <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
            </div>

        </div>
    </div>
    </div>
  );
}

export default Login;