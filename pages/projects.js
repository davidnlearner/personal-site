import Page from "../components/Page";
import Project from "../components/Project";

import siteData from "../public/data/site-data.json";

export default function Projects() {
    const addProjects = () => {};

    return (
        <Page title="Projects">
            {siteData.projects.map((project) => (
                <Project {...project} key={project.title} />
            ))}
        </Page>
    );
}
