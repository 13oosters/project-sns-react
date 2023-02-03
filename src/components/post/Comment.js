import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import modalButtonImage from "../../assets/image/icon-more-post.png";
import Modal from "../common/Modal";
import defaultImage from "../../assets/image/basic-profile-img-post.png";
import {
  CommentLi,
  CommentUserInfoDiv,
  UserImage,
  UserNameStrong,
  CommentTime,
  CommentP,
  ModalImage,
} from "../style/post/comment";

export default function Comment({ comment, myInfo, setPostPageData }) {
  const [modal, isModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = { ...myInfo };

  let postId = "";

  const setModal = () => {
    isModal((prev) => !prev);
  };

  const commentTime = Math.round(
    (new Date().getTime() - Date.parse(comment.createdAt)) / 1000,
  );
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

  const getTime = () => {
    let time = "";

    if (commentTime < 60) {
      time = `몇초 전`;
    }
    if (commentTime > 60) {
      time = `${Math.round(commentTime / 60)}분 전`;
    }
    if (commentTime > 60 * 60) {
      time = `${Math.round(commentTime / (60 * 60))}시간 전`;
    }
    if (commentTime > 60 * 60 * 24) {
      time = `${Math.round(commentTime / (60 * 60 * 24))}일 전`;
    }

    return time;
  };

  if (user.accountname === comment.author.accountname) {
    postId = user.accountname;
  }
  return (
    <CommentLi>
      <CommentUserInfoDiv>
        <UserImage
          src={refineImageData(comment.author.image)}
          alt="프로필 사진"
          onClick={() => {
            navigate(`/${comment.author.accountname}`);
          }}
        />
        <UserNameStrong>{comment.author.accountname}</UserNameStrong>
        <CommentTime>{getTime()}</CommentTime>
        <ModalImage
          name={comment.id}
          src={modalButtonImage}
          alt="댓글 삭제 모달 버튼"
          onClick={setModal}
        />
      </CommentUserInfoDiv>
      <CommentP>{comment.content}</CommentP>
      {postId ? (
        <Modal
          modal={modal}
          isModal={isModal}
          type="mycomment"
          commentId={comment.id}
          postId={id}
          setPostPageData={setPostPageData}
        />
      ) : (
        <Modal
          modal={modal}
          isModal={isModal}
          type="othercomment"
          commentId={comment.id}
          postId={id}
        />
      )}
    </CommentLi>
  );
}
