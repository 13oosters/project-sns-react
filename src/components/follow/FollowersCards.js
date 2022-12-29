import React from "react";
import styled from "styled-components";
import FollowersCard from "./FollowersCard";

const FollowListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 7.2rem 1.6rem 8.4rem;
`;

export default function FollowersCards({
  followersList = [],
  isUnfollowed,
  setIsUnfollowed,
}) {
  return (
    <main className="followerMain">
      <section className="followCards">
        <FollowListUl>
          {followersList.map((data, i) => (
            <FollowersCard
              key={i}
              {...data}
              idx={i}
              isUnfollowed={isUnfollowed}
              setIsUnfollowed={setIsUnfollowed}
            />
          ))}
        </FollowListUl>
      </section>
    </main>
  );
}
