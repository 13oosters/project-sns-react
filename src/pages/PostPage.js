import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/style/Header";
import Detail from "../components/post/Detail";
import Modal from "../components/common/Modal";
import postData from "../utils/postData";

/* 처음페이지 들어왔을때 한번만 실행 */
/** 1.useparam으로 얻은 id와 get해서 받은 id가 같으면 출력
 * 2. 얻은 정보를 전달 사용자 이름 아이디 글 이미지 하트수 댓글 수 업데이트 날짜
 * 3.삭제 수정에도 useparams와 비교해서 보여주기
 * 4. 댓글 기능 */
export default function PostPage() {
  const [isModal, setIsModal] = useState(false);

  const { id } = useParams();
  const [postStoreData, setStorePostData] = useState("");
  const [Loading, IsLoading] = useState(false);

  console.log(id);

  useEffect(() => {
    postData("detailPost", id, setStorePostData);
    IsLoading(true);
  }, []);

  return (
    <>
      {postStoreData ? (
        <>
          <div>
            <h1 className="sr-only">게시글 상세보기</h1>
            <Header type="post" />
            <Detail
              setIsModal={setIsModal}
              postStoreData={postStoreData}
              id={id}
            />
          </div>
          <Modal isModal={isModal} />
        </>
      ) : (
        <>
          <div>{postStoreData.message}</div>
        </>
      )}
    </>
  );
}
