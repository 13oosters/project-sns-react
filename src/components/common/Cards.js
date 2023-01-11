import React from "react";
import Loading from "../home/Loading";
import Card from "./Card";

export default function Cards({ feed, setFeed, ref1, wait }) {
  return (
    <section>
      <h3 className="sr-only">게시글</h3>
      <ol reversed>
        {feed ? (
          feed.map((post, index, fullArray) => (
            <Card
              key={post.id}
              post={post}
              fullArray={fullArray}
              setFeed={setFeed}
            />
          ))
        ) : (
          <></>
        )}
        <Loading ref1={ref1} wait={wait} />
      </ol>
    </section>
  );
}
