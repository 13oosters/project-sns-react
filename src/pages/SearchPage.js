import React, { useState, useTransition } from "react";

import Header from "../components/style/Header";
import Results from "../components/search/Results";
import NavBar from "../components/style/NavBar";
import PageLayout from "../components/style/PageLayout";

export default function SearchPage() {
  const [keyword, setKeyword] = useState(undefined);
  const [isPending, startTransition] = useTransition();

  // useTransition 아니면 useDeferredVallue

  return (
    <PageLayout paddingValue={0}>
      <h1 className="sr-only">검색 페이지</h1>
      <Header
        setKeyword={setKeyword}
        startTransition={startTransition}
        type="search"
      />
      <Results keyword={keyword} isPending={isPending} />
      <NavBar type="검색" />
    </PageLayout>
  );
}
