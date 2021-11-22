import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            SAND<span>BOX</span>
          </h3>

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="#">Apple</a>

            <a href="#">Samsung</a>

            <a href="#">Xiomi</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">SandBox © 2021</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Tabyshalieva 29</span>Kyrgyzstan Bishkek
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+996 555.555.555</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:sandBoxt@company.com">sandBox@company.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Your favourite SandBox
          </p>

          <div class="a">
            <a href="#">Instagram</a>
            <br />
            <a href="#">FaceBook</a>
            <br />
            <a href="#">Twitter</a>
            <br />
            <a href="#">SandBox.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
