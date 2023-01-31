const { gql } = require("apollo-server");

const typeDefs = gql`
  type Message {
    user: String
    text: String
  }

  type roomUser {
    userId: String
    name: String
    image: String
  }

  type Room {
    id: ID
    topic: String
    name: String
    lang: String
    capacity: String
    creator: String
    createdAt: String
    conversation: [Message!]!
    roomUser: [roomUser!]!
  }

  type Query {
    hello: String
    getAllRooms: [Room!]!
  }

  type RoomInput {
    topic: String
    name: String
    lang: String
    capacity: String
    creator: String
    createdAt: String
    conversation: String
    roomUser: String
  }

  type Mutation {
    createRoom(room: RoomInput): Room
  }
`;

module.exports = typeDefs;
