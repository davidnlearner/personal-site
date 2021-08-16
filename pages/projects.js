import Page from "../components/Page";
import Project from "../components/Project";
import styles from "../styles/Project.module.scss";

import siteData from "../public/data/site-data.json";

export default function Projects() {
    return (
        <Page title="Projects">
            {siteData.codeProjects.map((project) => (
                <Project {...project} key={project.title} />
            ))}
        </Page>
    );
}
