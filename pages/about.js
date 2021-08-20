import Image from "next/image";
import styles from "../styles/About.module.scss";
import Page from "../components/Page";

import profilePic from "../public/profile-pic1.jpg";

export default function About() {
    const bioText =
        "I'm a Chicagoan seeking an entry level software engineering role. " +
        "I recently graduated from the Tech Elevator bootcamp. " +
        "During the bootcamp, I formalized my programming skills " +
        "and learned full-stack Java web development. I’ve programmed in Java, Python, and Javascript " +
        "during the program and have worked on side projects using Node.js, Vue, and React.";

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
