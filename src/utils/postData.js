import API from "./api";

/**
 * url /post_id를 전달받아 get
 * return 데이터
 * setPostData라는 useState객체에 데이터를 저장함
 *
 *
 */
/**
 *
 * @param {string} type : 어떤 요청인지
 * @param {string} url : path
 * @param {} setPostData : 데이터 useState
 * @param {string} comment : 댓글 내용
 * @param {string} accountname : 사용자이름
 * @param {string} commentId : 댓글 아이디 (삭제,신고)
 */

const getPost = async (type, url, setPostData, comment, commentId) => {
  let responseData = null;
  let responseComment = null;

  console.log(url);

  try {
    if (type === "detailpost") {
      const responsePost = await API.get(`/post/${url}`, {
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseData = await responsePost.data;
      console.log(responseData);
      responseData = { ...responseData };
    }
    if (type === "detailComment") {
      const CommentRes = await API.get(`/post/${url}/comments`, {
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseComment = await CommentRes.data;
      const reverseComment = { ...responseComment };

      reverseComment.comments.reverse();
      responseData = { ...responseComment };
      console.log(responseData);
    }

    /* edit 구현 진행중 */

    if (type === "editpost") {
      const response = await API.get("/post/feed", {
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseData = await response.data;
      console.log(responseData);
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
    if (type === "postReport") {
      alert("게시물 신고가 완료되었습니다.");
    }
    if (type === "comment") {
      const responsePost = await API.get(`/post/${url}`, {
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
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

      responseData = await responsePost.data;

      responseComment = await response.data;

      const responseComments = await Commentres.data;
      const reverseResponse = { ...responseComments };

      reverseResponse.comments.reverse();

      responseData = {
        ...responseData,
        ...responseComment,
        ...responseComments,
      };
      console.log(responseData);
    }
    if (type === "deletComment") {
      const response = await API.delete(`/post/${url}/comments/${commentId}`, {
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
      const responsePost = await API.get(`/post/${url}`, {
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      const response2 = await responsePost.data;

      responseData = await responsePost.data;
      console.log(responseData);
      responseData = { ...responseData };

      responseData = await response.data;
      responseComment = await CommentRes.data;
      const reverseComment = { ...responseComment };

      reverseComment.comments.reverse();
      responseData = { ...responseComment, ...responseData, ...response2 };
      console.log(responseData);
    }

    if (type === "commentReport") {
      alert("댓글 신고가 완료되었습니다.");
    }

    if (type === "myInfo") {
      const response = await API.get("/user/myinfo", {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      });

      responseData = await response.data;
      console.log(responseData);
    }
  } catch (e) {
    throw new Error(e);
  }

  setPostData(responseData);
  console.log(responseData);
};

export default getPost;
