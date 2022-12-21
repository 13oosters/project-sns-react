import React from "react";

export default function Writing() {
  return (
    <section>
      <h4 class="sr-only">댓글 입력창</h4>
      <img src="" alt="gkdl" />
      <form method="post">
        <textarea required placeholder="댓글 입력하기.." />
        <button type="submit">게시</button>
      </form>
    </section>
  );
}