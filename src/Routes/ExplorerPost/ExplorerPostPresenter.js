import React from "react";
import { Helmet } from "rl-react-helmet";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import Loader from "../../Components/Loader";
import Post from "../../Components/Post"
import Theme from "../../Styles/Theme";
import SquarePost from "../../Components/SquarePost";

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
                  <SquarePost
                  caption={post.caption}
                  likeCount={post.likeCount}
                  commentCount={post.commentCount}
                  file={post.files[0]}
                />
                ))}
        </Wrapper>
    );
};


export default ExplorerPostPresenter;