import React from 'react';
import { OuterLink } from "../link";
import * as S from "./index.style";

interface Props {
    siteMeta: Wink.Site;
}

const Header = (props: Props): React.ReactElement => {
    return (
        <S.Wrapper>
            <S.LogoSection>
                <S.LogoIcon />
                <S.LogoTitle>
                    {props.siteMeta.siteMetadata.title.toUpperCase()}
                </S.LogoTitle>
            </S.LogoSection>
            <OuterLink title="search this site" href="https://www.google.com/search?q=site%3Arexlnt.com">
                <S.SearchIcon />
            </OuterLink>
        </S.Wrapper>
    );
};

export default Header;
