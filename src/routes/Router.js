import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";
import UploadPage from "../pages/UploadPage";
import FollowersPage from "../pages/FollowersPage";
import FollowingsPage from "../pages/FollowingsPage";
import ErrorPage from "../pages/ErrorPage";
import SplashScreen from "../components/common/SplashScreen";
import ProfileEditPage from "../pages/ProfileEditPage";
import API from "../utils/api";

const HomePage = lazy(() => import("../pages/HomePage"));

function Router() {
  const [hasToken, setHasToken] = useState(false);
  const checkHasToken = async () => {
    try {
      const response = await API("/user/checktoken", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
      const { isValid } = response.data;

      setHasToken(isValid);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    checkHasToken();
  }, [hasToken]);

  return (
    <Routes>
      {/* 로그인 */}
      <Route
        path="/"
        element={
          !hasToken ? (
            <LoginPage setHasToken={setHasToken} />
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
      <Route path="/home" element={<HomePage />} />

      <Route path="/settings" element={<LoginPage settings />} />
      {/*  */}
      <Route path="/search" element={<SearchPage></SearchPage>} />
      <Route path="/upload" element={<UploadPage></UploadPage>} />
      <Route path="/:account" element={<ProfilePage></ProfilePage>} />
      <Route path="/:account/followers" element={<FollowersPage />} />
      <Route path="/:account/followings" element={<FollowingsPage />} />
      <Route path="/:account/settings" element={<ProfileEditPage />} />
      <Route path="/:account/post/:id" element={<PostPage>하이</PostPage>} />
      <Route
        path="/:account/post/:id/edit"
        element={<UploadPage>하이</UploadPage>}
      />
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
