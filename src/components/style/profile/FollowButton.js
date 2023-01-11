import React from "react";

export default function FollowButton({ size, isFollow, handleFollow }) {
  return (
    <>
      <FollowButton
        alt="팔로우 버튼"
        isFollow={isFollow}
        onClick={handleFollow}
        size={size}
      />
    </>
  );
}
