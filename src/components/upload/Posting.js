import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ImageUpload from "./ImageUpload";
import TextUpload from "./TextUpload";
import Button from "../style/Button";

import API from "../../utils/api";

const DeatailSection = styled.section`
  margin-top: 4rem;
`;

const UploadButton = styled(Button)`
  margin: 2rem 2rem 2rem auto;
  width: 9rem;
  font-size: ${(props) => props.theme.baseFontSize};
  font-weight: ${(props) => props.theme.mediumFontWeight};
`;
// useState에 프롭스값 넣고싶으면 useEffect를 사용하자

export default function Posting({ userData, setUserData, type }) {
  const { post } = { ...userData };
  const postImage = post.image.split(",");

  const [imageData, setImageData] = useState([]);

  const [originalImage, setOriginalImage] = useState([]);

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
      navigate(-1);
    }
  };
  const setOrigin = () => {
    setOriginalImage(postImage);
    setImageData([...originalImage, ...imageData]);
  };

  useEffect(() => {
    setOrigin();
  }, []);
  const editPost = async (e) => {
    e.preventDefault();
    // console.log(originalImage);

    try {
      console.log(imageData);
      await API.put(
        `/post/${userData.post.id}`,
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
      ).then((res) => console.log(res));
    } catch (error) {
      throw new Error(error);
    } finally {
      //   navigate(-1);
    }
  };

  if (type === "upload") {
    return (
      <DeatailSection>
        <h2 className="sr-only">게시글 작성</h2>
        <form onSubmit={uploadPost}>
          <ImageUpload
            userData={userData}
            imageData={imageData}
            setImageData={setImageData}
          />
          <TextUpload userData={userData} type="upload" />
          <UploadButton type="submit">업로드</UploadButton>
        </form>
      </DeatailSection>
    );
  }

  if (type === "edit") {
    return (
      <DeatailSection>
        <h2 className="sr-only">게시글 수정</h2>
        <form onSubmit={editPost}>
          <ImageUpload
            userData={userData}
            imageData={imageData}
            setImageData={setImageData}
            originalImage={originalImage}
            setOriginalImage={setOriginalImage}
          />
          <TextUpload userData={userData} type="edit" />
          <UploadButton type="submit">수정하기</UploadButton>
        </form>
      </DeatailSection>
    );
  }
}
