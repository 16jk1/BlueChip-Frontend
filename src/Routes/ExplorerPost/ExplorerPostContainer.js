import React from "react";
import { gql } from "apollo-boost";
import {withRouter} from "react-router-dom";
import { useQuery, useMutation  } from "@apollo/client";
import ExplorerPostPresenter from "./ExplorerPostPresenter";

const GET_POST = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
        id
        user
        files
        likeCount
        isLiked
        comments
        createdAt
        caption
        location
    }
  }
`;


export default withRouter(({ match: { params: { id } } }) => {
  const { data, loading } = useQuery(GET_POST, { variables: { id } });
  return <ExplorerPostPresenter loading={loading} data={data} />;
});