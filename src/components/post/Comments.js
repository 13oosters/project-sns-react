import React from "react";
import styled from "styled-components";

import Comment from "./Comment";

const CommentsSection = styled.section`
  
  margin-top: 10rem;
  border-top: 1px solid ${(props) => props.theme.lightColor};
`;

export default function Comments({ comments, myInfo, setPostPageData }) {
  return (
    <CommentsSection>
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
    </CommentsSection>
  );
}
