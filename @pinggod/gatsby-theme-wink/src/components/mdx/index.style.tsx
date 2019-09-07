import Styled from "styled-components";

export const Wrapper = Styled.div`
    width: 100%;
    max-width: 800px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 24px;
    overflow: hidden;

    h1, h2, h3, h4, h5, h6 {
        margin: 8px 0;
        line-height: 1;
    }
    p {
        margin-bottom: 8px;
        font-size: 16px;
        font-family: 'Open Sans';
        text-indent: 2rem;
    }
`;
