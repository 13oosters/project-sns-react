import React from "react";
import styled from "styled-components";
import Modal from "../common/Modal";

import Comment from "./Comment";

const CommentsSection = styled.section`
  margin-top: 10rem;
  border-top: 1px solid ${(props) => props.theme.lightColor};
`;

export default function Comments({ comments }) {
  return (
    <CommentsSection>
      <h4 class="sr-only">댓글 목록</h4>
      <ol>
        {comments.map((comment) => (
          <Comment key={comment.updatedAt} comment={comment} />
        ))}
      </ol>
    </CommentsSection>
  );
}

/** <>
      {comments ? (
        <CommentsSection>
          <h4 class="sr-only">댓글 목록</h4>
          <ol>
            {comments.reverse().map((comment) => (
              <Comment key={comment.updatedAt} comment={comment} />
            ))}
          </ol>
        </CommentsSection>
      ) : (
        <>
          <div>안녕</div>
        </>
      )}
    </> */
