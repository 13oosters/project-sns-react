import React from "react";
import Card from "./Card";

export default function Cards({feed, setIsHomeModal}) {


  return (
    <section>
      <h3 className="sr-only">게시글</h3>
      <ol reversed>
        {feed ? feed.map((post, index) => <Card key={index} post={post} setIsHomeModal={setIsHomeModal}/>) : <></>}
        {/* <Card post={feed}/> */}
        {/* <Card />
        <Card />
        <Card /> */}
      </ol>
    </section>
  );
}