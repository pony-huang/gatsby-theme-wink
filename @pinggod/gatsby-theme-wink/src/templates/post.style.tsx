import Styled from "styled-components";

export const MDXWrapper = Styled.div`
    max-width: 800px;
    margin: 0 auto;

    h1, h2, h3, h4, h5, h6 {
        margin: 8px 0;
    }
    p {
        margin-bottom: 8px;
        font-size: 16px;
        font-family: 'Open Sans';
        text-indent: 2rem;
    }
`;
