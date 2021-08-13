import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div>
            <Header siteTitle="David Learner - About" />
            <Navbar currentPage="About" />
            <main className={styles.main}>
                <h1 className={styles.title}>About</h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.js</code>
                </p>
            </main>

            <Footer />
        </div>
    );
}
