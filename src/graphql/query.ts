import { gql } from '@apollo/client';

export const GET_USER_BY_USERNAME = gql`
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
