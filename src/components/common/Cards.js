import React from "react";
import Card from "./Card";

export default function Cards({feed}) {

console.log(feed);

  return (
    <section>
      <h3 className="sr-only">게시글</h3>
      <ol reversed>
        {/* 받아온 데이터를, sort를 이용하여 가장 최근 날짜로 정렬, 카드로 데이터 넘겨줌 */}
        {feed ? feed.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)).map((post) => <Card post={post}/>) : <></>}
        {/* <Card post={feed}/> */}
        {/* <Card />
        <Card />
        <Card /> */}
      </ol>
    </section>
  );
}
