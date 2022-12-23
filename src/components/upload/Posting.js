import React from "react";

import ImageUpload from "./ImageUpload";
import TextUpload from "./TextUpload";

import PageLayout from "../style/PageLayout";

export default function Posting() {
  return (
    <PageLayout paddingValue={1.5}>
      <h2 className="sr-only">게시글 작성</h2>
      <form>
        <ImageUpload />
        <TextUpload />
        <button type="submit">업로드</button>
      </form>
    </PageLayout>
  );
}
