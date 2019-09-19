import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../header";
import Footer from "../footer";

interface Props {
    title: string;
    description: string;
    children: React.ReactElement;
    siteMeta: Wink.Site;
}

export const Layout = (props: Props): React.ReactElement => (
    <Fragment>
        <Helmet>
            <html lang="en" />
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
        </Helmet>
        <Header siteMeta={props.siteMeta} />
        {props.children}
        <Footer siteMeta={props.siteMeta} />
    </Fragment>
);
