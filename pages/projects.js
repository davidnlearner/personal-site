import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Projects() {
    return (
        <div>
            <Header siteTitle="David Learner - Projects" />
            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>Projects</h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.js</code>
                </p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
