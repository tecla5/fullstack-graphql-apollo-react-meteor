import SrcPhotos from "./srcPhotos";

// SrcPhotos.insert({
//   url:
//     "https://i.pinimg.com/originals/91/9d/89/919d894512dd6f4e85eb89baa218797a.jpg",
//   type: "object",
//   size: 2
// });
// SrcPhotos.insert({
//   url: "https://cloud.glstock.com/14607/572554/vector-vintage-pistol.jpg",
//   type: "object",
//   size: 2
// });
// SrcPhotos.insert({
//   url:
//     "https://i.pinimg.com/originals/14/80/df/1480dfea126faf3d9547227aac10ef65.jpg",
//   type: "object",
//   size: 2
// });
// SrcPhotos.insert({
//   url:
//     "https://i.pinimg.com/736x/25/43/a7/2543a7302e2dc646e8f79c688c940e34--tattoo-camera-photographer-tattoo.jpg",
//   type: "object",
//   size: 8
// });
// SrcPhotos.insert({
//   url:
//     "http://paullusch.com/wordpress/wp-content/uploads/2012/02/adjustable_wrench.jpg",
//   type: "object",
//   size: 2
// });
// SrcPhotos.insert({
//   url:
//     "https://img00.deviantart.net/b233/i/2007/071/c/d/human_figure_sketching_by_asaunders.jpg",
//   type: "human",
//   size: 8
// });
// SrcPhotos.insert({
//   url:
//     "https://i.pinimg.com/564x/4f/4d/70/4f4d70f8dcf2cee24a8598b3d0dfe151.jpg",
//   type: "human",
//   size: 8
// });
// SrcPhotos.insert({
//   url:
//     "https://drawingbingo.com/wp-content/uploads/2017/07/drawing-figures-in-action-sketching-the-figure-in-action-from-imagination-ideal-proportion.jpg",
//   type: "human",
//   size: 8
// });
// SrcPhotos.insert({
//   url:
//     "https://img.clipartxtras.com/c5cd8a063ccbfd27303e4b563085514a_best-25-human-figure-sketches-ideas-on-pinterest-human-figure-human-body-drawing-reference_736-649.jpeg",
//   type: "human",
//   size: 5
// });
// SrcPhotos.insert({
//   url:
//     "https://lacarterarota.com/wp-content/uploads/2016/02/Kerby-Rosanes-e1455899480240.jpg",
//   type: "animal",
//   size: 3
// });
// SrcPhotos.insert({
//   url:
//     "http://webneel.com/daily/sites/default/files/images/daily/01-2015/3-how-to-draw-animals-deer.jpg",
//   type: "animal",
//   size: 6
// });
// SrcPhotos.insert({
//   url:
//     "http://cdn1.litlepups.net/resize/2017/11/28/medium-easy-pencil-drawings-of-animal-drawing-of-sketch.jpg",
//   type: "animal",
//   size: 2
// });

// console.log(SrcPhotos.update({ size: null }, { size: 5 }));
// console.log(SrcPhotos.find({ size: null }).count());

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
      return [
        getRandomOfType("human"),
        getRandomOfType("animal"),
        getRandomOfType("object")
      ];
    }
  }
};
