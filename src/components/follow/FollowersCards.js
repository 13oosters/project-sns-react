import React from "react";
import styled from "styled-components";
import FollowersCard from "./FollowersCard";

const FollowListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 1rem 0;
  padding: 0rem 1.6rem 0rem 1.6rem;
`;

const FollowListDiv = styled.div`
  height: calc(100% - 108px);
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`

export default function FollowersCards({
  followersList = [],
  isUnfollowed,
  setIsUnfollowed,
}) {
  return (
      <FollowListDiv>
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
      </FollowListDiv>
  );
}
