import React from "react";
import { Helmet } from "rl-react-helmet";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import Loader from "../../Components/Loader";
import Post from "../../Components/Post"
import Theme from "../../Styles/Theme";
import { gql } from "apollo-boost";

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
  font-size: 40px;
  margin-bottom: 50px;
`;

const ExplorerPostPresenter = ({ data, loading }) => {
    return (
        <Wrapper>
            <Helmet>
                <title>Feed | BlueChip</title>
            </Helmet>
            <HeaderColumn>
              <h1/>Welcome to BlueChip!
            </HeaderColumn>
            {loading && <Loader />}
            {!loading &&
                data &&
                data.searchPost &&
                data.searchPost.map(post => (
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

ExplorerPostPresenter.propTypes = {
  loading: PropTypes.bool
};

export default ExplorerPostPresenter;