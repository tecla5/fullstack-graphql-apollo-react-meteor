import React from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import ResolutionForm from "./ResolutionForm";
import random from "lodash/random";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const PhotoBlock = ({ photos }) => (
  <div style={{ display: "inline-block" }}>
    <div
      style={{
        height: "500px",
        width: "500px",
        // backgroundColor: getRandomColor(),
        backgroundImage: photos.map(photo => `url(${photo.url})`).join(", "),
        backgroundBlendMode: "multiply",
        backgroundSize: photos
          .map(p => `${random(20 * p.size, 100 * p.size)}%`)
          .join(", "),
        backgroundPositionX: photos.map(p => `${random(0, 100)}%`).join(", "),
        backgroundPositionY: photos.map(p => `${random(0, 100)}%`).join(", "),
        backgroundRepeat: "no-repeat"
      }}
    />
  </div>
);

const App = ({ ComboPhotos }) => {
  if (ComboPhotos.loading) return null;
  return (
    <div>
      <PhotoBlock photos={ComboPhotos.ComboPhotos} />
      <PhotoBlock photos={ComboPhotos.ComboPhotos} />
      <PhotoBlock photos={ComboPhotos.ComboPhotos} />
      <PhotoBlock photos={ComboPhotos.ComboPhotos} />
      <br />
      {ComboPhotos.ComboPhotos.map(p => (
        <a href={p.url} target="blank" key={p._id}>
          {" "}
          <img src={p.url} style={{ width: "300px" }} />
        </a>
      ))}
    </div>
  );
};

const ComboPhotos = gql`
  query ComboPhotos {
    ComboPhotos {
      _id
      url
      size
    }
  }
`;

export default compose(
  graphql(ComboPhotos, {
    name: "ComboPhotos"
  })
)(App);
