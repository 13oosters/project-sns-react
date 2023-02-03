import React from "react";
import styled from "styled-components";

import Comment from "./Comment";

export default function Comments({ comments, myInfo, setPostPageData }) {
  return (
    <section>
      <h4 className="sr-only">댓글 목록</h4>
      <ol>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            myInfo={myInfo}
            setPostPageData={setPostPageData}
          />
        ))}
      </ol>
    </section>
  );
}
