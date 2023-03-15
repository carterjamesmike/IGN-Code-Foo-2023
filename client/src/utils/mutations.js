import { gql } from '@apollo/client';

export const ADD_VOTE = gql`
    mutation addVote($pollId: ID!, $option: String!) {
        addVote(pollId: $pollId, option: $option) {
            _id
            pollQuestion
            pollOptions {
                option
                votes
            }
        }
    }
`;
