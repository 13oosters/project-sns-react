import React from "react";

import Comments from "./Comments";
import Writing from "./Writing";

export default function Dialog({ id, comments, setCommentData }) {
  return (
    <>
      {comments ? (
        <section>
          <h3 class="sr-only">댓글 창</h3>
          <Comments comments={comments} />
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
