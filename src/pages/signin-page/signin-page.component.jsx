import { useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { IoKeyOutline } from "react-icons/io5";

import "./signin-page.styles.scss";

export function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="signin-page__container">
      <div className="signin-page__subcontainer">
        <h1 className="signin__title">LOGIN TO YOUR BOOZT.COM ACCOUNT</h1>
        <small className="signin__subtitle">
          Enter your information below to login to your account
        </small>
        <form className="signin__form" onSubmit={handleSubmit}>
          <div className="signin__input-container">
            <AiOutlineUser size={25} />
            <input
              className="signin__input"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              label="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="signin__input-container">
            <IoKeyOutline size={25} />
            <input
              className="signin__input"
              name="password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              label="password"
              autoComplete="off"
              placeholder="Password"
              required
            />
          </div>
        </form>
        <div className="signin__button-container">
          <button className="signin__button signin__button--signin">
            SIGN IN
          </button>
          <button className="signin__button signin__button--facebook">
            Sign in with Facebook
          </button>
          <button className="signin__button signin__button--google">
            Sign in with Google
          </button>
          <button className="signin__button signin__button--apple">
            Sign in with Apple
          </button>
          <a className="signin__link">Crete account</a>
        </div>
      </div>
    </div>
  );
}
