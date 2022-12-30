import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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
  const [isFailed, setIsFailed] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  // console.log(isFailed)

  /*   const checkImage = async () => {
    try {
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/${image}`);
      const status = await res.data?.status;

      if (status) {
        setIsFailed(true);
        //       console.log(isFailed)
      }
    } catch (e) {}
  };
 */
  /*  useEffect(() => {
    checkImage();
  }, []);
  if (isFailed) {
    console.log(url[0])
      return defaultImage;
    }
 */
  const refineImageData = (filename) => {
    const url = filename.split(",");
    const [, , base] = filename.split("/");

    if (!filename) {
      return defaultImage;
    }

    if (filename.includes("url")) {
      return filename.slice(5, filename.length - 2);
    } else if (url[0].length > 70) {
      return defaultImage;
    } else if (url[0].includes("http://146.56.183.55:5050")) {
      return url[0].replace(
        "http://146.56.183.55:5050",
        "https://mandarin.api.weniv.co.kr",
      );
    } else if (url[0].includes("undefined")) {
      return defaultImage;
    } else if (base === "market-52.herokuapp.com") {
      return defaultImage;
    } else if (url[0].includes("https://mandarin.api.weniv.co.kr/")) {
      console.log(1);
      if (isNaN(url[0][33])) {
        return defaultImage;
      }
      console.log(2);
      return filename;
    } else if (isNaN(url[0][0])) {
      console.log(3);
      return `https://mandarin.api.weniv.co.kr/${url[0]}`;
    } else {
      return defaultImage;
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
