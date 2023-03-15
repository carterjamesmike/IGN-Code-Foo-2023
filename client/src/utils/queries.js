import { gql } from '@apollo/client';

export const GET_POLL = gql`
    query polls {
        polls {
            _id
            pollQuestion
            pollOptions {
                option
                votes
            }
        }
    }
`;

