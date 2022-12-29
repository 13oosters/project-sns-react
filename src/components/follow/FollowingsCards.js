import React from "react";
import styled from "styled-components";
import FollowingsCard from "./FollowingsCard";

const FollowingListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 7.2rem 1.6rem 8.4rem;
`;

export default function FollowingsCards({
  followingList = [],
  isUnfollowed,
  setIsUnfollowed,
}) {
  console.log(isUnfollowed);

  return (
    <main className="followerMain">
      <section className="followCards">
        <FollowingListUl>
          {followingList.map((data, i) => (
            <FollowingsCard
              key={i}
              {...data}
              idx={i}
              isUnfollowed={isUnfollowed}
              setIsUnfollowed={setIsUnfollowed}
            />
          ))}
        </FollowingListUl>
      </section>
    </main>
  );
}
