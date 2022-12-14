import React from "react";

export default function ProfileSetting({ title }) {
  return (
    <>
      {title === "프로필 설정" ? (
        <>
          <h2>{title}</h2>
          <p>나중에 언제든지 변경할 수 있습니다.</p>
        </>
      ) : null}
      <div>
        <input type="file" />
        <img src="" alt="넣어주세요" />
      </div>
      <form method="post" action="#;">
        <label>
          사용자 이름
          <input type="text" required placeholder="2~10자 이내여야 합니다." />
        </label>
        <label>
          계정 ID
          <input
            type="text"
            required
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          />
        </label>
        <label>
          소개
          <input
            type="text"
            placeholder="당신과 반려동물에 대해 소개해 주세요!"
          />
        </label>
        <a href="#;">{title === "프로필 설정" ? "멍하냥 시작하기" : "저장"}</a>
      </form>
    </>
  );
}
