import React from "react";

import Comments from "./Comments";
import Writing from "./Writing";
import PageLayout from "../style/PageLayout";

export default function Dialog() {
  return (
    <PageLayout paddingValue={"1.6"}>
      <h3 class="sr-only">댓글 창</h3>
      <Comments />
      <Writing />
    </PageLayout>
  );
}
