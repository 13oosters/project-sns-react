import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import defaultImage from "../../assets/image/basic-profile-img-post.png";
import moreImage from "../../assets/image/icon-more-post.png";
import homeTestImage from "../../assets/image/home-test.png";
import heartImage from "../../assets/image/icon-heart.png";
import heartClickImage from "../../assets/image/icon-heart-fill.png";
import commentImage from "../../assets/image/icon-comment.png";
import API from "../../utils/api";

const smallFont = css`
  font-size: ${(props) => props.theme.smallFontSize};
  color: ${(props) => props.theme.darkLightColor};
`;

const CardHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1.5rem;
`;

const CardHeaderImage = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
`;

const CardHeaderStrong = styled.strong`
  font-size: ${(props) => props.theme.baseFontSize};
  font-weight: 500;
`;
const CardHeaderP = styled.p`
  ${smallFont}
  margin-top: 0.2rem;
  &::before {
    content: "@ ";
  }
`;
const CardHeaderButton = styled.button`
  margin-left: auto;
  padding: 0;
`;
const CardBodyUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.8rem;
`;
const CardBodySpan = styled.span`
  ${smallFont}
  vertical-align: middle;
  margin-left: 0.9rem;
`;
const CardBodyImage = styled.img`
  vertical-align: middle;
`;
const CardBodyP = styled.p`
  font-size: ${(props) => props.theme.baseFontSize};
  padding: 0 1.3rem;
`;
const CardBodyTime = styled.time`
  ${smallFont};
  display: flex;
  gap: 0.5rem;
  padding: 1.3rem;
`;

export default function Card({ setIsModal, post }) {
  // console.log(feed);

  const { author, content, image, hearted, heartCount, commentCount, createdAt } = {
    ...post,
  };

  return (
    <>
    { post ?
    (
      <li>
      <CardHeaderDiv>
        <CardHeaderImage src={author.image} />
        <div>
          <div>
            <CardHeaderStrong>{author.username}</CardHeaderStrong>
            <CardHeaderP>{author.accountname}</CardHeaderP>
          </div>
        </div>
        {/* 자신의 게시글일 때만 */}
        <CardHeaderButton type="button" onClick={() => {
                setIsModal((prev) => !prev);
              }}>
          <img src={moreImage} alt="설정" />
        </CardHeaderButton>
      </CardHeaderDiv>
      <img
        src={image}
        alt="#"
        style={{ width: "100%", height: "23rem" }}
      />
      <CardBodyUl>
        <li>
          <button type="button">
            {hearted ? (
              <CardBodyImage src={heartClickImage} />
            ) : (
              <CardBodyImage src={heartImage} />
            )}
          </button>
          <CardBodySpan>{heartCount}</CardBodySpan>
        </li>
        <li>
          <Link to={`/post/${author._id}`}>
            <CardBodyImage src={commentImage} />
          </Link>
          <CardBodySpan style={{ transform: "translateY(-5%)" }}>
            {commentCount}
          </CardBodySpan>
        </li>
      </CardBodyUl>
      <CardBodyP>{content}</CardBodyP>
      <CardBodyTime dateTime={createdAt}>
        <span>{createdAt.slice(0, 4)}년</span>
        <span>{createdAt.slice(5, 7)}월</span>
        <span>{createdAt.slice(8, 10)}일</span>
      </CardBodyTime>
    </li>
    ) : 
    (<></>)
    }
    </>
  );
}
