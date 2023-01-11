import { useState } from "react";
import styled from "styled-components";
import loading from "../../assets/image/loading-small.gif";

const LoadingDiv = styled.div`
  text-align: center;
`

export default function Loading({ref1, wait}) {

  const [hidden, setHidden] = useState(true);

  setTimeout(()=> {
    setHidden(false);
  },wait)

  return (
    <>
      {hidden === false && <LoadingDiv ref={ref1}><img src={loading} alt="#" /></LoadingDiv>}
    </>
  )
}