import React from "react";
import FollowingCard from "./FollowingCard";

export default function FollowingCards() {
  return (
    <main className="followerMain">
      <section className="followCards">
        <ul className="followList">
          <FollowingCard />
        </ul>
      </section>
    </main>
  );
}
