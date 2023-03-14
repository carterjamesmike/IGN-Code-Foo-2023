const { Poll } = require('../models');

const resolvers = {

    Query: {
        polls: async () => {
            return await Poll.find();
        }   
    },

    Mutation: {
        addVote: async (parent, { pollId, option }) => {
            const poll = await Poll.findByIdAndUpdate(
                pollId,
                { $inc: { [`pollVotes.${option}`]: 1 } },
                { new: true }
            );
            return poll;
        }
    }
};

module.exports = resolvers;
