import React from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import ResolutionForm from "./ResolutionForm";
import random from "lodash/random";

const PhotoBlock = ({ backString }) => (
  <div style={{ display: "inline-block" }}>
    <div
      style={{
        height: "300px",
        width: "300px",
        backgroundImage: backString.join(", "),
        backgroundBlendMode: "multiply",
        backgroundSize: `${random(100, 300)}%, ${random(100, 300)}%`,
        backgroundPositionX: `${random(0, 100)}%, ${random(0, 100)}%`,
        backgroundPositionY: `${random(0, 100)}%, ${random(0, 100)}%`
      }}
    />
  </div>
);

const App = ({ ComboPhotos }) => {
  if (ComboPhotos.loading) return null;
  const backString = ComboPhotos.ComboPhotos.map(pho => `url(${pho.url})`);
  return (
    <div>
      <PhotoBlock backString={backString} />
      <PhotoBlock backString={backString} />
      <PhotoBlock backString={backString} />
    </div>
  );
};

const ComboPhotos = gql`
  query ComboPhotos {
    ComboPhotos {
      _id
      url
    }
  }
`;

export default compose(
  graphql(ComboPhotos, {
    name: "ComboPhotos"
  })
)(App);
