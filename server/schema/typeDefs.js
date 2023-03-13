const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Poll {
        _id: ID
        pollQuestion: String
        pollOptions: [String]
        pollVotes: [Int]
    }

    type Mutation {
        addVote(pollId: ID!, option: String!): Poll
    }

    type Query {
        polls: [Poll]
    }

    `;

module.exports = typeDefs;