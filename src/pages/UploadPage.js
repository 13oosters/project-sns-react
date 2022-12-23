import React from "react";

import Posting from "../components/upload/Posting";

import PageLayout from "../components/style/PageLayout";

export default function UploadPage() {
  return (
    <PageLayout paddingValue={0}>
      <h1 className="sr-only">게시글 업로드 페이지</h1>
      <Posting />
    </PageLayout>
  );
}
