import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import errorImage from "../../assets/image/404-img.png";
import noticeImgage from "../../assets/image/logo-notice.png";
import Button from "../style/Button";
import LayoutSection from "../style/PageLayout";

const NoticeSection = styled(LayoutSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 112.8px);
  gap: 2rem;
  box-shadow: none;
`
const NoticeImage = styled.img`
  margin-top: 6rem;
`

const NoticeH3 = styled.h3`
  font-size: ${(props) => props.theme.baseFontSize};
  color: ${(props) => props.theme.darkLightColor};
`

const NoticeButton = styled(Button)`
  width: 12rem;
`

export default function Notice({ type }) {
  const navigate = useNavigate();

  return (
    <NoticeSection>
      {type === "에러" ? <img src={errorImage} alt="#" /> : <NoticeImage src={noticeImgage} alt="#" />}
      {type === "에러" ? <NoticeH3>페이지를 찾을 수 없습니다.</NoticeH3> : <NoticeH3>유저를 검색해 팔로우 해보세요!</NoticeH3>}
      {type === "에러" ? <NoticeButton onClick={()=>{navigate("/")}}>홈으로 이동</NoticeButton> : <NoticeButton onClick={()=>{navigate("/search")}}>검색하기</NoticeButton>}
    </NoticeSection>
  );
}
