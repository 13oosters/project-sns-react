// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import FollowCancelButton from "../style/follow/FollowCancelButton";
// import FollowButton from "../style/follow/FollowButton";

// export default function FollowingCard({ followingList }) {
//   //   console.log("card", followingList);
//   const [isFollow, setIsFollow] = useState(false);

// //   const navigate = useNavigate();

//   const handleFollowButton = () => {
//     setIsFollow(!isFollow);
//   };

//   //   console.log("card", followingList);

//   const userUrl = `/profile/${followingList.accountname}`;

//   return (
//     <li className="followItem">
//       <Link to={userUrl} className="followLink">
//         <div className="followerImage">
//           <img src={followingList.image} alt="프로필 이미지" />
//         </div>

//         <div className="followerInformation">
//           <p className="followerName">{followingList.userName}</p>
//           <p className="followerIntroduce">{followingList.intro}</p>
//         </div>
//       </Link>
//       {/* 팔로우 중인 유저 프로필에서는 취소 버튼, 팔로루 하고 있지 않은 유저 프로필에서는 팔로우 버튼 */}
//       {followingList.isFollow === true ? (
//         <FollowCancelButton onClick={handleFollowButton}>
//           취소
//         </FollowCancelButton>
//       ) : (
//         <FollowButton onClick={handleFollowButton}>팔로우</FollowButton>
//       )}
//     </li>
//   );
// }
