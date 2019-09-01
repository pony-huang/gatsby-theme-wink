import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../header";
import Footer from "../footer";

interface Props {
    title: string;
    description: string;
    children: React.ReactElement;
}

const IndexPage = (props: Props): React.ReactElement => (
    <Fragment>
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
        </Helmet>
        <Header />
        {props.children}
        <Footer />
    </Fragment>
);

export default IndexPage;
