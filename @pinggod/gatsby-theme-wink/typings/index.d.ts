declare module '@mdx-js/react';
declare module 'gatsby-plugin-mdx';

declare namespace Wink {
    export interface RootTypes {
        data: Data;
    }

    export interface Data {
        site: Site;
        allMdx: AllMdx;
    }

    export interface Site {
        siteMetadata: SiteMetadata;
        buildTime: Date;
    }

    export interface SiteMetadata {
        title: string;
        description: string;
        siteUrl: string;
    }

    export interface AllMdx {
        totalCount: number;
        edges: Edge[];
    }

    export interface Edge {
        previous?: NodeBase;
        node: NodeDetail;
        next?: NodeBase;
    }

    export interface NodeBase {
        id: string;
        fields: Fields;
        frontmatter: Frontmatter;
        timeToRead: number;
        wordCount: WordCount;
    }

    export interface NodeDetail extends NodeBase {
        internal: Internal;
        tableOfContents: TableOfContents;
        body: string;
    }

    export interface Fields {
        slug: string;
    }

    export interface Internal {
        type: string;
        contentDigest: string;
    }

    export interface Frontmatter {
        title: string;
        date: Date;
        description: string;
        coverAuthor: string;
        coverOriginalUrl: string;
        cover: Cover;
    }

    export interface Cover {
        childImageSharp: {
            fluid: any;
        };
    }

    export interface TableOfContents {
        items: Item[];
    }

    export interface Item {
        url: string;
        title: string;
        items?: Item[];
    }

    export interface WordCount {
        paragraphs: number;
        sentences: number;
        words: number;
    }
}
