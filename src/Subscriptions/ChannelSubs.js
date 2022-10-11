import gql from "graphql-tag";

export const channelTitle = gql`

 subscription      {
  channel(id:1) {
    title
  }
}
`;

