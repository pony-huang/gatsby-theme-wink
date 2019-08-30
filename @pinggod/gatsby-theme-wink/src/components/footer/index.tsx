import React from "react";
import Styled from "styled-components";
import { Icon } from "../Icon";

const Wrapper = Styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 0;
`;

const Copyright = Styled.span`
    display: flex;
    align-items: center;
    height: 64px;
    line-height: 64px;
    font-size: 16px;
    font-weight: 300;
`;

const Footer = (): JSX.Element => {
    return (
        <Wrapper>
            <Copyright>
                Zeno Sun
                <Icon type="heart-2" />
                {new Date().getUTCFullYear()}
            </Copyright>
            <div>
                <a href="">
                    <Icon type="github" mode="fill" />
                </a>
                <a href="">
                    <Icon type="twitter" mode="fill" />
                </a>
                <a href="">
                    <Icon type="weibo" mode="fill" />
                </a>
                <a>
                    <Icon type="wechat" mode="fill" />
                </a>
            </div>
        </Wrapper>
    );
};

export default Footer;
