import { Routes, Route } from "react-router-dom";
import SplashScreenPage from "../pages/SplashScreenPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";
import UploadPage from "../pages/UploadPage";
import FollowersPage from "../pages/FollowersPage";
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
