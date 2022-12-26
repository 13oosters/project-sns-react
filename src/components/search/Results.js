import React from "react";
import styled from "styled-components";

import Result from "./Result";

import useFetch from "../../hooks/useFetch";

const LayoutSection = styled.section`
  padding: 6rem 1.6rem;
`;

export default function Results({ keyword, isPending }) {
  const [searchData] = useFetch(
    `/user/searchuser/?keyword=${keyword}`,
    [],
    [keyword],
  );

  //  console.log(searchData);

  return (
    <LayoutSection>
      <h2 className="sr-only">검색 결과</h2>
      <ul>
        {isPending
          ? "Loaing..."
          : searchData.map((data, i) => (
              <Result {...data} keyword={keyword} key={i} />
            ))}
      </ul>
    </LayoutSection>
  );
}
