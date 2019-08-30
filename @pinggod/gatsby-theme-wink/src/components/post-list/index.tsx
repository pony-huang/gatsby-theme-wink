import React from 'react';
import Styled from 'styled-components';
import { Wink } from '../../../typings';
import { PostCard } from '../post-card';

const Wrapper = Styled.section`
    max-width: 1200px;
    margin: 0 auto;
`;

const List = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0 -48px;
`;

interface Props {
    data: Wink.Data;
}

export const PostList = (props: Props): JSX.Element => {
    const { data } = props;

    return (
        <Wrapper>
            <List>
                {
                    data.allMdx.edges.map((post, index: number): JSX.Element => {
                        return <PostCard key={index} post={post} />
                    })
                }
            </List>
        </Wrapper>
    );
};
