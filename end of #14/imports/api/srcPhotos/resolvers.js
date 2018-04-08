import SrcPhotos from "./srcPhotos";

// SrcPhotos.insert({
//   url:
//     "https://i.pinimg.com/originals/7f/e1/b2/7fe1b2de0bf88559d54e65f52efa9258.jpg",
//   type: "human"
// });

function getRandomOfType(type) {
  const rand = Math.floor(Math.random(0) * SrcPhotos.find({ type }).count());
  return SrcPhotos.find({ type }).fetch()[rand];
}

export default {
  Query: {
    SrcPhotos() {
      return SrcPhotos.find({}).fetch();
    },
    ComboPhotos() {
      return [getRandomOfType("human"), getRandomOfType("animal")];
    }
  }
};
