import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
    return (
        <div>
            <Header siteTitle="David Learner - Projects" />
            <Navbar currentPage="Projects" />

            <main className={styles.main}>
                <h1 className={styles.title}>Projects</h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.js</code>
                </p>
            </main>

            <Footer />
        </div>
    );
}
