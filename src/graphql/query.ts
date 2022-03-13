import { gql } from '@apollo/client';

export const GET_LAUNCHES_PAST = gql`
  query getLaunchesPast($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;
