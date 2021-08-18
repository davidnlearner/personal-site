import Image from "next/image";
import styles from "../styles/About.module.scss";
import Page from "../components/Page";

import profilePic from "../public/profile-pic1.jpg";

export default function About() {
    const bioText =
        "Hi, I'm David Learner. I'm a Chicagoan with a background in woodworking, " +
        "and computer programming. I have over three years of experience creating fine wood tables " +
        "and bowls using a variety of different woods and techniques, including programming a CNC " +
        "and digitally modeling my projects. My passion for creating solutions for complex challenges " +
        "has led me to learning a variety of new skills, including programming in Python, Java, and JavaScript. " +
        "I'm looking for a full-time computer programming position where I can continue to pursue my desire to learn " +
        "and expand my skills.";

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
