import React from "react";

import Header from "../components/style/Header";
import Results from "../components/search/Results";
import NavBar from "../components/style/NavBar";

export default function SearchPage() {
  return (
    <section>
      <h1 class="sr-only">검색 페이지</h1>
      <Header type="search" />
      <Results />
      <NavBar type="검색" />
    </section>
  );
}
