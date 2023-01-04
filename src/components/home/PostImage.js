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
`;

const MultiImage = styled.img`
  width: 50rem;
  height: 30rem;
  object-fit: cover;
`;

export default function PostImage({ image }) {
  const [imageNumber, setImageNumber] = useState();
  const [imageResult, setImageResult] = useState(false);

  useEffect(() => {
    if (image) {
      const isMultiImage = image && image.split(",").length > 1;

      setImageResult(isMultiImage);

      const number = image.split(",").length;

      setImageNumber(number);
    }
  }, []);

  if (image && imageResult) {
    return (
      <MultiImageWrapper>
        {image.split(",").map((item, index) => (
          <li key={index} style={{ width: "100%", height: "30rem" }}>
            <MultiImage src={item} alt="게시글 이미지" />
          </li>
        ))}
      </MultiImageWrapper>
    );
  }
  if (image && !imageResult) {
    return (
      <img
        src={image}
        alt="게시글 이미지"
        style={{ width: "100%", height: "30rem", objectFit: "cover" }}
      />
    );
  }
}
