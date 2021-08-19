/* eslint-disable @next/next/no-img-element */
import Page from "../components/Page";
import siteData from "../public/data/site-data.json";
import { SRLWrapper } from "simple-react-lightbox";

import styles from "../styles/Woodworking.module.scss";
import useMediaQuery from "../components/utils/useMediaQuery";

const renderGalleryImage = (projectData) => {
    return (
        <div className={styles["image-wrapper"]} key={projectData.title}>
            <img
                className={styles["gallery-image"]}
                alt={projectData.caption}
                {...projectData}
            />
            <div className={styles["photo-caption"]}>
                <div className={styles["caption-text"]}>
                    {projectData.caption}
                </div>
            </div>
        </div>
    );
};

const renderGalleryRow = (
    projects,
    startIndex,
    endIndex,
    gridTemplateColumns
) => {
    return (
        <div
            className={`${styles["gallery-row"]}`}
            style={{ gridTemplateColumns }}
            key={`${startIndex}-${endIndex}`}
        >
            {projects
                .slice(startIndex, endIndex)
                .map((project) => renderGalleryImage(project))}
        </div>
    );
};

export default function Woodworking() {
    const oneColBreakpoint = useMediaQuery(768);
    // const twoColBreakpoint = useMediaQuery(1000);

    const projects = siteData.woodProjects;

    //Must be changed if adding more projects
    const templateRows = [
        { startIndex: 0, endIndex: 2, gridTemplateColumns: "6fr 10fr" },
        { startIndex: 2, endIndex: 5, gridTemplateColumns: "4fr 4fr 6fr" },
        { startIndex: 5, endIndex: 8, gridTemplateColumns: "6fr 3fr 4fr" },
    ];

    return (
        <Page title="Woodworking">
            <SRLWrapper>
                {oneColBreakpoint ? (
                    <div className={`${styles["gallery-grid"]}`}>
                        {projects.map((project) => renderGalleryImage(project))}
                    </div>
                ) : (
                    <div className={`${styles["gallery-grid"]}`}>
                        {templateRows.map(
                            ({ startIndex, endIndex, gridTemplateColumns }) =>
                                renderGalleryRow(
                                    projects,
                                    startIndex,
                                    endIndex,
                                    gridTemplateColumns
                                )
                        )}
                    </div>
                )}
            </SRLWrapper>
        </Page>
    );
}
