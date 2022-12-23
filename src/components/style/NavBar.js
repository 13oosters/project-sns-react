import styled from "styled-components";
import homeImg from "../../assets/image/icon-home.png";
import searchImg from "../../assets/image/icon-search.png";
import postImg from "../../assets/image/icon-post.png";
import profileImg from "../../assets/image/icon-user.png";

const TabMenuUl = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme.lightColor};
  padding: 1.4rem 2.8rem 0.6rem;
`;

const TabMenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  line-height: 1.4;
  color: ${(props) => props.theme.darkLightColor};
`;

export default function NavBar() {
  return (
    <article>
      <h3 class="sr-only">탭 메뉴</h3>
      <nav>
        <TabMenuUl>
          <li>
            <TabMenuLink href="#;">
              <img src={homeImg} alt="홈으로 이동" />
              <p>홈</p>
            </TabMenuLink>
          </li>
          <li>
            <TabMenuLink href="#;">
              <img src={searchImg} alt="검색으로 이동" />
              <p>검색</p>
            </TabMenuLink>
          </li>
          <li>
            <TabMenuLink href="#;">
              <img src={postImg} alt="게시물 작성으로 이동" />
              <p>게시물 작성</p>
            </TabMenuLink>
          </li>
          <li>
            <TabMenuLink href="#;">
              <img src={profileImg} alt="프로필로 이동" />
              <p>프로필</p>
            </TabMenuLink>
          </li>
        </TabMenuUl>
      </nav>
    </article>
  );
}
