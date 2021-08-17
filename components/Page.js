import styles from "../styles/Page.module.scss";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page({ title, children, sidePadding = true }) {
    return (
        <div>
            <Header siteTitle={`David Learner - ${title}`} />
            <Navbar currentPage={title} />

            <main
                className={styles.main}
                style={{ padding: sidePadding ? "5rem 1rem" : "5rem 0" }}
            >
                <h1 className={styles.title}>{title}</h1>

                {children}
            </main>

            <Footer />
        </div>
    );
}
