import React from "react";
import styled from "styled-components";

import Result from "./Result";

import useFetch from "../../hooks/useFetch";
import loadingImage from "../../assets/image/loading.gif";

const LayoutSection = styled.section`
  padding: 0rem 1.6rem;
  height: calc(100% - 112.8px);
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ResultsUl = styled.ul`
  overflow-y: scroll;
  height: 100%;
  margin-top: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  li + li {
    margin-top: 1rem;
  }
`;

export default function Results({ keyword, isPending }) {
  const [searchData] = useFetch(
    `/user/searchuser/?keyword=${keyword}`,
    [],
    [keyword],
  );

  return (
    <LayoutSection>
      <h2 className="sr-only">검색 결과</h2>
      <ResultsUl>
        {isPending ? (
          <ImageWrapper>
            <img src={loadingImage} alt="로딩 중" />
          </ImageWrapper>
        ) : (
          searchData.map((data, i) => (
            <Result {...data} keyword={keyword} key={data._id} />
          ))
        )}
      </ResultsUl>
    </LayoutSection>
  );
}
