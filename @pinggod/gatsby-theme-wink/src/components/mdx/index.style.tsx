import Styled from "styled-components";

export const Wrapper = Styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
    overflow: hidden;
    box-sizing: border-box;
    line-height: 1.6;

    h1, h2, h3, h4, h5, h6 {
        margin: 16px 0;
        font-weight: bold;
    }

    .gatsby-resp-image-wrapper {
        margin: 16px 0 !important;

        span {
            visibility: hidden;
        }
    }
`;

export const Code = Styled.code`
    padding: 4px 8px;
    background: rgb(239, 243, 245);
    border-radius: 4px;
    font-weight: 500;
`;

export const Pre = Styled.pre`
    margin: 16px 0;
    padding: 16px;
    border-radius: 4px;
    line-height: 2;
    overflow-x: scroll;

    ${Code} {
        padding: 0;
        background: transparent;

        .token.punctuation {
            color: #525252;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
            color: #b3b3b3;
        }

        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.deleted {
            color: rgb(134, 179, 0);
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.url,
        .token.inserted {
            color: #42b983;
        }

        .token.entity {
            color: #657b83;
            background: #eee8d5; /* base2 */
        }

        .token.atrule,
        .token.attr-value,
        .token.keyword {
             color: #BA4545;
        }

        .token.operator {
            color: rgb(0, 119, 170);
        }

        .token.function,
        .token.class-name {
            color: #b58900;
        }

        .token.regex,
        .token.important,
        .token.variable {
            color: rgb(238, 153, 0);
        }
    }
`;


export const P = Styled.p`
    margin: 16px 0;
    font-size: 16px;
    line-height: 28px;
    font-weight: 300;
    word-break: break-word;
    hyphens: auto;
`;

export const H1 = Styled.h1`
    font-size: 32px;
`;

export const H2 = Styled.h2`
    font-size: 28px;
`;

export const H3 = Styled.h3`
    font-size: 24px;
`;

export const H4 = Styled.h4`
    font-size: 20px;
`;

export const H5 = Styled.h5`
    font-size: 16px;
`;

export const H6 = Styled.h6`
    font-size: 12px;
`;

export const Bloackquote = Styled.div`
    margin: 16px 0;
    padding: 16px 24px;
    border-radius: 8px;
    background: rgb(239, 243, 245);

    P {
        margin: 0;
    }
`;

export const Ul = Styled.ul`
    margin: 8px 0 8px 32px;
`;

export const Ol = Styled.ol``;

export const Li = Styled.li`
    font-size: 16px;
    font-weight: 300;
`;

export const Table = Styled.table`
    width: 100%;
    border: 1px solid rgb(204, 217, 223);
    border-radius: 4px;
    border-spacing: 0px;
    margin: 16px 0px;
`;

export const Tr = Styled.tr`
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
`;

export const Th = Styled.th`
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: rgb(58, 73, 80);
    text-transform: uppercase;
    padding: 12px 24px;
`;

export const Td = Styled.td`
    text-align: left;
    padding: 16px 24px;
    border-top: 1px solid rgb(204, 217, 223);
    color: rgb(58, 73, 80);
    font-weight: 300;
`;

export const Em = Styled.em``;

export const Strong = Styled.strong`
    font-weight: bold;
`;

export const Delete = Styled.del`
    color: rgba(0, 0, 0, 0.45);
`;

export const Hr = Styled.hr`
    position: relative;
    width: 12px;
    margin: 48px auto;
    border: none;
    border-top: 1px solid #989DA3;

    &:before, &:after {
        content: ' ';
        position: absolute;
        width: 2px;
        border: none;
        border-top: 1px solid #989DA3;
    }

    &:before {
        top: -1px;
        left: -4px;
    }

    &:after {
        top: -1px;
        right: -4px;
    }
`;

