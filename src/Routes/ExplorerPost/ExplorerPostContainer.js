import React from "react";
import { gql } from "apollo-boost";
import {withRouter} from "react-router-dom";
import { useQuery, useMutation  } from "@apollo/client";
import ExplorerPostPresenter from "./ExplorerPostPresenter";

const GET_POST = gql`
    query searchPost($caption: String!) {
    searchPost(caption: $caption) {
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


export default withRouter(({ match: { params: { caption } } }) => {
  const { data, loading } = useQuery(GET_POST, { variables: { caption } });
  return <ExplorerPostPresenter loading={loading} data={data} />;
});