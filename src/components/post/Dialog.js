import React from "react";
import styled from "styled-components";

import Comments from "./Comments";
import Writing from "./Writing";

const DialogSection = styled.section`
  padding: 10rem 1.6rem 0;
`;

export default function Dialog() {
  return (
    <DialogSection>
      <h3 class="sr-only">댓글 창</h3>
      <Comments />
      <Writing />
    </DialogSection>
  );
}
