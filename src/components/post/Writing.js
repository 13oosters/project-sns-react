import React from "react";

import profileImage from "../../assets/image/basic-profile-img-post.png";

export default function Writing() {
  return (
    <section>
      <h4 class="sr-only">댓글 입력창</h4>
      <img src={profileImage} alt="사용자 프로필 사진" />
      <form method="post">
        <textarea required placeholder="댓글 입력하기.." />
        <button type="submit">게시</button>
      </form>
    </section>
  );
}
