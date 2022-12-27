import { useEffect, useState } from "react";
import Comments from "./Comments";
import Writing from "./Writing";
import postData from "../../utils/postData";

/** 댓글 삭제 할때 필요할 것 같아서 setCommentData 프롭스 추가 사용안하면 지우기*/
export default function Dialog({ id, comments, setCommentData }) {
  const [myInfo, setMyInfo] = useState("");

  useEffect(() => {
    postData("myInfo", "", setMyInfo);
  }, []);
  console.log(myInfo);
  return (
    <>
      {comments && myInfo ? (
        <section>
          <h3 class="sr-only">댓글 창</h3>
          <Comments
            comments={comments}
            setCommentData={setCommentData}
            myInfo={myInfo}
          />
          <Writing
            id={id}
            comments={comments}
            setCommentData={setCommentData}
          />
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
