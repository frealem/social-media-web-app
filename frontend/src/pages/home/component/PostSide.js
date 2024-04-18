import React from 'react'
import PostWidget from './postWidget'
import { posts } from '../../../components/fakeData'
import TopPostBox from './topPostBox'

const PostSide = () => {
  return (<div>
  <TopPostBox/>
    {posts.map(
      () => (
        <PostWidget/>
      )
    )}
    </div>
  )
}

export default PostSide