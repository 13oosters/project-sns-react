import { Routes, Route } from "react-router-dom";
// import SplashPage from "./pages/SplashPage";
import LoginPage from "../pages/LoginPage";
// import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";
// import PostPage from "../pages/PostPage";
import UploadPage from "../pages/UploadPage";
// import FollowersPage from "../pages/FollowersPage";
import ErrorPage from "../pages/ErrorPage";

function Router() {
  return (
    <Routes>
      {/* 로그인 */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage login />} />
      <Route path="/signin" element={<LoginPage signin />} />
      {/* LoginPage settings */}
      <Route path="/settings" element={<LoginPage settings />} />
      {/*  */}
      <Route path="/search" element={<SearchPage></SearchPage>} />
      <Route path="/upload" element={<UploadPage></UploadPage>} />
      <Route path="/account" element={<ProfilePage></ProfilePage>}>
        <Route path="followers" element={<div>하이</div>} />
        <Route path="settings" element={<div>하이</div>} />
        <Route path="post" element={<div>하이</div>} />
        <Route path=":id" element={<div>하이</div>} />
      </Route>
      <Route path="*" element={<ErrorPage></ErrorPage>} />
    </Routes>
  );
}

export default Router;

/** url 정리
 * www.sns.com/
 * www.sns.com/search
 * www.sns.com/search&&query="이준엽"
 * www.sns.com/upload
 * www.sns.com/이준엽
 * www.sns.com/이준엽/followers
 * www.sns.com/이준엽/settings
 * www.sns.com/이준엽/post
 * www.sns.com/이준엽/:id
 * www.sns.com/asdlkf
 */

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="App">
      {state["shipping"]}
      <NavBootstrap navigate={navigate} />
      <div>
        {result.isLoading && "로딩중"}
        {result.error && "에러남"}
        {result.data && result.data.name}
      </div>
      <Suspense fallback={<div>로딩중임</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductListPage
                shoes={shoes}
                setShoes={setShoes}
                navigate={navigate}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Context1.Provider value={{ 재고, shoes }}>
                <ProductDetailPage shoes={shoes} />
              </Context1.Provider>
            }
          />
          <Route path="/about" element={<AboutPage></AboutPage>}>
            <Route path="member" element={<div>멤버임</div>} />
            <Route pathment={<div>위치정보임</div>} />
          </Route>="location" ele
          <Route path="/event" element={<EventPage></EventPage>}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
          </Route>
          <Route path="/cart" element={<CartPage></CartPage>} />
          <Route path="*" element={<div>없는 페이지임</div>} />
        </Routes>
      </Suspense>
    </div>
 */
}
