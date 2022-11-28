import React from "react";
import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-100 text-base-content">
      <div>
        <span className="footer-title text-blue-900">Laptop Categories</span>
        <Link className="link link-hover text-blue-900">Casual Laptop</Link>
        <Link className="link link-hover text-blue-900">Gaming Laptop</Link>
        <Link className="link link-hover text-blue-900">Premium Laptop</Link>
      </div>
      <div>
        <span className="footer-title text-blue-900">Company</span>
        <Link className="link link-hover text-blue-900">About us</Link>
        <Link to="/blog" className="link link-hover text-blue-900">
          Blog
        </Link>
        <Link to="/dashboard" className="link link-hover text-blue-900">
          Dashboard
        </Link>
        <Link to="/" className="link link-hover text-blue-900">
          advertisement
        </Link>
      </div>
      <div>
        <span className="footer-title text-blue-900">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/">
            <FaTwitter className="text-2xl text-blue-900"></FaTwitter>
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube className="text-2xl text-blue-900"></FaYoutube>
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook className="text-2xl text-blue-900"></FaFacebook>
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin className="text-2xl text-blue-900"></FaLinkedin>
          </a>
          <a href="https://github.com/">
            <FaGithub className="text-2xl text-blue-900"></FaGithub>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
