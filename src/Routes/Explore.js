import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import Loader from "../Components/Loader";
import UserCard from "../Components/UserCard";
import SquarePost from "../Components/SquarePost";

const ALL_USER_POST = gql`
  query allUserPost {
    allUser {
      id
      username
      isFollowing
      avatar
      isSelf
    }
    allPost {
      id
      likeCount
      commentsCount
      files {
        id
        url
      }
    }
  }
`;

const Wrapper = styled.div`
  height: 100vh;
`;

const Section = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;

const PostSection = styled(Section)`
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const Follow = styled.div`
  color: ${props => props.theme.darkGreyColor};
  font-weight: bold;
  margin-bottom: 35px;
`;

export default () => {
  const { data, loading } = useQuery(ALL_USER_POST);
  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && <Follow>팔로우할 만한 계정 둘러보기</Follow>}
      <Section>
        {!loading &&
          data &&
          data.allUser &&
          data.allUser.map(user => (
            <UserCard
              key={user.id}
              id={user.id}
              username={user.username}
              isFollowing={user.isFollowing}
              url={user.avatar}
              isSelf={user.isSelf}
            />
          ))}
      </Section>
      {!loading && <Follow>탐색 탭</Follow>}
      <PostSection>
        {!loading &&
          data &&
          data.allPost &&
          data.allPost.map(post => (
            <SquarePost
              key={post.id}
              id={post.id}
              likeCount={post.likeCount}
              commentsCount={post.commentsCount}
              file={post.files[0]}
            />
          ))}
      </PostSection>
    </Wrapper>
  );
};