import React from "react";
import Image from "next/image";
import styles from "../styles/WoodProject.module.scss";

const WoodProject = ({ title, imageSrc, description }) => {
    return (
        <div className={styles["project-wrapper"]}>
            <div className={styles["image-wrapper"]}>
                <Image
                    width={300}
                    height={200}
                    layout="intrinsic"
                    className={styles.image}
                    src={imageSrc}
                    alt="project picture"
                />
            </div>

            <p className={styles["image-description"]}>{description}</p>
        </div>
    );
};

export default WoodProject;
