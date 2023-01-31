const Room = require("../models/room");

const resolvers = {
  Query: {
    hello: () => "Madhusha Prasad",
  },

  getAllRooms : async () => {
      const rooms = await Room.find();
      console.log(rooms);
      return rooms;
  },
};

module.exports = resolvers;
