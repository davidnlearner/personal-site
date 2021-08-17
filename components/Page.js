import styles from "../styles/Page.module.scss";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page({ title, children }) {
    return (
        <div>
            <Header siteTitle={`David Learner - ${title}`} />
            <Navbar currentPage={title} />

            <main className={styles.main}>
                <h1 className={styles.title}>{title}</h1>

                {children}
            </main>

            <Footer />
        </div>
    );
}
