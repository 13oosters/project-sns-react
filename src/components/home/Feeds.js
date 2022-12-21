import styled from "styled-components";
import Cards from '../common/Cards';

const FeedsDiv = styled.div`
  height: 57rem;
  overflow: scroll;
  margin-top: 4rem;
  margin-bottom: 6rem;
  &::-webkit-scrollbar{
    display: none;
  }
`

export default function Feeds() {
  return (
    <FeedsDiv>
      <Cards/>
    </FeedsDiv>
  )
}
