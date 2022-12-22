import React from "react";

import Card from "../common/Card";
import Dialog from "../post/Dialog";

export default function Detail({ setIsModal }) {
  return (
    <section>
      <h2 class="sr-only">게시글</h2>
      <Card setIsModal={setIsModal} />
      <Dialog />
    </section>
  );
}
