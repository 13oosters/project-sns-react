import API from "./api";

/**
 * url /post_id를 전달받아 get
 * return 데이터
 * setPostData라는 useState객체에 데이터를 저장함
 *
 *
 */

const getPost = async (type, url, setPostData, comment, id) => {
  let responseData = null;
  let responseComent = null;

  console.log(url);

  try {
    const responsePost = await API.get(`/post/${url}`, {
      header: {
        Authorization: `Bearer${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
    const CommentRes = await API.get(`/post/${url}/comments`, {
      header: {
        Authorization: `Bearer${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });

    responseData = await responsePost.data;
    responseComent = await CommentRes.data;
    responseData = { ...responseData, ...responseComent };
    console.log(responseData);

    if (type === "editpost") {
      const response = await API.get("/post/feed", {
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseData = await response.data;
      console.log(responseData);

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
      console.log(responseData);
    }

    if (type === "comment") {
      const response = await API.post(`/post/${url}/comments`, {
        comment: {
          content: comment,
        },
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
      const Commentres = await API.get(`/post/${url}/comments`, {
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseComent = await response.data;
      const responseComments = await Commentres.data;

      responseData = {
        ...responseData,
        ...responseComent,
        ...responseComments,
      };
    }

    if (type === "deletComment") {
      // post/:post_id/comments/:comment_id

      const response = await API.delete(`/post/${url}/comments/${id}`, {
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
    }
  } catch (e) {
    throw new Error(e);
  }
  if (responseData === null) {
    responseData = "삭제되었습니다";
  }

  setPostData(responseData);
  console.log(responseData);
};

/**
삭제 누르면 뒤로가게 구현하기 */

export default getPost;
