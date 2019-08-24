import React from "react";
import Styled from 'styled-components';
import Layout from '../components/layout';

const Flex = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
`;

const NotFoundPage = (): JSX.Element => (
    <Layout>
        <Flex>
            <p>Page Not Found</p>
        </Flex>
    </Layout>
);

export default NotFoundPage;
