import { useEffect, useState } from "react";
import Comments from "./Comments";
import Writing from "./Writing";
import postData from "../../utils/postData";

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
          <Comments comments={comments} myInfo={myInfo} />
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
