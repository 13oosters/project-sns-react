import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";
import homeImage from "../../assets/image/icon-home.png";
import homeSelectImage from "../../assets/image/icon-home-fill.png";
import searchImage from "../../assets/image/icon-search.png";
import searchSelectImage from "../../assets/image/icon-search-fill.png";
import postImage from "../../assets/image/icon-post.png";
import profileImage from "../../assets/image/icon-user.png";
import profileSelectImage from "../../assets/image/icon-user-fill.png";

const NavBarArticle = styled.article`
  width: 100%;
  background-color: #ffffff;
  height: 6.5rem;
`;

const TabMenuUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.lightColor};
`;

const TabMenuLi = styled.li`
  margin-top: 0.9rem;
`;

const TabMenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  line-height: 1.4;
  color: ${(props) => props.theme.darkLightColor};
  cursor: pointer;
`;
const SelectP = styled.p`
  color: ${(props) => props.theme.primaryColor};
`;

export default function NavBar({ type, isMyProfile }) {
  const [accountname, setAccountname] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  if (type === "게시물") {
    return null;
  }

  const getProfile = async () => {
    try {
      const res = await API.get("/user/myinfo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const user = res.data.user;

      setAccountname(user.accountname);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <NavBarArticle>
      <h3 className="sr-only">탭 메뉴</h3>
      <nav>
        <TabMenuUl>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/");
              }}
            >
              {type === "홈" ? (
                <img src={homeSelectImage} alt="홈으로 이동" />
              ) : (
                <img src={homeImage} alt="홈으로 이동" />
              )}
              {type === "홈" ? <SelectP>홈</SelectP> : <p>홈</p>}
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/search");
              }}
            >
              {type === "검색" ? (
                <img src={searchSelectImage} alt="검색으로 이동" />
              ) : (
                <img src={searchImage} alt="검색으로 이동" />
              )}
              {type === "검색" ? <SelectP>검색</SelectP> : <p>검색</p>}
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/upload");
              }}
            >
              {type === "게시물" ? (
                <img src={postImage} alt="게시물 작성으로 이동" />
              ) : (
                <img src={postImage} alt="게시물 작성으로 이동" />
              )}
              <p>게시물 작성</p>
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate(`/${accountname}`);
              }}
            >
              {type === "프로필" && isMyProfile ? (
                <img src={profileSelectImage} alt="프로필로 이동" />
              ) : (
                <img src={profileImage} alt="프로필로 이동" />
              )}
              {type === "프로필" && isMyProfile ? (
                <SelectP>프로필</SelectP>
              ) : (
                <p>프로필</p>
              )}
            </TabMenuLink>
          </TabMenuLi>
        </TabMenuUl>
      </nav>
    </NavBarArticle>
  );
}
