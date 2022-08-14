import "./register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register </span>
      <form className="registerForm">
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Enter you Email ..." />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter you password..." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}
export default Register;
