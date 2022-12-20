import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <section>
      <h3 class="sr-only">게시글</h3>
      <ol reversed>
        <Card />
        <Card />
        <Card />
        <Card />
      </ol>
    </section>
  );
}
