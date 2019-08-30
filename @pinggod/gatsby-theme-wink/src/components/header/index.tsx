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
    padding: 48px 24px;
`;

const LogoIcon = Styled(Icon).attrs({
    type: 'water-flash',
})`
    padding-right: 4px;
    font-size: 24px !important;
    vertical-align: middle;
`;

const Title = Styled(InnerLink).attrs({
    to: '/',
})`
    height: 64px;
    margin-left: -16px;
    padding: 0 16px;
    line-height: 64px;
    font-size: 16px;
    font-weight: 700;
    font-family: Cereal;
`;

const SearchIcon = Styled(Icon).attrs({
    type: 'search',
})`
    height: 64px;
    line-height: 64px;
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
