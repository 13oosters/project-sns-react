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
  const [didSplashScreenMount, setDidSplashScreenMount] = useState(false);

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
      const mute = error;
    }
  };

  useEffect(() => {
    checkHasToken();
  }, [hasToken]);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setDidSplashScreenMount(true);
    }, 2000);

    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  const handleMainPage = (splashScreenState) => {
    if (!hasToken) {
      return <LoginPage />;
    } else {
      return (
        <Suspense
          fallback={
            <SplashScreen setDidSplashScreenMount={setDidSplashScreenMount} />
          }
        >
          <HomePage />
        </Suspense>
      );
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          !didSplashScreenMount ? (
            <SplashScreen setDidSplashScreenMount={setDidSplashScreenMount} />
          ) : (
            handleMainPage()
          )
        }
      />
      <Route
        path="/login"
        element={<LoginPage login setHasToken={setHasToken} />}
      />
      <Route path="/signup" element={<LoginPage signin />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/settings" element={<LoginPage settings />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route
        path="/:account"
        element={<ProfilePage setHasToken={setHasToken}></ProfilePage>}
      />
      <Route path="/:account/followers" element={<FollowersPage />} />
      <Route path="/:account/followings" element={<FollowingsPage />} />
      <Route path="/:account/settings" element={<ProfileEditPage />} />
      <Route path="/:account/post/:id" element={<PostPage />} />
      <Route path="/:account/post/:id/edit" element={<UploadPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;
