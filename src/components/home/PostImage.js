import { useEffect, useState } from "react";
import styled from "styled-components";

const MultiImageWrapper = styled.ul`
  display: flex;
  overflow-x: scroll;
  padding: 0;
  height: 32rem;
  &::-webkit-scrollbar {
    height: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 10px;
  }

`

const MultiImage = styled.img`
  width: 50rem;
  height: 30rem;
  object-fit: cover;
  /* &::after{
    content: "${(props) => props.imageNumber}";
    position: absolute;
    width: 3rem;
    height: 3rem;
    background-color: black;
} */
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
  
  if(image && imageResult){
    return(
      <MultiImageWrapper>
        {image.split(",").map((item,index) => 
        <li key={index} style={{width: "100%", height: "30rem"}}>
          <MultiImage src={item} alt="#"/>
        </li>)}
      </MultiImageWrapper>
    )
  }
  if(image && !imageResult){

    return <img src={image} alt="#" style={{width: "100%", height: "30rem", objectFit: "cover"}}/>
  }
}
