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
`

const CardHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1.5rem;
`

const CardHeaderStrong = styled.strong`
  font-size: ${(props) => props.theme.baseFontSize};
  font-weight: 500;
`
const CardHeaderP = styled.p`
  ${smallFont}
  margin-top: 0.2rem;
  &::before{
    content: '@ ';
  }
`
const CardHeaderButton = styled.button`
  margin-left: auto;
  padding: 0;
`
const CardBodyUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.8rem;
`
const CardBodySpan = styled.span`
  ${smallFont}
  vertical-align: middle;
  margin-left: 0.9rem;
`
const CardBodyImage = styled.img`
  vertical-align: middle;
`
const CardBodyP = styled.p`
  font-size: ${(props) => props.theme.baseFontSize};
  padding: 0 1.3rem;
`
const CardBodyTime = styled.time`
  ${smallFont};
  display: flex;
  gap: 0.5rem;
  padding: 1.3rem;
`

export default function Card() {

  // 좋아요 기능 임시
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    if(like){
      return setLike(false);
    }
    return setLike(true);
  }

  return (
    <li>
      <CardHeaderDiv>
          <img src={defaultImage} alt="#" />
        <div>
          <div>
            <CardHeaderStrong>호박이</CardHeaderStrong>
            <CardHeaderP>hobak2</CardHeaderP>
          </div>
        </div>
        {/* 자신의 게시글일 때만 */}
        <CardHeaderButton type="button">
          <img src={moreImage} alt="설정" />
        </CardHeaderButton>
      </CardHeaderDiv>
      <img src={homeTestImage} alt="#" style={{width: "100%", height: "23rem"}}/>
      <CardBodyUl>
        <li>
          <button type="button" onClick={toggleLike}>
            {like ? <CardBodyImage src={heartClickImage}/> : <CardBodyImage src={heartImage}/>}
          </button>
          <CardBodySpan>59</CardBodySpan>
        </li>
        <li>
          <Link to={"/account/post"}>
            <CardBodyImage src={commentImage} />
          </Link>
          <CardBodySpan style={{transform: "translateY(-5%)"}}>3</CardBodySpan>
        </li>
      </CardBodyUl>
      <CardBodyP>집사의 코딩을 방해하는 나, 제법 귀여울지도?</CardBodyP>
      <CardBodyTime dateTime="2022-12-05">
        <span>2022년</span>
        <span>12월</span>
        <span>5일</span>
      </CardBodyTime>
    </li>
  );
}
