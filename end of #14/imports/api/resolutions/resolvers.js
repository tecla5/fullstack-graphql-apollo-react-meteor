import Resolutions from "./resolutions";

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  },

  Mutation: {
    createResolution(obj, { name }, context) {
      const resolutionId = Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionId);
    },
    deleteResolution(obj, args, ctx) {
      console.log("args", args);
      const resolution = Resolutions.findOne(args._id);
      Resolutions.remove(args._id);
      return resolution;
    }
  }
};
