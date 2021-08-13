import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header siteTitle="David Learner" />
            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>Home</h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.js</code>
                </p>
            </main>

            <Footer />
        </div>
    );
}
