import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import defaultImage from "../../assets/image/basic-profile-img-post.png";
import moreImage from "../../assets/image/icon-more-post.png";
import homeTestImage from "../../assets/image/home-test.png";
import heartImage from "../../assets/image/icon-heart.png";
import heartClickImage from "../../assets/image/icon-heart-fill.png";
import commentImage from "../../assets/image/icon-comment.png";
import API from "../../utils/api";
import PostImage from "../home/PostImage";
import Modal from "./Modal";

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
  margin-left: 0.5rem;
`;
const CardBodySpan = styled.span`
  ${smallFont}
  vertical-align: middle;
  margin-left: 0.9rem;
`;
const CardBodyImage = styled.img`
  vertical-align: middle;
  width: 2rem;
  height: 2rem;
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

export default function Card({ setIsPostModal, post }) {
  // console.log(feed);

  const {
    author,
    content,
    image,
    hearted,
    heartCount,
    commentCount,
    createdAt,
    id,
  } = {
    ...post,
  };

  const navigate = useNavigate();

  const { account } = useParams();

  const [heart, setHeart] = useState(hearted);
  const [heartCounting, setHeartCounting] = useState(heartCount);
  const [homeModal, setIsHomeModal] = useState(false);
  const [modalType, setModalType] = useState();
  const [myAccountname, setMyAccountname] = useState();

  const getMyAccountname = async() => {
    const response = await API.get("/user/myinfo", {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    });
    const result = await response.data;
    const myId = await result.user.accountname;

    setMyAccountname(myId);
  }

  useEffect(()=>{
    getMyAccountname();
    console.log(myAccountname);
    
  },[])

  const heartButtonClick = async() => {
    if(heart){
      setHeart(false);
      setHeartCounting(heartCounting - 1);
      const response = await API.delete(`/post/${id}/unheart`, {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      });

      return response;
    }

    setHeart(true);
    setHeartCounting(heartCounting + 1);
    const response = await API.post(`post/${id}/heart`,{
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    });

    return response;
  }


  return (
    <>
      {post && myAccountname ? (
        <li>
          <CardHeaderDiv>
            {/** 모달 버튼이 작동을 안해서 이미지로 navigate이동했습니다 */}
            <CardHeaderImage
              src={author.image}
              onClick={() => navigate(`/${author.accountname}`)}
            />
            <div>
              <div>
                <CardHeaderStrong>{author.username}</CardHeaderStrong>
                <CardHeaderP>{author.accountname}</CardHeaderP>
              </div>
            </div>
            {/* 자신의 게시글 => 삭제 수정모달 , 다른사람게시글 => 신고하기 */}
            {/** 모달창 컴포넌트로 변경했습니다 */}
            <CardHeaderButton
              type="button"
              onClick={() => {
                account ? setIsPostModal((prev) => !prev) : setIsHomeModal((prev) => !prev);
                
              }}
            >
              <img src={moreImage} alt="설정" />
            </CardHeaderButton>
          </CardHeaderDiv>
          <PostImage image={image}/>
          <CardBodyUl>
            <li style={{width: "4rem"}}>
              <button type="button" onClick={heartButtonClick}>
                  <CardBodyImage src={heart ? heartClickImage : heartImage} />
              </button>
              <CardBodySpan>{heartCounting}</CardBodySpan>
            </li>
            <li>
              <Link to={`${author.accountname}/post/${id}`}>
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
          {myAccountname === author.accountname ? <Modal isModal={homeModal} type="mypost" postId={id}/> : <Modal isModal={homeModal} type="otherpost" postId={id} />}
          
        </li>
      ) : (
        <></>
      )}
    </>
  );
}

/**
 *     if(myAccountname === author.accountname){
      setModalType("mypost")
    } else {
      setModalType("otherpost")
    }
 */
