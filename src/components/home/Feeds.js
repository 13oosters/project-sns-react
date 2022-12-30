import styled from "styled-components";
import Cards from '../common/Cards';

const FeedsDiv = styled.div`
  height: calc(100% - 112.8px);
  overflow-y: scroll;
  padding: 0 ;
  /* margin-top: 4rem; */
  /* margin-bottom: 5.5rem; */
  /* padding: 0 20rem; */
  &::-webkit-scrollbar{
    display: none;
  }
`

export default function Feeds({feed, setFeed}) {


  return (
    <FeedsDiv>
      <Cards feed={feed} setFeed={setFeed}/>
    </FeedsDiv>
  )
}
