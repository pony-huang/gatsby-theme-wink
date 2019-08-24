import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';
import Styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import pkg from '../../../package.json';

const ContentWrapper = Styled.div`
    margin-top: 64px;
`;

const IndexPage = (props: any): JSX.Element => (
    <Fragment>
        <Helmet>
            <title>
                {pkg.description}
            </title>
        </Helmet>
        <Header />
        <ContentWrapper>
            {props.children}
        </ContentWrapper>
        <Footer />
    </Fragment>
);

export default IndexPage;
