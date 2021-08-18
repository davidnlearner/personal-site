import React from "react";
import Image from "next/image";
import styles from "../styles/Project.module.scss";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Project = ({ imageSrc, title, description, projectURL, githubURL }) => {
    return (
        <div className={styles["project-wrapper"]}>
            <h2 className={styles["image-title"]}>{title}</h2>
            <div className={styles["image-wrapper"]}>
                <a
                    href={projectURL}
                    passHref={true}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        width={600}
                        height={400}
                        layout="intrinsic"
                        className={styles.image}
                        src={imageSrc}
                        alt="project picture"
                    />
                </a>
            </div>
            <div className={styles["image-description-box"]}>
                <p className={styles["image-description"]}>{description}</p>
                <div className={styles["social-icon-box"]}>
                    <SocialIcon
                        className={styles["social-icon"]}
                        url={githubURL}
                        bgColor="black"
                        fgColor="white"
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;
