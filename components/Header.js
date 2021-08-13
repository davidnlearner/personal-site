import React from "react";
import Head from "next/head";

const Header = ({
    siteTitle = "David Learner",
    description = "David Learner's portfolio site.",
}) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="theme-color" content="#f3f3f3" />

            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description}></meta>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
};

export default Header;
