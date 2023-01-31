const { gql } = require("apollo-server");

const typeDefs = gql`


type Message {
    user: String
    text: String
}

type roomUser {
    userId: String
    userName: String
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
    conversation: [Message]
    roomUsers: [roomUser]
}


type Query {
    hello: String
    getAllRooms: [Room]
}

`;

module.exports = typeDefs;
