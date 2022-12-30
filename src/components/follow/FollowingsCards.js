import React from "react";
import styled from "styled-components";
import FollowingsCard from "./FollowingsCard";

const FollowingListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 1rem;
  margin-bottom:1rem;
  padding: 0rem 1.6rem 0rem 1.6rem;
`;

const FollowListDiv = styled.div`
  height: calc(100% - 108px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function FollowingsCards({
  followingList = [],
  isUnfollowed,
  setIsUnfollowed,
}) {
  console.log(isUnfollowed);

  return (
    <FollowListDiv>
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
    </FollowListDiv>
  );
}
