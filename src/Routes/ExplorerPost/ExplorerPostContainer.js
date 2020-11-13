import React from "react";
import { gql } from "apollo-boost";
import {withRouter} from "react-router-dom";
import { useQuery, useMutation  } from "@apollo/client";
import ExplorerPostPresenter from "./ExplorerPostPresenter";

const GET_POST = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
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


export default withRouter(({ match: { params: { id } } }) => {
  const { data, loading } = useQuery(GET_POST, { variables: { id } });
  return <ExplorerPostPresenter loading={loading} data={data} />;
});