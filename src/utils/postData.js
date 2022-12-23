import API from "./api";

/**
 * url /post_id를 전달받아 get
 * return 데이터
 * setPostData라는 useState객체에 데이터를 저장함
 *
 *
 */

const getPost = async (type, url, setPostData) => {
  let responseData = null;

  try {
    if (type === "detailPost") {
      const response = await API.get(`/post/${url}`, {
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseData = await response.data;
    }
    if (type === "editpost") {
      const response = await API.get("/post");

      responseData = await response.data;
    }
    if (type === "deletepost") {
      const response = await API.delete(`/post/${url}`, {
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseData = await response.data;
    }
  } catch (e) {
    throw new Error(e);
  }
  setPostData(responseData);
};

export default getPost;
