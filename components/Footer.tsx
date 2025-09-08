"use client";

import React from 'react';
import {FaLinkedinIn,  FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={18} />,
      url: 'https://github.com/Aakash52thade',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn size={18} />,
      url: 'https://www.linkedin.com/in/akash-bawanthade-190423205/',
    },
    {
      name: 'X',
      icon: <FaXTwitter size={18} />,
      url: 'https://x.com/yourusername',
    },
  ];

  return (
    <footer className="relative bg-black-100 border-t border-white/[0.1] mt-4">      
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-200 hover:text-purple transition-colors duration-300 p-2 hover:scale-110 transform transition-transform"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white-200 text-sm">
              © {currentYear} Akash Bawanthade. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;