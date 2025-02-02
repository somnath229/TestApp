import React from 'react'
import "../style/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div
        style={{
          width: "70%",
          margin: "4rem auto 1rem ",
        }}>
        <img
          className="avatar"
          src="https://media.istockphoto.com/id/1455313036/vector/quiz-time-geometric-badge-with-question-mark-emblem-banner-design-for-business-and.jpg?s=612x612&w=0&k=20&c=jlzdXk84Lcx3uZMzjmkLA-ovPUNsFtmQRtcdsF2vFyE="
          style={{
            width: "100%",
            height: "20rem",
          }}
        />
      </div>
      <div>
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-column">
              <h4>Get to Know Us</h4>
              <ul>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Make Money with Us</h4>
              <ul>
                <li>
                  <a href="#">Sell on E-Test</a>
                </li>
                <li>
                  <a href="#">Sell on E-Test Business</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>E-test Payment Products</h4>
              <ul>
                <li>
                  <a href="#">E-Test Business Card</a>
                </li>
                <li>
                  <a href="#">E-Test Business Card</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Let Us Help You</h4>
              <ul>
                <li>
                  <a href="#">Test and COVID-19</a>
                </li>
                <li>
                  <a href="#">Your Account</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {currentYear} DemoTest. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
