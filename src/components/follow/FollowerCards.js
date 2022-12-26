import React from "react";
import FollowerCard from "./FollowerCard";

export default function FollowerCards() {
  return (
    <main className="followerMain">
      <section className="followCards">
        <ul className="followList">
          <FollowerCard />
        </ul>
      </section>
    </main>
  );
}
