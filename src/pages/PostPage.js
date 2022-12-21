import React from "react";

import Header from "../components/style/Header";
import Detail from "../components/post/Detail";

export default function PostPage() {
  return (
    <>
      <section>
        <h1 className="sr-only">게시글 상세보기</h1>
        <Header type="post" />
        <Detail />
      </section>
      <section>
        <h2 className="sr-only">게시글 삭제 수정모달창</h2>
      </section>
    </>
  );
}
