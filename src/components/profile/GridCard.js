import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import ImageLayerIcon from "../../assets/image/icon-img-layers.png";
import defaultImage from "../../assets/image/basic-img.png";

const GridCardLi = styled.li`
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    display: ${(props) => props.type};
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    width: 2rem;
    height: 2rem;
    background-image: url(${ImageLayerIcon});
  }
`;

const GridCardImage = styled.img`
  width: 11.4rem;
  height: 11.4rem;
`;

export default function GridCard({ data }) {
  const navigate = useNavigate();
  const { account } = useParams();
  const refineImageData = (image) => {
    const url = image.split(",");

    if (!image) {
      return defaultImage;
    }

    if (url[0].includes("https://mandarin.api.weniv.co.kr")) {
      return url[0];
    } else {
      return `https://mandarin.api.weniv.co.kr/${url[0]}`;
    }
  };

  const checkSeveralImage = (image) => {
    const url = image.split(",");

    if (url.length > 1) {
      return "block";
    }
    return "none";
  };

  return (
    <GridCardLi
      onClick={() => {
        navigate(`/${account}/post/${data.id}`);
      }}
      type={checkSeveralImage(data.image)}
    >
      <GridCardImage src={refineImageData(data.image)} alt={data.content} />
    </GridCardLi>
  );
}
