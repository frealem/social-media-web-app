import React from 'react'
import ProfileSide from "./component/profileSide"
import PostSide from "./component/profileSide"
import RightSide from "./component/profileSide"
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home