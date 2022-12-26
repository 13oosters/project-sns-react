import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";
import UploadPage from "../pages/UploadPage";
// import FollowersPage from "../pages/FollowersPage";
import ErrorPage from "../pages/ErrorPage";
import HomePages from "../pages/HomePage";
import SplashScreen from "../components/common/SplashScreen";

const HomePage = lazy(() => import("../pages/HomePage"));

function Router() {
  return (
    <Routes>
      {/* 로그인 */}
      <Route
        path="/"
        element={
          true ? (
            <LoginPage />
          ) : (
            <Suspense fallback={<SplashScreen />}>
              <HomePage />
            </Suspense>
          )
        }
      />
      <Route path="/login" element={<LoginPage login />} />
      <Route path="/signup" element={<LoginPage signin />} />
      {/* LoginPage settings */}
      {/* 홈 */}
      <Route path="/home" element={<HomePages />} />

      <Route path="/settings" element={<LoginPage settings />} />
      {/*  */}
      <Route path="/search" element={<SearchPage></SearchPage>} />
      <Route path="/upload" element={<UploadPage></UploadPage>} />
      <Route path="/:account" element={<ProfilePage>하이</ProfilePage>} />
      <Route path="/:account/followers" element={<div>하이</div>} />
      <Route path="/:account/settings" element={<div>하이</div>} />
      <Route path="/:account/post/:id" element={<PostPage>하이</PostPage>} />
      {/**  <Route path="post" element={<div>하이</div>} />*/}
      <Route path="*" element={<ErrorPage></ErrorPage>} />
    </Routes>
  );
}

export default Router;

/**
 * 
 *    { <Route path="/account" element={<ProfilePage></ProfilePage>}>
        <Route path="followers" element={<div>하이</div>} />
        <Route path="settings" element={<div>하이</div>} />
        {  <Route path="post" element={<div>하이</div>} />}
      </Route> }
 */
