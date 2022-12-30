import React from "react";
import Notice from "../components/common/Notice";
import LayoutSection from "../components/style/PageLayout";

export default function ErrorPage() {
  return (
    <LayoutSection>
      <h1 className="sr-only">에러 페이지</h1>
      <Notice type="에러" />
    </LayoutSection>
  );
}
