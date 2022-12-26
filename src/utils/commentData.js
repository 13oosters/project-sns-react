import API from "./api"; /**

/**
 * url /post_id를 전달받아 get
 * return 데이터
 * setPostData라는 useState객체에 데이터를 저장함
 *
 *
 */

/* const getComment = async (type, url, setPostData, inputComment) => {
  let responseComent = null;

  console.log(url);
  try {
    if (type === "comment") {
      const response = await API.post(`/post/${url}`, {
        comment: {
          content: "안녕2",
        },
        header: {
          Authorization: `Bearer${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      });

      responseComent = await response.data;

      console.log(responseComent);
    }
  } catch (e) {
    throw new Error(e);
  }

  setCommentData(responseComent);
};



export default getComment;
*/
// 삭제 누르면 뒤로가게 구현하기 */
