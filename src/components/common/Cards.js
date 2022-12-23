import React from "react";
import Card from "./Card";

export default function Cards({feed}) {


  return (
    <section>
      <h3 className="sr-only">게시글</h3>
      <ol reversed>
        <Card feed={feed}/>
        {/* <Card />
        <Card />
        <Card /> */}
      </ol>
    </section>
  );
}
