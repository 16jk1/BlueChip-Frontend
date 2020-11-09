import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import Loader from "../Components/Loader";
import PostCard from "../Components/SquarePost"
import Theme from "../Styles/Theme";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  min-height: 90vh;
  ${Theme.router};
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = styled.div`
  padding: 1em;
  margin: auto;
  display: grid;
  grid-auto-rows: minmax(0, 300px);
  grid-template-columns: repeat(3, minmax(0px, 300px));
  grid-gap: 20px;
  margin-bottom: 30px;
  @media (max-width: 940px) {
    grid-auto-rows: 32vw;
  }
  @media (max-width: 900px) {
    padding: 0;
    grid-gap: 3px;
  }
`;

export default () => {
    const { data, loading } = useQuery(FEED_QUERY);
    return (
        <Wrapper>
          {loading && <Loader />}
          {!loading && 
            data &&
            data.seeFeed && (
            <Section>
              {data.seeFeed.map(post => (
                <PostCard
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
                />
              ))}
            </Section>
          )}
        </Wrapper>
      );
}
 