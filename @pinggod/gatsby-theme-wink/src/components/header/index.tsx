import React from 'react';
import Styled from 'styled-components';
import { InnerLink } from '../link';
import { Icon } from '../Icon';

const Wrapper = Styled.div`
    background: white;
`;

const Head = Styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 0;
`;

const LogoIcon = Styled(Icon).attrs({
    type: 'sailboat',
})`
    padding-right: 4px;
    font-size: 24px !important;
    vertical-align: sub;
`;

const Title = Styled(InnerLink).attrs({
    to: '/',
})`
    font-size: 16px;
    font-family: Cereal;
`;

const SearchIcon = Styled(Icon).attrs({
    type: 'search',
})`
    margin-right: -16px;
    padding: 0 16px;
    font-size: 16px;
    cursor: pointer;
`;

const Header = (): JSX.Element => {
    return (
        <Wrapper>
            <Head>
                <Title>
                    <LogoIcon />
                    REXLNT
                </Title>
                <SearchIcon />
            </Head>
        </Wrapper>
    );
};

export default Header;
