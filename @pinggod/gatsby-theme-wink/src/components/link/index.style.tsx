import { Link } from 'gatsby';
import Styled from 'styled-components';

export const OuterLink = Styled.a.attrs({
    target: "_blank",
    rel: "noopener noreferrer"
})`
    color: black;
`;

export const InnerLink = Styled(Link)`
    color: black;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        /* text-decoration: underline; */
    }
`;
