import React from "react";
import { Icon } from "../Icon";
import { OuterLink } from "../link";
import * as S from "./index.style";

const Footer = (): React.ReactElement => {
    return (
        <S.Wrapper>
            <S.Copyright>
                <Icon type="heart-2" />
                &nbsp;
                {new Date().getUTCFullYear()}
                &nbsp;
                Zeno Sun
            </S.Copyright>
            <S.SocialList>
                <S.SocialItem>
                    <OuterLink title="github link" href="https://github.com/pinggod">
                        <Icon type="github" mode="fill" />
                    </OuterLink>
                </S.SocialItem>
                <S.SocialItem>
                    <OuterLink title="twitter link" href="https://twitter.com/ping4god">
                        <Icon type="twitter" mode="fill" />
                    </OuterLink>
                </S.SocialItem>
                <S.SocialItem>
                    <OuterLink title="weibo link" href="https://weibo.com/2827844063">
                        <Icon type="weibo" mode="fill" />
                    </OuterLink>
                </S.SocialItem>
                <S.SocialItem>
                    <OuterLink title="wechat link" href="">
                        <Icon type="wechat" mode="fill" />
                    </OuterLink>
                </S.SocialItem>
            </S.SocialList>
        </S.Wrapper>
    );
};

export default Footer;
