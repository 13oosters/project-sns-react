import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import defaultImage from "../../assets/image/basic-profile-img-post.png";

const SearchLi = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  & + & {
    margin-top: 1.6rem;
  }
`;
const SearchImg = styled.img`
  width: 5rem;
  aspect-ratio: 1/1;
  margin-right: 1.2rem;
  border-radius: 50%;
  object-fit: cover;
`;

const SearchStrong = styled.strong`
  display: block;
  margin-bottom: 0.6rem;
  font-weight: ${(props) => props.theme.mediumFontWeight};
  font-size: ${(props) => props.theme.baseFontSize};
`;
const SearchP = styled.p`
  color: #767676;
  font-weight: ${(props) => props.theme.normalFontWeight};
  font-size: ${(props) => props.theme.smallFontSize};

  &::before {
    content: "@ ";
  }
`;

export default function Result({ image, username, accountname, keyword }) {
  const navigate = useNavigate();

  const refineImageData = (filename) => {
    if (!filename) {
      return defaultImage;
    }
    if (!isNaN(filename[0])) {
      return `https://mandarin.api.weniv.co.kr/${filename}`;
    }
    if (filename.includes("https://mandarin.api.weniv.co.kr/")) {
      return filename;
    }
    return defaultImage;
  };

  const noImage = (e) => {
    e.preventDefault();
    e.target.src = defaultImage;
  };

  return (
    <SearchLi
      onClick={() => {
        navigate(`/${accountname}`);
      }}
    >
      <SearchImg
        src={refineImageData(image)}
        onError={noImage}
        alt={username}
      />
      <div>
        <SearchStrong>{username}</SearchStrong>
        <SearchP>{accountname}</SearchP>
      </div>
    </SearchLi>
  );
}
