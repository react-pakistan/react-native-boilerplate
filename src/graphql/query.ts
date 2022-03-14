import { gql } from '@apollo/client';

export const GET_LAUNCHES_PAST = gql`
  query getLaunchesPast($limit: Int!, $offset: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      mission_name
      details
      links {
        video_link
      }
    }
  }
`;
