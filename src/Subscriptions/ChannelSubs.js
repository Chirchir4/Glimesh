import gql from "graphql-tag";

export const channelTitle = gql`
 subscription  channelTitle{
  channel(id:6) {
    title
  }
}
`;

