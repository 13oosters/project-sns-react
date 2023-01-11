import React from "react";
import styled from "styled-components";
import FollowingsCard from "./FollowingsCard";

const FollowingListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 1rem 0;
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
  followingsList = [],
  isUnfollowed,
  setIsUnfollowed,
  setFollowingsList,
}) {
  // console.log(isUnfollowed);

  return (
    <FollowListDiv>
      <FollowingListUl>
        {followingsList.map((data, i) => (
          <FollowingsCard
            key={i}
            {...data}
            idx={i}
            isUnfollowed={isUnfollowed}
            setIsUnfollowed={setIsUnfollowed}
            followingsList={followingsList}
            setFollowingsList={setFollowingsList}
          />
        ))}
      </FollowingListUl>
    </FollowListDiv>
  );
}
