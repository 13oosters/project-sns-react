// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useLocation, useParams } from "react-router-dom";
// import styled from "styled-components";

// import API from "../../utils/api";
// import FollowButton from "../style/follow/FollowButton";
// import FollowCancelButton from "../style/follow/FollowCancelButton";

// const FollowerWrap = styled.div`
//   width: 100%;
// `;

// const FollowItem = styled.li`
//   display: flex;
//   justify-content: space-between;
//   padding: 0 1.6rem 1.6rem 1.6rem;
// `;

// const FollowLink = styled.a`
//   display: flex;
// `;

// const FollowerImage = styled.img`
//   width: 5rem;
//   height: 5rem;
//   object-fit: cover;
//   border-radius: 50%;
//   margin-right: 1.2rem;
// `;

// const FollowerInformation = styled.div`
//   display: flex;
// `;

// const FollowerName = styled.p`
//   font-weight: 500;
//   font-size: ${(props) => props.theme.baseFontSize};
//   line-height: 1.8rem;
//   margin-top: 0.5rem;
//   margin-bottom: 0.6rem;
// `;

// const FollowerIntroduce = styled.p`
//   font-weight: 400;
//   line-height: 1.5rem;
//   font-size: ${(props) => props.theme.smallFontSize};
//   color: ${(props) => props.theme.darkLightColor};
// `;

// export default function FollowerCard({ followerList }) {
//   const token = localStorage.getItem("token");
//   const [isFollow, setIsFollow] = useState(false);

//   const handleFollowButton = () => {
//     if (followerList.isFollow === true) {
//       handleSubmitUnFollow();

//       console.log(followerList.isFollow);
//     } else {
//       handleSubmitFollow();
//     }
//   };

//   const handleSubmitFollow = async () => {
//     try {
//       const res = await axios(
//         `${BASE_URL}/profile/${followerList.accountname}/follow`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-type": "application/json",
//           },
//         },
//       );

//       console.log("팔로우", res);

//       console.log(res.data.profile.isFollow);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // 언팔로우
//   const handleSubmitUnFollow = async () => {
//     try {
//       const res = await axios(
//         `${BASE_URL}/profile/${followerList.accountname}/unfollow`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-type": "application/json",
//           },
//         },
//       );

//       console.log("언팔로우", res);

//       console.log(res.data.profile.isFollow);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const userUrl = `/profile/${followerList.accountname}`;

//   return (
//     <FollowerWrap>
//       <FollowItem>
//         <FollowLink to={userUrl} className="followLink">
//           <div className="followerImage">
//             <FollowerImage src={followerList.image} alt="프로필 이미지" />
//           </div>
//           <FollowerInformation className="followInformation">
//             <FollowerName className="followerName">
//               {followerList.username}
//             </FollowerName>
//             <FollowerIntroduce className="followerIntroduce">
//               {followerList.intro}
//             </FollowerIntroduce>
//           </FollowerInformation>
//         </FollowLink>
//         {isFollow === true ? (
//           <FollowCancelButton onClick={handleFollowButton}>
//             취소
//           </FollowCancelButton>
//         ) : (
//           <FollowButton onClick={handleFollowButton}>팔로우</FollowButton>
//         )}
//       </FollowItem>
//     </FollowerWrap>
//   );
// }
