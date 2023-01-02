import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import API from "../utils/api";
import Header from "../components/style/Header";
import NavBar from "../components/style/NavBar";
import EmptyFeed from "../components/home/EmptyFeed";
import Feeds from "../components/home/Feeds";
import LayoutSection from "../components/style/PageLayout";


export default function HomePage() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstNum, setFirstNum] = useState(10);
  const [secondNum, setSecondNum] = useState(3);
  const [last, setLast] = useState(false);

  const getUserFeed = async (a, b) => {

    try {
      {
        const response = await API.get(`/post/feed/?limit=10&skip=${a}`, {
          header: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json",
          },
        });
        const myId = localStorage.getItem("accountname");
        const myPosting = await API.get(
          `/post/${myId}/userpost/?limit=3&skip=${b}`,
          {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json",
          },
        );

        const result = await Promise.all([response, myPosting]);
        const addFeed = [
          ...feed,
          ...result[0].data.posts,
          ...result[1].data.post,
        ];

        setFeed(addFeed);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserFeed();
  }, []);

  // 무한스크롤
  const [ref, inView] = useInView();

  console.log(last);

  useEffect(() => {
    if (inView && !last) {
      setFirstNum(firstNum + 10);
      setSecondNum(secondNum + 3);
      getUserFeed(firstNum, secondNum);
    }
  }, [inView, loading]);

  return (
    <LayoutSection>
      <Header type="logo" />
      {feed.length > 0 ? (
        <>
          <Feeds
            feed={feed.sort(
              (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt),
            )}
            setFeed={setFeed}
            ref1={ref}
            wait={2000}
          />
        </>
      ) : (
        <EmptyFeed />
      )}
      <NavBar type="홈" />
    </LayoutSection>
  );
}
