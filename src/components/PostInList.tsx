import React from 'react';
import {Post} from '../interface/interface';


interface Props {
  post: Post;
  onDelete: () => void;
}

const PostInList: React.FC<Props> = ({ post, onDelete }) => (
  <div>
    <h3>{post.title}</h3>
    <p>{post.thought}</p>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default PostInList;
