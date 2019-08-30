import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Styled from "styled-components";
import Header from "../header";
import Footer from "../footer";

interface Props {
    title: string;
    description: string;
    children: React.ReactElement;
}

const ContentWrapper = Styled.div`
    margin-top: 64px;
`;

const IndexPage = (props: Props): JSX.Element => (
    <Fragment>
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
        </Helmet>
        <Header />
        <ContentWrapper>{props.children}</ContentWrapper>
        <Footer />
    </Fragment>
);

export default IndexPage;
