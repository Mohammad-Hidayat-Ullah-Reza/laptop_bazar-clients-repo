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
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Branding</Link>
        <Link className="link link-hover">Design</Link>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Blog</Link>
        <Link className="link link-hover">Dashboard</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/">
            <FaTwitter className="text-2xl"></FaTwitter>
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube className="text-2xl"></FaYoutube>
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook className="text-2xl"></FaFacebook>
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin className="text-2xl"></FaLinkedin>
          </a>
          <a href="https://github.com/">
            <FaGithub className="text-2xl"></FaGithub>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
