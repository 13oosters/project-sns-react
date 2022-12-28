import { useCallback, useDeferredValue, useEffect, useLayoutEffect, useMemo, useRef, useState, useTransition } from "react";
import { useInView } from "react-intersection-observer";
import API from "../utils/api";
import Header from "../components/style/Header";
import NavBar from "../components/style/NavBar";
import EmptyFeed from "../components/home/EmptyFeed";
import Feeds from "../components/home/Feeds";

export default function HomePage() {

  const [feed, setFeed] = useState([]); // 팔로우한 사람들 + 나의 게시물 데이터
  const [loading, setLoading] = useState(false);
  
  const getUserFeed = async() => {
    setLoading(true);
    

    try{
    // 내가 팔로우한 사람들의 게시글 목록 데이터 불러오기
    {
    const response = await API.get(`/post/feed/?limit=50`,{
      header: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      }
    });
    // 로컬 스토리지에 있는 accountname 갖고오기
    const myId = localStorage.getItem("accountname");
    // 불러온 accountname을 통해 내가 올린 게시글 불러오기
    const myPosting = await API.get(`/post/${myId}/userpost/?limit=10`,{
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    });
    
    // 내가 팔로우한 사람들의 게시글과 내가올린 게시글 합치기
    // const temp = [...result, ...myPostingResult.post];

    const result = await Promise.all([response, myPosting]);
    const addFeed = [...result[0].data.posts, ...result[1].data.post];

    
    setFeed(addFeed);
    
    // 똑같은 게시글이 중복되어 feed state에 저장되는 안타까운 현실..
    console.log(feed);

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
  // console.log(feed);
  
  const [ref, inView] = useInView();
  
  // console.log(inView);
  // console.log(feedNumber);
  
  useEffect(()=>{
    if(inView && !loading){
      getUserFeed();
    }
  },[inView, loading])
  

  return (
    <section>
      <Header type="logo" />
      {/* new */}
      {/* feed 날짜가 최신일수록 가장 상단에 위치하도록 sort 코드 작성 */}
      {feed.length > 0 ? 
      <>
        <Feeds feed={feed.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))}/>
        <div ref={ref}>로딩</div>
      </>
      : <EmptyFeed/>}
      <NavBar type="홈"/>
    </section>
  );
}