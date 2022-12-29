import styled from "styled-components";

/**
 * header
 * maincontents (좌우 패딩이 존재)
 * nav
 *
 * props로 패딩값을 전달하여 설정되게 진행
 *
 * 로그인 회원가입 프로필 34px로 동일
 * 서치 업로드 16px로 동일
 * <Layout paddingValue={34}/>
 */

const LayoutSection = styled.section`
  padding: 0 ${(props) => props.paddingValue}rem;
  margin: 0 auto;
  max-width: 50rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 100vh;
`;

export default LayoutSection;
