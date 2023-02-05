import Image from "next/image";
import styles from "../styles/About.module.scss";
import Page from "../components/Page";

import profilePic from "../public/profile-pic1.jpg";

export default function About() {
    const bioText =
        "I'm a software engineer working for The Home Depot on their Search Team. " +
        "I'm doing mostly backend development in Java (both Spring Boot/Maven and Micronaut/Gradle) and Python.  " +
        "We use Google Cloud Services, and work closely with our data science team to deploy ranking models.  " +
        "I've previously done side projects using Node.js, Vue, and React.";
    // "During the bootcamp, I formalized my programming skills " +
    // "and learned full-stack Java web development. I’ve used Java, Python, and Javascript " +
    // "during the program and have worked on side projects using Node.js, Vue, and React.";

    return (
        <Page title="About">
            <div className={styles["profile-layout"]}>
                <div className={styles["profile-pic"]}>
                    <Image
                        priority={true}
                        layout="intrinsic"
                        src={profilePic}
                        alt="profile-pic"
                    />
                </div>
                <p className={styles["bio-text"]}>{bioText}</p>
            </div>
        </Page>
    );
}
