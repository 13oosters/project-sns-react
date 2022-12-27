import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

  return (
    <SearchLi
      onClick={() => {
        navigate(`/${accountname}`);
      }}
    >
      <SearchImg src={image} alt={username} />
      <div>
        <SearchStrong>{username}</SearchStrong>
        <SearchP>{accountname}</SearchP>
      </div>
    </SearchLi>
  );
}
