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

    pre, code {
        font-size: 14px;
        font-weight: 400;
        font-family: 'Roboto Mono', Monaco, courier, monospace;
    }

    .gatsby-resp-image-wrapper {
        margin: 16px 0 !important;

        span {
            visibility: hidden;
        }
    }
`;

export const InlineCode = Styled.code`
    margin: 0 4px;
    padding: 2px 8px;
    border-radius: 4px;
    background: rgb(239, 243, 245);
`;

export const Pre = Styled.pre`
    margin: 16px 0;
    padding: 24px;
    border-radius: 4px;
    line-height: 2;
    overflow-x: scroll;
    background: #F8F8F8;

    code {
        color: #525252;

        .hljs-function .hljs-keyword,
        .hljs-constant {
            color: #0092db;
        }
        .hljs-keyword,
        .hljs-attribute,
        .hljs-attr {
            color: #e96900;
        }
        .hljs-number,
        .hljs-literal {
            color: #ae81ff;
        }
        .hljs-tag,
        .hljs-tag .hljs-title,
        .hljs-change,
        .hljs-winutils,
        .hljs-flow,
        .hljs-lisp .hljs-title,
        .hljs-clojure .hljs-built_in,
        .hljs-nginx .hljs-title,
        .hljs-tex .hljs-special,
        .hljs-bullet {
            color: #2973b7;
        }
        .hljs-symbol,
        .hljs-symbol .hljs-string,
        .hljs-value,
        .hljs-regexp {
            color: #42b983;
        }
        .hljs-title {
            color: #83B917;
        }
        .hljs-tag .hljs-value,
        .hljs-string,
        .hljs-subst,
        .hljs-haskell .hljs-type,
        .hljs-preprocessor,
        .hljs-ruby .hljs-class .hljs-parent,
        .hljs-built_in,
        .hljs-sql .hljs-aggregate,
        .hljs-django .hljs-template_tag,
        .hljs-django .hljs-variable,
        .hljs-smalltalk .hljs-class,
        .hljs-javadoc,
        .hljs-django .hljs-filter .hljs-argument,
        .hljs-smalltalk .hljs-localvars,
        .hljs-smalltalk .hljs-array,
        .hljs-attr_selector,
        .hljs-pseudo,
        .hljs-addition,
        .hljs-stream,
        .hljs-envvar,
        .hljs-apache .hljs-tag,
        .hljs-apache .hljs-cbracket,
        .hljs-tex .hljs-command,
        .hljs-prompt {
            color: #42b983;
        }
        .hljs-comment,
        .hljs-java .hljs-annotation,
        .hljs-python .hljs-decorator,
        .hljs-template_comment,
        .hljs-pi,
        .hljs-doctype,
        .hljs-shebang,
        .hljs-apache .hljs-sqbracket,
        .hljs-tex .hljs-formula {
            color: #b3b3b3;
        }
        .hljs-deletion {
            color: #BA4545;
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

