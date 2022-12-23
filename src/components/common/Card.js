import { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import defaultImage from "../../assets/image/basic-profile-img-post.png";
import moreImage from "../../assets/image/icon-more-post.png";
import homeTestImage from "../../assets/image/home-test.png";
import heartImage from "../../assets/image/icon-heart.png";
import heartClickImage from "../../assets/image/icon-heart-fill.png";
import commentImage from "../../assets/image/icon-comment.png";

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

export default function Card({ feed }) {
  // console.log(feed);

  const { posts } = { ...feed };

  console.log(posts);

  // 좋아요 기능 임시

  const toggleLike = () => {
    
  };

  return (
    <>
      {posts ? (
        posts.map((item, index) => (
          <li key={index}>
            <CardHeaderDiv>
              <CardHeaderImage src={item.author.image} />
              <div>
                <div>
                  <CardHeaderStrong>{item.author.username}</CardHeaderStrong>
                  <CardHeaderP>{item.author.accountname}</CardHeaderP>
                </div>
              </div>
              {/* 자신의 게시글일 때만 */}
              <CardHeaderButton type="button">
                <img src={moreImage} alt="설정" />
              </CardHeaderButton>
            </CardHeaderDiv>
            <img
              src={item.image}
              alt="#"
              style={{ width: "100%", height: "23rem" }}
            />
            <CardBodyUl>
              <li>
                <button type="button" onClick={toggleLike}>
                  {item.hearted ? (
                    <CardBodyImage src={heartClickImage} />
                  ) : (
                    <CardBodyImage src={heartImage} />
                  )}
                </button>
                <CardBodySpan>{item.heartCount}</CardBodySpan>
              </li>
              <li>
                <Link to={`/post/${item.author._id}`}>
                  <CardBodyImage src={commentImage} />
                </Link>
                <CardBodySpan style={{ transform: "translateY(-5%)" }}>
                  {item.commentCount}
                </CardBodySpan>
              </li>
            </CardBodyUl>
            <CardBodyP>{item.content}</CardBodyP>
            <CardBodyTime dateTime={item.createdAt}>
              <span>{item.createdAt.slice(0,4)}년</span>
              <span>{item.createdAt.slice(5,7)}월</span>
              <span>{item.createdAt.slice(8,10)}일</span>
            </CardBodyTime>
          </li>
        ))
      ) : (
        <></>
      )}
      </>
  );
}
