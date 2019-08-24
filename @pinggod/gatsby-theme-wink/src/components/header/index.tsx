import React from 'react';
import Styled from 'styled-components';
import { capitalize } from 'lodash';
import { A } from '../a';
import { Icon } from '../Icon';

const Wrapper = Styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    background: white;
`;

const Head = Styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    height: 64px;
    margin: 0 auto;
`;

const LogoIcon = Styled(Icon).attrs({
    type: 'water-flash',
})`
    padding-right: 4px;
    font-size: 24px !important;
    vertical-align: middle;
`;

const Title = Styled(A).attrs({
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

const Nav = Styled.nav`
    display: flex;
    align-items: center;
`;

const NavItem = Styled(A)`
    height: 64px;
    line-height: 64px;
    padding: 0 16px;
    font-size: 16px;
    font-weight: 300;
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

const Header = () => {
    let menu = '';

    if (typeof window !== 'undefined') {
        menu = window ? window.location.pathname.split('/')[1] : '';
    }

    return (
        <Wrapper>
            <Head>
                <Title>
                    <LogoIcon />
                    REXLNT
                    {menu && `  /  ${capitalize(menu)}`}
                </Title>
                <Nav>
                    <NavItem to="/articles">Articles</NavItem>
                    <NavItem to="/projects">Projects</NavItem>
                    <NavItem to="/about">About</NavItem>
                    <SearchIcon/>
                </Nav>
            </Head>
        </Wrapper>
    );
};

export default Header;
