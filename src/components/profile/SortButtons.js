import React, { useState } from "react";
import styled from "styled-components";

import SortAlbumActiveImage from "../../assets/image/icon-post-album-on.png";
import SortAlbumOffImage from "../../assets/image/icon-post-album-off.png";
import SortListActiveImage from "../../assets/image/icon-post-list-on.png";
import SortListOffImage from "../../assets/image/icon-post-list-off.png";

const SortButtonWrapDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  padding: 0.9rem 1.6rem 0.9rem 0;
  height: 4.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.lightColor};
  box-sizing: border-box;
`;

export default function SortButtons({
  listClick,
  setListClick,
  albumClick,
  setAlbumClick,
}) {
  const onClickList = () => {
    setListClick(true);
    setAlbumClick(false);
  };

  const onClickAlbum = () => {
    setAlbumClick(true);
    setListClick(false);
  };

  return (
    <>
      <SortButtonWrapDiv>
        <button onClick={onClickAlbum}>
          {albumClick === false ? (
            <img src={SortAlbumOffImage} alt="" />
          ) : (
            <img src={SortAlbumActiveImage} alt="" />
          )}
        </button>
        <button onClick={onClickList}>
          {listClick === false ? (
            <img src={SortListOffImage} alt="" />
          ) : (
            <img src={SortListActiveImage} alt="" />
          )}
        </button>
      </SortButtonWrapDiv>
    </>
  );
}
