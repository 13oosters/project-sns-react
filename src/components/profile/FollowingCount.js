import React from "react";
import { Link } from "react-router-dom";
import FollowCountDiv from "../style/profile/FollowCountDiv";
import FollowCountP from "../style/profile/FollowCountP";
import FollowCountSpan from "../style/profile/FollowCountSpan";

export default function FollowingCount() {
  return (
    <FollowCountDiv>
      <Link>
        <FollowCountP>1290</FollowCountP>
        <FollowCountSpan>followings</FollowCountSpan>
      </Link>
    </FollowCountDiv>
  );
}
