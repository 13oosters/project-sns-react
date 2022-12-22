import React from "react";

import SortAlbumActiveImage from "../../assets/image/icon-post-album-on.png";
// import SortAlbumOffImage from "../../assets/image/icon-post-album-off.png";
// import SortListActiveImage from "../../assets/image/icon-post-list-on.png";
import SortListOffImage from "../../assets/image/icon-post-list-off.png";

export default function SortButtons() {
  return (
    <div>
      <img src={SortAlbumActiveImage} alt="#" />
      <img src={SortListOffImage} alt="#" />
    </div>
  );
}
