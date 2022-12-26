import React from "react";

import Comments from "./Comments";
import Writing from "./Writing";

export default function Dialog({ id, postStoreData, setPostStoreData }) {
  const { comments } = { ...postStoreData };

  console.log(comments);

  return (
    <>
      {comments ? (
        <section>
          <h3 class="sr-only">댓글 창</h3>
          <Comments comments={comments} />
          <Writing
            id={id}
            comments={comments}
            postStoreData={postStoreData}
            setPostStoreData={setPostStoreData}
          />
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
