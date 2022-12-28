import React from "react";
import Notice from "../components/common/Notice";

export default function ErrorPage() {
  return (
    <section>
      <h1 className="sr-only">에러 페이지</h1>
      <Notice type="에러" />
    </section>
  );
}
