import styled from "styled-components";
import Cards from '../common/Cards';

const FeedsDiv = styled.div`
  height: 60rem;
  overflow: scroll;
  margin-top: 4rem;
  margin-bottom: 5.5rem;
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
