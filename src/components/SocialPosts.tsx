import React, { useState } from 'react';
import PostInList from './PostInList';
import PostForm from './PostForm';
import { Post } from '../interface';

const SocialPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showForm, setShowForm] = useState(false);

  const addPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
    setShowForm(false);
  };

  const deletePost = (index: number) => {
    setPosts(posts.filter((post, i) => i !== index));
  };

  return (
    <div>
      <button className = "newThought" onClick={() => setShowForm(true)}>Click Here to Post New Thought</button>
      {showForm && (
        <PostForm onSubmitForm={addPost} onClose={() => setShowForm(false)} />
      )}
      {posts.map((post, index) => (
        <PostInList
          key={index}
          post={post}
          onDelete={() => deletePost(index)}
        />
      ))}
    </div>
  );
};

export default SocialPosts;
