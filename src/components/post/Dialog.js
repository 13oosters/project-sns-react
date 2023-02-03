import styled from "styled-components";
import Comments from "./Comments";

const DialogSection = styled.section`
  height: calc(100% - 406.58px);
`;

export default function Dialog({ comments, setPostPageData, myInfo }) {
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
        </DialogSection>
      ) : (
        <></>
      )}
    </>
  );
}
