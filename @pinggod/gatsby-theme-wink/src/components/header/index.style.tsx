import Styled from 'styled-components';
import { InnerLink } from '../link';
import { Icon } from '../Icon';

export const Wrapper = Styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 0;
`;

export const LogoSection = Styled(InnerLink).attrs({
    to: '/',
})``;

export const LogoIcon = Styled(Icon).attrs({
    type: 'sailboat',
})`
    padding-right: 4px;
    font-size: 24px !important;
    vertical-align: sub;
`;

export const LogoTitle = Styled.h1`
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    font-family: Cereal;
`;

export const SearchIcon = Styled(Icon).attrs({
    type: "search",
})`
    margin-right: -16px;
    padding: 0 16px;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
`;
