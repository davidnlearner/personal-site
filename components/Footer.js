import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <footer>
            <SocialIcon
                url="https://www.instagram.com/david.learner/"
                bgColor="black"
                fgColor="white"
            />
            <SocialIcon
                url="mailto:david.learner@gmail.com"
                bgColor="black"
                fgColor="white"
            />
            <SocialIcon
                url="https://github.com/davidnlearner"
                bgColor="black"
                fgColor="white"
            />
            <SocialIcon
                url="https://www.linkedin.com/in/david-learner/"
                bgColor="black"
                fgColor="white"
            />
        </footer>
    );
};

export default Footer;
