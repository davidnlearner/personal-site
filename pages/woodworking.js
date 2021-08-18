/* eslint-disable @next/next/no-img-element */
import Page from "../components/Page";
import WoodProject from "../components/WoodProject";
import siteData from "../public/data/site-data.json";
import { SRLWrapper } from "simple-react-lightbox";
import styles from "../styles/Woodworking.module.scss";
import image from "next/image";

import { ImageList, ImageListItem } from "@material-ui/core";

export default function Woodworking() {
    const images = siteData.woodProjects.map((image) => ({
        ...image,
        src: "https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39.1605559903.fit_scale.size_760x427.png",
    }));

    return (
        <Page title="Woodworking">
            <SRLWrapper>
                <ImageList
                    sx={{ width: 500, height: 400 }}
                    cols={3}
                    rowHeight={400}
                >
                    {siteData.woodProjects.map((project) => {
                        return (
                            <ImageListItem key={project.title}>
                                <img
                                    alt={project.caption}
                                    title={project.title}
                                    src={project.src}
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>
                {/* <div className={styles["project-box"]}>
                    {siteData.woodProjects.map((project) => (
                        <div
                            key={project.title}
                            className={styles["image-wrapper"]}
                        >
                            <a
                                href={project.src}
                                className={styles["wood-image-link"]}
                            >
                                <img
                                    src={project.src}
                                    title={project.title}
                                    caption={project.caption}
                                    height={project.height}
                                    width={project.width}
                                    srl_gallery_image="true"
                                    alt={project.caption}
                                    className={styles["wood-image"]}
                                />
                            </a>
                        </div>
                    ))}
                </div> */}
            </SRLWrapper>
        </Page>
    );
}
/*
<div className={styles["project-box"]}>
    {siteData.woodProjects.map((project) => (
        <WoodProject
            {...project}
            key={project.title}
            className={styles["wood-project"]}
        />
    ))}
</div>
*/
