import { Routes, Route } from "react-router-dom";
import "./App.css";
// import ErrorPage from "../src/pages/ErrorPage";
// import SearchPage from "../src/pages/SearchPage";
import LoginPage from "../src/pages/LoginPage";
import Form from "./components/login/Form";
import Login from "./components/login/Login";
import ProfileSetting from "./components/common/ProfileSetting";
// import UploadPage from "../src/pages/UploadPage";
// import ProfilePage from "../src/pages/ProfilePage";

/* <Routes> <Route path="/login" element={LoginPage} </Routes> */

function App() {
  return (
    <div className="App" style={{ width: "390px", minHeight: "100vh" }}>
      {/* <Link to="/search"></Link> */}
      <Routes>
        <Route path="/" element={<LoginPage />}> 
        {/* outlet으로 처리하는게 좋을듯 */}
          <Route path="/" element={<Login/>}/>
          <Route path="email" element={<Form title="로그인" buttonText="로그인"/>}/>
          <Route path="sign-up" element={<Form title="이메일로 회원가입" buttonText="다음"/>}/>
          <Route path="profile-setting" element={<ProfileSetting title={"프로필 설정"}/>}/>
        </Route>
        {/* <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signin" element={<LoginPage/>}/> */}

        {/* <Route path="/search" element={<SearchPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/:account" element={<ProfilePage />}>
          <Route path="/followers" element={<div>하이</div>} />
          <Route path="/settings" element={<div>하이</div>} />
          <Route path="/post" element={<div>하이</div>} />
          <Route path="/:id" element={<div>하이</div>} />
        </Route>
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

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
