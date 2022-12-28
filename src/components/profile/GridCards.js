import React, { useEffct, useState } from "react";
import styled from "styled-components";

import GridCard from "../profile/GridCard";

const GridCardUl = styled.ul`
  margin: 0 auto;
  width: 39rem;
  box-sizing: border-box;
  padding: 1.6rem;
  padding-bottom: 8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
`;

export default function GridCards({ postData }) {
  return (
    <GridCardUl>
      {postData.map((data, i) => (
        <GridCard key={i} data={data} />
      ))}
    </GridCardUl>
  );
}
