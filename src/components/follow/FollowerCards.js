import React from "react";
import styled from "styled-components";
import FollowerCard from "./FollowerCard";

const FollowList = styled.ul`
  margin-top: 2.4rem;
`;

export default function FollowerCards({ followerList }) {
  console.log(followerList);

  return (
    <main className="followerMain">
      <section className="followCards">
        <FollowList className="followList">
          {followerList && followerList.length > 0
            ? followerList.map((followerList, id) => (
                <div key={id}>
                  <FollowerCard followerList={followerList} />
                </div>
              ))
            : null}
        </FollowList>
      </section>
    </main>
  );
}
