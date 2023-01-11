import styled from "styled-components";
import Cards from "../common/Cards";

const FeedsDiv = styled.div`
  height: calc(100% - 112.8px);
  overflow-y: scroll;
  padding: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Feeds({ feed, setFeed, ref1, wait }) {
  return (
    <FeedsDiv>
      <Cards feed={feed} setFeed={setFeed} ref1={ref1} wait={wait} />
    </FeedsDiv>
  );
}
