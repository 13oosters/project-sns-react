import React from "react";

export default function Card() {
  return (
    <li>
      <div>
        <div>
          <img src="#" alt="#" />
          <div>
            <strong>호박이</strong>
            <p>hobak2</p>
          </div>
        </div>
        {/* 자신의 프로필일 때만 */}
        <button type="button">...</button>
      </div>
      <img src="#" alt="#" />
      <ul>
        <li>
          <button type="button">
            <img src="#" alt="#" />
          </button>
          <span>59</span>
        </li>
        <li>
          <a href="#;">
            <img src="3" alt="#" />
          </a>
          <span>3</span>
        </li>
      </ul>
      <p>집사의 코딩을 방해하는 나, 제법 귀여울지도?</p>
      <time datetime="2022-12-05">
        <span>2022</span> <span>12</span> <span>5</span>
      </time>
    </li>
  );
}
