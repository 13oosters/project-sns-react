import React from "react";
import styled from "styled-components";

import SortAlbumActiveImage from "../../assets/image/icon-post-album-on.png";
// import SortAlbumOffImage from "../../assets/image/icon-post-album-off.png";
// import SortListActiveImage from "../../assets/image/icon-post-list-on.png";
import SortListOffImage from "../../assets/image/icon-post-list-off.png";

const SortButtonWrapDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.9rem 1.6rem 0 0.9rem;
  height: 4.4rem;
  border-bottom: 1px solid ${(props) => props.theme.lightColor};
`;

export default function SortButtons() {
  return (
    <SortButtonWrapDiv>
      <button>
        <img src={SortAlbumActiveImage} alt="#" />
      </button>
      <button>
        <img src={SortListOffImage} alt="#" />
      </button>
    </SortButtonWrapDiv>
  );
}
