import React from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import ResolutionForm from "./ResolutionForm";

const App = ({ resolutionsQuery, deleteResolution }) => {
  if (resolutionsQuery.loading) return null;
  return (
    <div>
      <ResolutionForm />
      <ul>
        {resolutionsQuery.resolutions.map(resolution => (
          <li key={resolution._id}>
            <button
              onClick={() =>
                deleteResolution({ variables: { _id: resolution._id } })
              }
            >
              x
            </button>
            {resolution.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
  }
`;

const deleteResolution = gql`
  mutation deleteResolution($_id: String!) {
    deleteResolution(_id: $_id) {
      _id
    }
  }
`;

export default compose(
  graphql(resolutionsQuery, {
    name: "resolutionsQuery"
  }),
  graphql(deleteResolution, {
    name: "deleteResolution",
    options: {
      refetchQueries: ["Resolutions"]
    }
  })
)(App);
