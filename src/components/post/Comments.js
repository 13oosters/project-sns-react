import React from "react";
import styled from "styled-components";

import Comment from "./Comment";

const CommentsSection = styled.section`
  padding-top: 2rem;
`;

export default function Comments() {
  return (
    <CommentsSection>
      <h4 class="sr-only">댓글 목록</h4>
      <ol reversed>
        <Comment />
        <Comment />
      </ol>
    </CommentsSection>
  );
}
