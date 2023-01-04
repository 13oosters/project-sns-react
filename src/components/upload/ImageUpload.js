import React, { useRef } from "react";
import styled from "styled-components";

import uploadImage from "../../../src/assets/image/profile-upload-button.png";
import cancelImage from "../../../src/assets/image/icon-cancel.png";

import API from "../../utils/api";

const ProfileLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  //  margin: 3rem auto 0;
  width: 4rem;
  cursor: pointer;
`;

const ImageUploadDiv = styled.div`
  padding: 2rem 1.6rem;
  border-bottom: 1px solid #e4e4e4;
  height: 33.6rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UploadImage = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
`;

const UploadP = styled.p`
  flex-grow: 2;
  margin-left: 1.3rem;
  color: #c4c4c4;
  font-size: ${(props) => props.theme.baseFontSize};
`;

const ImageUl = styled.ul`
  display: flex;
  margin: 2.3rem auto;
  border-radius: 1rem;
  width: 24rem;
  gap: 1.2rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 10px;
  }
`;
const ImageLi = styled.li`
  position: relative;
  margin: 1rem 0;
  border-radius: 1rem;
`;
const Image = styled.img`
  border-radius: 1rem;
  width: 24rem;
  height: 18rem;
`;
const CancelButton = styled.button`
  position: absolute;
  top: 1.7rem;
  right: 1.7rem;
  padding: 0;
  border: none;
  color: #ffffff;
`;
const CancelImage = styled.img``;

export default function ImageUpload({
  userData,
  imageData,
  setImageData,
  setOriginalImage,
  originalImage,
  type,
}) {
  const uploadCounter = useRef(0);

  const registerImage = async (e) => {
    uploadCounter.current += 1;
    if (uploadCounter.current > 3) {
      alert("3개 이하의 파일을 업로드 하세요.");
      return;
    }

    const formData = new FormData();

    formData.append("image", e.target.files[0]);
    const response = await API.post("/image/uploadfile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = await response.data;

    setImageData([
      ...imageData,
      `https://mandarin.api.weniv.co.kr/${data.filename}`,
    ]);
  };

  const deleteImage = async (e) => {
    uploadCounter.current -= 1;
    const idx = e.target.closest("li").dataset.index;

    const copy = [...imageData];

    copy.splice(idx, 1);
    setImageData(copy);
  };
  const deleteOriginalImage = (e) => {
    const idx = e.target.closest("li").dataset.index;

    originalImage.splice(idx, 1);
    setOriginalImage([...originalImage]);
  };

  const refineImageUrl = (file) => {
    if (file.includes("https://mandarin.api.weniv.co.kr")) {
      return file;
    }
    return `https://mandarin.api.weniv.co.kr/${file}`;
  };

  return (
    <ImageUploadDiv>
      <Container>
        {type === "edit" ? (
          <UploadImage
            src={refineImageUrl(userData.post.author.image)}
            alt="게시글업로드이미지"
            style={{ objecFit: "cover" }}
          />
        ) : (
          <UploadImage
            src={refineImageUrl(userData.image)}
            alt="게시글업로드이미지"
            style={{ objecFit: "cover" }}
          />
        )}

        <UploadP>사진 첨부하기</UploadP>
        <ProfileLabel htmlFor="image">
          <UploadImage src={uploadImage} alt="파일첨부버튼" />
          <input
            type="file"
            id="image"
            name="image"
            style={{ display: "none" }}
            onChange={registerImage}
          />
        </ProfileLabel>
      </Container>

      <ImageUl>
        {type === "edit" ? (
          originalImage.map((image, i) => (
            <ImageLi key={i} data-index={i}>
              <Image src={image} alt="게시글 사진" />
              <CancelButton onClick={deleteOriginalImage} type="button">
                <CancelImage src={cancelImage} alt="취소버튼" />
              </CancelButton>
            </ImageLi>
          ))
        ) : (
          <></>
        )}

        {imageData.map((url, i) => (
          <ImageLi key={i} data-index={i}>
            <Image
              src={url}
              alt="게시글 사진"
              onError={(e) => {
                e.target.parentNode.style.display = "none";
              }}
            />
            <CancelButton onClick={deleteImage} type="button">
              <CancelImage src={cancelImage} alt="취소버튼이미지" />
            </CancelButton>
          </ImageLi>
        ))}
      </ImageUl>
    </ImageUploadDiv>
  );
}
