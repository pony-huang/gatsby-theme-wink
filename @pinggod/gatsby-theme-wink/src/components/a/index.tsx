import { Link } from 'gatsby';
import Styled from 'styled-components';

export const A = Styled(Link)`
    color: black;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        /* text-decoration: underline; */
    }
`;
