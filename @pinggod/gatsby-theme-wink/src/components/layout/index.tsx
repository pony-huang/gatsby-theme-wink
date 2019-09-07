import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../header";
import Footer from "../footer";

interface Props {
    title: string;
    description: string;
    children: React.ReactElement;
}

export const Layout = (props: Props): React.ReactElement => (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="shortcut icon" href="/favicon.ico" />
        </Helmet>
        <Header />
        {props.children}
        <Footer />
    </Fragment>
);
