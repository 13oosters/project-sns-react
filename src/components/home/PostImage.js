import { useEffect, useState } from "react";
import styled from "styled-components";

const MultiImageWrapper = styled.ul`
  display: flex;
  overflow: scroll;
`

const MultiImage = styled.img`
  width: 39rem;
  height: 23rem;
  &::after{
    content: "${(props) => props.imageNumber}";
    position: absolute;
    width: 3rem;
    height: 3rem;
    background-color: black;
}
`

export default function PostImage({image}) {

  const [imageNumber, setImageNumber] = useState();
  // const [numbering, setNumbering] = useState(1);
  const [imageResult, setImageResult] = useState(false);

  // 이미지 슬라이드 구현 미완성.

  useEffect(() => {
    if (image){
      const isMultiImage = image && image.split(",").length > 1;
      
      setImageResult(isMultiImage);

      const number = image.split(",").length;

      setImageNumber(number);
    }
    
  },[])
  

  return (
    <>
    <MultiImageWrapper>
      {image && imageResult ? image.split(",").map((item)=> 
      <li>
        <MultiImage src={item} alt="#"/>
        </li>) : null}
      {image && !imageResult ? <img src={image}
        alt="#"
        style={{ width: "100%", height: "23rem" }} /> : null}
    </MultiImageWrapper>
    </>
  )
}
