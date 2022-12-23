import React from "react";

import Card from "../common/Card";

export default function Cards({ feed }) {
  const { posts } = { ...feed };

  // console.log(posts);

  return (
    <section>
      <h3 className="sr-only">게시글</h3>
      <ol reversed>
        {posts ? posts.map((post) => <Card post={post} />) : <></>}
      </ol>
    </section>
  );
}
