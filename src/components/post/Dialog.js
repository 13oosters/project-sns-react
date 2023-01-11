import { useEffect, useState } from "react";
import styled from "styled-components";
import API from "../../utils/api";
import Comments from "./Comments";
import Writing from "./Writing";

const DialogSection = styled.section`
  height: calc(100% - 406.58px);
`;

export default function Dialog({ comments, setPostPageData }) {
  const [myInfo, setMyInfo] = useState("");
  const getMyInfo = async () => {
    const response = await API.get("/user/myinfo", {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });

    const responseData = await response.data;

    setMyInfo(responseData);
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <>
      {comments && myInfo ? (
        <DialogSection>
          <h3 className="sr-only">댓글 창</h3>
          <Comments
            comments={comments}
            myInfo={myInfo}
            setPostPageData={setPostPageData}
          />
          <Writing
            comments={comments}
            setPostPageData={setPostPageData}
            myInfo={myInfo}
          />
        </DialogSection>
      ) : (
        <></>
      )}
    </>
  );
}
