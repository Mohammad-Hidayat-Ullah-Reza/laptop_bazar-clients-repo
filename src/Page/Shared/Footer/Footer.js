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
        <span className="footer-title text-blue-900">Services</span>
        <Link className="link link-hover text-blue-900">Branding</Link>
        <Link className="link link-hover text-blue-900">Design</Link>
        <Link className="link link-hover text-blue-900">Marketing</Link>
        <Link className="link link-hover text-blue-900">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title text-blue-900">Company</span>
        <Link className="link link-hover text-blue-900">About us</Link>
        <Link className="link link-hover text-blue-900">Blog</Link>
        <Link className="link link-hover text-blue-900">Dashboard</Link>
        <Link className="link link-hover text-blue-900">Press kit</Link>
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
