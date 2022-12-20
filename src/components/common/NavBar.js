import React from "react";

export default function NavBar() {
  return (
    <article>
      <h3 class="sr-only">탭 메뉴</h3>
      <nav>
        <ul>
          <li>
            <a href="#;">홈</a>
          </li>
          <li>
            <a href="#;">검색</a>
          </li>
          <li>
            <a href="#;">게시물 작성</a>
          </li>
          <li>
            <a href="#;">프로필</a>
          </li>
        </ul>
      </nav>
    </article>
  );
}
