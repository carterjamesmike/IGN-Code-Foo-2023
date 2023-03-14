import { gql } from '@apollo/client';

export const GET_POLL = gql`
    query poll($id: ID!) {
        poll(_id: $id) {
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

