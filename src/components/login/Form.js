import React from "react";

export default function Form({ title, buttonText }) {
  return (
    <>
      <h2>{title}</h2>
      <form method="post" action="#;">
        <label>
          이메일
          <input
            type="email"
            required
            placeholder="이메일 주소를 입력해주세요"
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            required
            placeholder="비밀번호를 설정해 주세요"
          />
        </label>
        <button type="submit">{buttonText}</button>
      </form>
      {/* 이준근이 작성한 함수 */}
      {title === "로그인" ? <a href="#;">이메일로 회원가입</a> : null}
      {/* yubmun 작업 진행했습니다 */}
    </>
  );
}
