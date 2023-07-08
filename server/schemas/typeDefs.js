const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Post {
    _id: ID
    title: String
    content: String
    media: String
    profile: Profile
    votes: Int
  }

  type Concert {
    _id: ID
    title: String
    date: String
    location: String
    artist: String
    venue: String
    city: String
    country: String
    image: String
    posts: Post
    description: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]
    posts: [Post]
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
