import API from "./api";

/**
 * url /post_id를 전달받아 get
 * return 데이터
 * useState에 넣어야 하는지
 *
 *
 */
const getPost = async (type, url) => {
  let postData = null;

  try {
    if (type === "detailPost") {
      const response = await API.get(`/post/${url}`);

      console.log(response);

      postData = await response.data();
    }
    if (type === "editpost") {
      const response = await API.get("post/url");

      postData = await response.data();
    }
    if (type === "deletepost") {
      const response = await API.get("post/url");

      postData = await response.data();
    }
  } catch (e) {
    throw new Error(e);
  }
  return postData;
};

export default getPost;
