import React from "react";
import Image from "next/image";
import styles from "../styles/Project.module.scss";
import Link from "next/link";

const Project = ({ imageSrc, title, description, projectURL }) => {
    console.log(imageSrc, title, description, projectURL);

    return (
        <div className={styles["image-wrapper"]}>
            <h2 className={styles["image-title"]}>{title}</h2>
            <Link href={projectURL} passHref={true}>
                <Image
                    width={300}
                    height={500}
                    className={styles.image}
                    src={imageSrc}
                    alt="Picture of the author"
                />
            </Link>
            <p className={styles["image-description"]}>{description}</p>
        </div>
    );
};

export default Project;
