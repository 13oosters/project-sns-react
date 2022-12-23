import styled from "styled-components";
import Cards from '../common/Cards';

const FeedsDiv = styled.div`
  height: calc(100% - 10.8rem);
  overflow: scroll;
  padding: 0 ;
  margin-top: 4rem;
  margin-bottom: 5.5rem;
  /* padding: 0 20rem; */
  &::-webkit-scrollbar{
    display: none;
  }
`

export default function Feeds({feed}) {


  return (
    <FeedsDiv>
      <Cards feed={feed}/>
    </FeedsDiv>
  )
}
