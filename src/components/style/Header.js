import React from "react";
import styled, { css } from "styled-components";
import backImage from "../../assets/image/icon-arrow-left.png";
import topLogoImage from "../../assets/image/top-logo-txt.png";
import moreImage from "../../assets/image/icon-more-profile.png";
import cancelImage from "../../assets/image/icon-cancel-search.png";

/**
 * 최상위 부모요소:
 * display: flex;
 * justify-items: items-between;
 * padding 전부
 */
const HeaderLayout = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.8rem;
  padding: 0 1.6rem;
  border-bottom: 0.5px solid ${(props) => props.theme.lightColor};
`

const HeaderUI = styled.div`
  ${HeaderLayout}
`

const HeaderInput = styled.input`
  display: block;
  height: 100%;
  background-color: #f2f2f2;
  padding: 0.7rem 4.3rem 0.7rem 1.6rem;
  border-radius: 3.2rem;
`

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
`

export default function Header({ type }) {
  const UI = {
    logo: (
      <HeaderUI>
        <img src={topLogoImage} alt="멍하냥" />
      </HeaderUI>
    ),
    search: (
      <>
        <h2 class="sr-only">검색창</h2>
        <HeaderUI>
          <a href="#;">
            <img src={backImage} alt="뒤로 가기" />
          </a>
          <SearchDiv>
            <HeaderInput placeholder="계정 검색" />
            <button type="button">
              <img src={cancelImage} alt="취소 버튼"/>
            </button>
          </SearchDiv>
        </HeaderUI>
      </>
    ),
    profile: (
      <HeaderUI>
        <a href="#;">
          <img src={backImage} alt="뒤로 가기" />
        </a>
        <button type="button">
          <img src={moreImage} alt="더보기" />
        </button>
      </HeaderUI>
    ),
    followers: (
      <>
        <HeaderUI>
          <a href="#;">
            <img src={backImage} alt="뒤로 가기" />
          </a>
          <h2>Followers</h2>
        </HeaderUI>
      </>
    ),
  };

  return <header>{UI[type]}</header>;
}
