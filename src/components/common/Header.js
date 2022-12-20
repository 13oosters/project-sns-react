import React from "react";

export default function Header({ type }) {
  const UI = {
    logo: (
      <h1>
        <img src="#" alt="멍하냥" />
      </h1>
    ),
    search: (
      <>
        <h2 class="sr-only">검색창</h2>
        <div>
          <a href="#;">
            <img src="#" alt="뒤로 가기" />
          </a>
          <input placeholder="계정 검색" />
          <button type="button">취소 버튼</button>
        </div>
      </>
    ),
    profile: (
      <div>
        <a href="#;">
          <img src="#" alt="뒤로 가기" />
        </a>
        <button type="button">...</button>
      </div>
    ),
    followers: (
      <>
        <div>
          <a href="#;">
            <img src="#" alt="뒤로 가기" />
          </a>
          <h2>Followers</h2>
        </div>
      </>
    ),
  };

  return <header>{UI[type]}</header>;
}
