import React from "react";
import Image from "next/image";
import styles from "../styles/Project.module.scss";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Project = ({ imageSrc, title, description, projectURL, githubURL }) => {
    return (
        <div className={styles["project-wrapper"]}>
            <div className={styles["title-wrapper"]}>
                <h2 className={styles["image-title"]}>{title}</h2>
                <SocialIcon
                    className={styles["social-icon"]}
                    url={githubURL}
                    bgColor="black"
                    fgColor="white"
                />
            </div>
            <div className={styles["project-tile"]}>
                <a
                    href={projectURL}
                    passhref={"true"}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className={styles["image-wrapper"]}>
                        <div className={styles["image-description-box"]}>
                            <div className={styles["image-description"]}>
                                {description}
                            </div>
                        </div>
                        <Image
                            width={600}
                            height={400}
                            layout="responsive"
                            className={styles.image}
                            src={imageSrc}
                            alt="project picture"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Project;
