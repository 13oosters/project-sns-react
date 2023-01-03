import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router";

import backImage from "../../assets/image/icon-arrow-left.png";
import topLogoImage from "../../assets/image/top-logo-txt.png";
import moreImage from "../../assets/image/icon-more-profile.png";
import cancelImage from "../../assets/image/icon-cancel-search.png";

const HeaderWrap = styled.header`
  width: 100%;
  background-color: #ffffff;
`;

const HeaderLayout = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  height: 4.8rem;
  padding: 0 1.6rem;
  border-bottom: 1px solid ${(props) => props.theme.lightColor};
`;
const HeaderUI = styled.div`
  ${HeaderLayout}
`;

const HeaderInput = styled.input`
  display: block;
  height: 100%;
  background-color: #f2f2f2;
  padding: 0.7rem 4.3rem 0.7rem 1.6rem;
  border-radius: 3.2rem;
`;

const SearchDiv = styled.div`
  position: relative;
  height: 100%;
  padding: 0.8rem 0;
  & button img {
    position: absolute;
    top: 50%;
    transform: translateY(-45%);
    right: 1.3rem;
  }
`;

const HeaderH2 = styled.h2`
  display: inline-block;
  position: absolute;
  margin-left: 3.8rem;
  font-weight: 500;
  font-size: ${(props) => props.theme.baseFontSize};
`;

export default function Header({
  type,
  setKeyword,
  startTransition,
  setProfileModal,
  profileModal,
}) {
  const navigate = useNavigate();
  const UI = {
    logo: (
      <HeaderUI>
        <button>
          <img src={topLogoImage} alt="멍하냥" />
        </button>
      </HeaderUI>
    ),
    search: (
      <>
        <h2 className="sr-only">검색창</h2>
        <HeaderUI>
          <button onClick={() => navigate(-1)}>
            <img src={backImage} alt="뒤로 가기" />
          </button>
          <SearchDiv>
            <HeaderInput
              onKeyUp={(e) => {
                startTransition(() => {
                  setKeyword(e.target.value);
                });
              }}
              placeholder="계정 검색"
            />
            <button
              onClick={(e) => {
                e.target.closest("div").childNodes[0].value = "";
                setKeyword("");
                //
              }}
              type="button"
            >
              <img src={cancelImage} alt="취소 버튼" />
            </button>
          </SearchDiv>
        </HeaderUI>
      </>
    ),
    profile: (
      <HeaderUI>
        <button onClick={() => navigate(-1)}>
          <img src={backImage} alt="뒤로 가기" />
        </button>
        <button onClick={() => setProfileModal((prev) => !prev)}>
          <img src={moreImage} alt="더보기" />
        </button>
      </HeaderUI>
    ),
    post: (
      <HeaderUI>
        <button onClick={() => navigate(-1)}>
          <img src={backImage} alt="뒤로 가기" />
        </button>
      </HeaderUI>
    ),
    followers: (
      <>
        <HeaderUI>
          <button onClick={() => navigate(-1)}>
            <img src={backImage} style={{ display: "block" }} alt="뒤로 가기" />
          </button>
          <HeaderH2>Followers</HeaderH2>
        </HeaderUI>
      </>
    ),
    followings: (
      <>
        <HeaderUI>
          <button onClick={() => navigate(-1)}>
            <img src={backImage} style={{ display: "block" }} alt="뒤로 가기" />
          </button>
          <HeaderH2>Followings</HeaderH2>
        </HeaderUI>
      </>
    ),
  };

  return <HeaderWrap>{UI[type]}</HeaderWrap>;
}
