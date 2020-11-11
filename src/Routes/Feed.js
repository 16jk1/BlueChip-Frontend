import React from "react";
import { Helmet } from "rl-react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import Loader from "../Components/Loader";
import Post from "../Components/Post"
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
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const textWelcome = styled.h1`
  color: #999;
  font-size: 200px;
  text-align: center;
  margin-top: 50px;
`;

export default () => {
    const { data, loading } = useQuery(FEED_QUERY);
    return (
        <Wrapper>
            <Helmet>
                <title>Feed | BlueChip</title>
            </Helmet>
            <textWelcome>
              Welcome to BlueChip!
            </textWelcome>
            {loading && <Loader />}
            {!loading &&
                data &&
                data.seeFeed &&
                data.seeFeed.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        location={post.location}
                        caption={post.caption}
                        user={post.user}
                        files={post.files}
                        likeCount={post.likeCount}
                        isLiked={post.isLiked}
                        comments={post.comments}
                        createdAt={post.createdAt}
                    />
                ))}
        </Wrapper>
    );
};