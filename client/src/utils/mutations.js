import { gql } from '@apollo/client';

export const ADD_VOTE = gql`
    mutation addVote($pollId: ID!, $choiceId: ID!) {
        addVote(pollId: $pollId, choiceId: $choiceId) {
            _id
            question
            choices {
                _id
                choice
                votes
            }
        }
    }
`;
