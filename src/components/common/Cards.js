import React from "react";
import Card from "./Card";

export default function Cards({ feed, setFeed }) {
  return (
    <section>
      <h3 className="sr-only">게시글</h3>
      <ol reversed>
        {feed ? (
          feed.map((post, index, fullArray) => <Card key={post.id} post={post} fullArray={fullArray} setFeed={setFeed}/>)
        ) : (
          <></>
        )}
        {/* <Card post={feed}/> */}
        {/* <Card />
        <Card />
        <Card /> */}
      </ol>
    </section>
  );
}
