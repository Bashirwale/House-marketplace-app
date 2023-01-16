import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onChange = (e) => setEmail(e.target.value);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("email was sent");
    } catch (error) {
      toast.error("could not send email Reset");
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="email"
            onChange={onChange}
            className="emailInput"
          />
          <Link className="forgotPasswordLink" to="/sign-in">
            Sign In
          </Link>
          <div className="signInBar">
            <div className="signInText">Send Reset Email</div>
            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34pxs" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
