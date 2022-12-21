import React from "react";

import Comment from "./Comment";

export default function Comments() {
  return (
    <section>
      <h4 class="sr-only">댓글 목록</h4>
      <ol reversed>
        <Comment />
      </ol>
    </section>
  );
}