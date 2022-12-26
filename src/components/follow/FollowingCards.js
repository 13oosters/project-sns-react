import React from "react";
import FollowingCard from "./FollowingCard";

export default function FollowingCards({ followingList }) {
  console.log(followingList);

  return (
    <main className="followerMain">
      <section className="followCards">
        <ul className="followList">
          {followingList && followingList.length > 0 ? (
            followingList.map((followingList, id) => (
              <div key={id}>
                <FollowingCard followingList={followingList} />
              </div>
            ))
          ) : (
            <div>팔로잉하는 유저가 없습니다.</div>
          )}
        </ul>
      </section>
    </main>
  );
}
