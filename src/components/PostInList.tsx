import React from 'react';
import {Post} from '../interface/interface';


interface Props {
  post: Post;
  onDelete: () => void;
}

const PostInList: React.FC<Props> = ({ post, onDelete }) => (
  <div>
    <h3 className = 'TitleInList'>{post.title}</h3>
    <p className = 'ThoughtInList'>{post.thought}</p>
    <button onClick={onDelete} className = 'DelBtn'>Delete</button>
  </div>
);

export default PostInList;
