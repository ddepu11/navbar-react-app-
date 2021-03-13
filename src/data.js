import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/servises",
    text: "services",
  },
  {
    id: 5,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.github.com",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },

  {
    id: 5,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
];
