import { forwardRef, useCallback, useDeferredValue, useEffect, useLayoutEffect, useMemo, useRef, useState, useTransition } from "react";
import { useInView } from "react-intersection-observer";
import API from "../utils/api";
import Header from "../components/style/Header";
import NavBar from "../components/style/NavBar";
import EmptyFeed from "../components/home/EmptyFeed";
import Feeds from "../components/home/Feeds";
import Loading from "../components/home/Loading.js";

export default function HomePage() {

  const [feed, setFeed] = useState([]); // 팔로우한 사람들 + 나의 게시물 데이터
  const [loading, setLoading] = useState(false);
  const [firstNum, setFirstNum] = useState(10);
  const [secondNum, setSecondNum] = useState(3);
  
  const getUserFeed = async(a,b) => {
    setLoading(true);
    

    try{
    // 내가 팔로우한 사람들의 게시글 목록 데이터 불러오기
    {
    const response = await API.get(`/post/feed/?limit=10&skip=${a}`,{
      header: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      }
    });
    // 로컬 스토리지에 있는 accountname 갖고오기
    const myId = localStorage.getItem("accountname");
    // 불러온 accountname을 통해 내가 올린 게시글 불러오기
    const myPosting = await API.get(`/post/${myId}/userpost/?limit=3&skip=${b}`,{
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    });
    
    // 내가 팔로우한 사람들의 게시글과 내가올린 게시글 합치기
    // const temp = [...result, ...myPostingResult.post];

    const result = await Promise.all([response, myPosting]);
    const addFeed = [...result[0].data.posts, ...result[1].data.post];

    
    setFeed(addFeed);
    
  }

    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

  useMemo(()=>{
    getUserFeed();
  },[])

// 무한스크롤
  const [ref, inView] = useInView();

  console.log(feed);
  console.log(inView);
  
  useEffect(()=>{
    if(inView && !loading){
      setFirstNum(firstNum + 10);
      setSecondNum(secondNum + 3);
      getUserFeed(firstNum, secondNum);
    }
  },[inView, loading])

  useEffect(()=>{
    if(inView){
      window.scrollTo(0,0);
    }
  },[inView])
  
  console.log(firstNum);

  return (
    <section>
      <Header type="logo" />
      {/* new */}
      {/* feed 날짜가 최신일수록 가장 상단에 위치하도록 sort 코드 작성 */}
      {feed.length > 0 ? 
      <>
        <Feeds feed={feed.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))}/>
        <Loading ref1={ref} wait={3000}>로딩</Loading>
      </>
      : <EmptyFeed/>}
      <NavBar type="홈"/>
    </section>
  );
}