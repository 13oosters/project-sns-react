import API from "./api";

const getPost = async (type, url, setPostData, comment, commentId) => {
  let responseData = null;
  let responseComment = null;

  try {
    if (type === "detailpost") {
      const responsePost = await API.get(`/post/${url}`, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
      const CommentRes = await API.get(`/post/${url}/comments`, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseData = await responsePost.data;
      responseComment = await CommentRes.data;
      const reverseComment = { ...responseComment };

      reverseComment.comments.reverse();
      responseData = { ...responseData, ...responseComment };
    }

    if (type === "editpost") {
      const responsePost = await API.get(`/post/${url}`, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseData = await responsePost.data;
    }
    if (type === "deletepost") {
      const response = await API.delete(`/post/${url}`, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseData = await response.data;
    }
    if (type === "postReport") {
      alert("게시물 신고가 완료되었습니다.");
    }
    if (type === "comment") {
      const response = await API.post(`/post/${url}/comments`, {
        comment: {
          content: comment,
        },
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
      const Commentres = await API.get(`/post/${url}/comments`, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });
      const CommentPost = await API.get(`/post/${url}`, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseData = await CommentPost.data;

      responseComment = await response.data;

      const responseComments = await Commentres.data;
      const reverseResponse = { ...responseComments };

      reverseResponse.comments.reverse();

      responseData = {
        ...responseData,
        ...responseComment,
        ...responseComments,
      };
    }
    if (type === "deletComment") {
      const response = await API.delete(`/post/${url}/comments/${commentId}`, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      });

      const Commentres = await API.get(`/post/${url}/comments`, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      const CommentPost = await API.get(`/post/${url}`, {
        headers: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseComment = await CommentPost.data;

      const responseComments = await Commentres.data;

      const reverseResponse = { ...responseComments };

      reverseResponse.comments.reverse();

      responseData = {
        ...responseData,
        ...responseComment,
        ...responseComments,
      };
    }

    if (type === "commentReport") {
      alert("댓글 신고가 완료되었습니다.");
    }
  } catch (e) {
    throw new Error(e);
  } finally {
    setPostData(responseData);
  }
};

export default getPost;
