import React from "react";
import styled from "styled-components";

import UpLoadImage from "../../../src/assets/image/profile-upload-button.png";

const ProfileLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto 0;
  width: 11rem;
  cursor: pointer;
`;

const UploadImageDiv = styled.div`
  position: relative;
  width: 11rem;
  height: 11rem;
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    background: url(${UpLoadImage});
  }
`;

const UploadImg = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
`;

export default function ImageUpload() {
  return (
    <>
      <div>
        <img src="#;" alt="프로필 사진" />

        <label htmlFor="file">
          <input type="file" id="file" />
        </label>
      </div>

      <ul>
        <li>
          <img src="#" alt="asd" />
        </li>
      </ul>
    </>
  );
}
