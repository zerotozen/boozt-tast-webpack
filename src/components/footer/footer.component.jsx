import React from "react";
import "./footer.styles.scss";

export function Footer() {
  return (
    <div className="footer__container">
      <ul className="footer__list-container">
        <li className="footer__list-element">Terms and conditions</li>
        <li className="footer__list-element">GDPR & personal data</li>
        <li className="footer__list-element">Cookie policy</li>
        <li>Update cookie settings</li>
      </ul>
      <div className="footer__label">@ BOOZT.COM 2021 By Alex Wong</div>
    </div>
  );
}
