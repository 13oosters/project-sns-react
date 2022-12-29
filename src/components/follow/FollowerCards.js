import React from "react";
import styled from "styled-components";
import FollowerCard from "./FollowerCard";

const FollowListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 7.2rem 1.6rem 8.4rem;
`;

export default function FollowerCards({ followerList }) {

  // console.log(followerList);



  return (
    <main className="followerMain">
      <section className="followCards">
        <FollowListUl>
          <FollowerCard />
          <FollowerCard />
          <FollowerCard />

          {/* {followerList && followerList.length > 0
            ? followerList.map((followerList, id) => (
                <div key={id}>
                   <FollowerCard followerList={followerList} />
                 </div>
               ))
             : null} */}
        </FollowListUl>
      </section>
    </main>
  );
}
