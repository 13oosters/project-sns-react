import React from "react";
import Result from "./Result";

export default function Results() {
  return (
    <section>
      <h2 class="sr-only">검색 결과</h2>
      <ul>
        <Result />
      </ul>
    </section>
  );
}
