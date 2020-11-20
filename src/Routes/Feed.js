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


const HeaderColumn = styled.div`
  margin-top: -100px;
  color: #999;
  font-size: 35px;
  margin-bottom: 20px;
`;
const InstructionColumn = styled.div`
  color: #0;
  font-size: 20px;
  margin-bottom: 50px;
`;

export default () => {
    const { data, loading } = useQuery(FEED_QUERY);
    return (
        <Wrapper>
            <Helmet>
                <title>Feed | BlueChip</title>
            </Helmet>
            <HeaderColumn>
              <h1/>Welcome to BlueChip!
            </HeaderColumn>
            <InstructionColumn>
              <h3/>1. 검색창에 admin을 친다
              <h3/>2. admin을 팔로우 한다
              <h3/>admin이 공유한 게시물들을 확인 할 수 있다
            </InstructionColumn>
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