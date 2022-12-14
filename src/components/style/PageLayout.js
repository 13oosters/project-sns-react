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
`;

export default LayoutSection;
