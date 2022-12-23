import React from "react";
import Card from "./Card";

export default function Cards({feed}) {

  const {posts} = {...feed};

  // console.log(posts);

  return (
    <section>
      <h3 className="sr-only">게시글</h3>
      <ol reversed>
        {posts ? posts.map((post) => <Card post={post}/>) : <></>}
        {/* <Card post={feed}/> */}
        {/* <Card />
        <Card />
        <Card /> */}
      </ol>
    </section>
  );
}
