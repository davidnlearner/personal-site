import Page from "../components/Page";
import WoodProject from "../components/WoodProject";
import siteData from "../public/data/site-data.json";
import styles from "../styles/Woodworking.module.scss";

export default function Woodworking() {
    return (
        <Page title="Woodworking">
            <div className={styles["project-box"]}>
                {siteData.woodProjects.map((project) => (
                    <WoodProject
                        {...project}
                        key={project.title}
                        className={styles["wood-project"]}
                    />
                ))}
            </div>
        </Page>
    );
}
