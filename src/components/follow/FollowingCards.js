import React from "react";
import styled from "styled-components";
import FollowingCard from "./FollowingCard";

const FollowingListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 7.2rem 1.6rem 8.4rem;
`;

export default function FollowingCards({ followingList }) {
  //  console.log(followingList);

  return (
    <main className="followerMain">
      <section className="followCards">
        <FollowingListUl>
          <FollowingCard />
          <FollowingCard />
          <FollowingCard />
          {/*         {followingList && followingList.length > 0
            ? followingList.map((v, i) => (
                <FollowingCard key={i} followingList={followingList} />
              ))
            : null} */}
        </FollowingListUl>
      </section>
    </main>
  );
}
