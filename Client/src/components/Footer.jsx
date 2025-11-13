import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-about">
        <h2 className="footer-logo">Edu-Bridge</h2>
          <p>
            Edu-Bridge is your AI-powered learning companion — designed to make
            education smarter, faster, and accessible everywhere. We blend technology
            with human guidance to help every learner reach their full potential.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/language">Language</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@edubridge.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Pune, India</p>
        </div>

        {/* Socials */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Edu-Bridge | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
