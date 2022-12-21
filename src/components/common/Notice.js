import styled from "styled-components";
import errorImage from "../../assets/image/404-img.png";
import noticeImgage from "../../assets/image/logo-notice.png";
import Button from "../style/Button";

const NoticeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 10rem;
  min-height: 57rem;
`
const NoticeImage = styled.img`
  width: 30.6rem;
  height: 21.9rem;
`

const NoticeH3 = styled.h3`
  font-size: ${(props) => props.theme.baseFontSize};
  color: ${(props) => props.theme.darkLightColor};
`

const NoticeButton = styled(Button)`
  width: 12rem;
`

export default function Notice({ type }) {
  return (
    <NoticeSection>
      {type === "에러" ? <img src={errorImage} alt="#" /> : <NoticeImage src={noticeImgage} alt="#" />}
      {type === "에러" ? <NoticeH3>페이지를 찾을 수 없습니다.</NoticeH3> : <NoticeH3>유저를 검색해 팔로우 해보세요!</NoticeH3>}
      {type === "에러" ? <NoticeButton>이전 페이지</NoticeButton> : <NoticeButton>검색하기</NoticeButton>}
    </NoticeSection>
  );
}
