import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(posts)
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */
       // return <Post propsPar = {p}/>
       posts.map((p)=>{
      // console.log(p);
       return <Post post={p} likePost={likePost}/>
       })})
  
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
