import React from "react";

import Comments from "./Comments";
import Writing from "./Writing";

export default function Dialog() {
  return (
    <section>
      <h3 class="sr-only">댓글 창</h3>
      <Comments />
      <Writing />
    </section>
  );
}
