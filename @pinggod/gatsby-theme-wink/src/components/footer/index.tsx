import React from 'react';
import Styled from 'styled-components';
import { A } from '../a';
import { Icon } from '../Icon';

const Wrapper = Styled.footer`
    display: flex;
    align-items: center;
    max-width: 1280px;
    height: 64px;
    margin: 0 auto;
`;

const Copyright = Styled.span`
    display: flex;
    align-items: center;
    height: 64px;
    line-height: 64px;
    font-size: 16px;
    font-weight: 300;
`;

const Footer = () => {
    return (
        <Wrapper>
            <Copyright>
                <Icon type="heart-2" />
                &nbsp;
                {new Date().getUTCFullYear()}
                &nbsp;
                <A to="/about">Zeno Sun</A>
            </Copyright>
        </Wrapper>
    );
}

export default Footer;
