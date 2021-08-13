import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import useMediaQuery from "./utils/useMediaQuery";
import styles from "../styles/Navbar.module.scss";
import burgerStyles from "../styles/burgerMenu";

const Navbar = ({ currentPage = "" }) => {
    const isBreakpoint = useMediaQuery(768);

    const renderLinks = () => {
        return (
            <div className={styles["link-box"]}>
                <Link href="/about">
                    <a
                        className={`${styles.link} ${
                            currentPage === "About" && styles["active-link"]
                        }`}
                    >
                        About
                    </a>
                </Link>

                <Link href="/projects">
                    <a
                        className={`${styles.link} ${
                            currentPage === "Projects" && styles["active-link"]
                        }`}
                    >
                        Projects
                    </a>
                </Link>

                <Link href="/woodworking">
                    <a
                        className={`${styles.link} ${
                            currentPage === "Woodworking" &&
                            styles["active-link"]
                        }`}
                    >
                        Woodworking
                    </a>
                </Link>
            </div>
        );
    };

    return (
        <header>
            <nav className={styles.navbar}>
                <Link href="/">
                    <a className={styles["home-link"]}>David Learner</a>
                </Link>
                {isBreakpoint ? (
                    <Menu right styles={burgerStyles}>
                        {renderLinks()}
                    </Menu>
                ) : (
                    renderLinks()
                )}
            </nav>
        </header>
    );
};

export default Navbar;
