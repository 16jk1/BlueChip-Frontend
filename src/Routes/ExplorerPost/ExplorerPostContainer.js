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


export default withRouter(({ location: { explorepost } }) => {
  const term = explorepost.split("=")[1];
  const { data, loading } = useQuery(GET_POST, {     
    skip: term === undefined,
    variables: {
      term: decodeURI(term)
     } });
  console.log(data)
  return <ExplorerPostPresenter loading={loading} data={data} />;
});