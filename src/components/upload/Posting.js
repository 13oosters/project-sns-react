import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ImageUpload from "./ImageUpload";
import TextUpload from "./TextUpload";
import Button from "../style/Button";

import PageLayout from "../style/PageLayout";
import API from "../../utils/api";

const UploadButton = styled(Button)`
  margin: 2rem 2rem 2rem auto;
  width: 9rem;
  font-size: ${(props) => props.theme.baseFontSize};
  font-weight: ${(props) => props.theme.mediumFontWeight};
`;

export default function Posting({ userData, setUserData }) {
  const [imageData, setImageData] = useState([]);
  const navigate = useNavigate();

  const uploadPost = async (e) => {
    e.preventDefault();
    try {
      await API.post(
        "/post",
        {
          post: {
            content: e.target[2].value,
            image: imageData.join(", "),
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json",
          },
        },
      );
    } catch (error) {
      throw new Error(error);
    } finally {
      navigate(`/${userData.accountname}`);
    }
  };

  return (
    <PageLayout paddingValue={0}>
      <h2 className="sr-only">게시글 작성</h2>
      <form onSubmit={uploadPost}>
        <ImageUpload
          userData={userData}
          imageData={imageData}
          setImageData={setImageData}
        />
        <TextUpload />
        <UploadButton type="submit">업로드</UploadButton>
      </form>
    </PageLayout>
  );
}
