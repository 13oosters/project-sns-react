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
`;

const SearchStrong = styled.strong`
  display: block;
  margin-bottom: 0.6rem;
  font-weight: ${(props) => props.theme.mediumFontWeight};
  font-size: ${(props) => props.theme.baseFontSize};
`;

const HighlightSpan = styled.span`
  color: ${(props) => props.theme.primaryColor};
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
    const url = filename.split(",");

    if (!filename) {
      return defaultImage;
    }

    if (url[0].includes("https://mandarin.api.weniv.co.kr")) {
      return url[0];
    } else {
      return `https://mandarin.api.weniv.co.kr/${url[0]}`;
    }
  };

  return (
    <SearchLi
      onClick={() => {
        navigate(`/${accountname}`);
      }}
    >
      <SearchImg src={refineImageData(image)} alt={username} />
      <div>
        <SearchStrong>{username}</SearchStrong>
        <SearchP>{accountname}</SearchP>
      </div>
    </SearchLi>
  );
}
