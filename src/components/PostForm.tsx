import React, { useState } from 'react';
import { Post } from './SocialPosts';

interface Props {
  onSubmitForm: (post: Post) => void;
  onClose: () => void;
}

const PostForm: React.FC<Props> = ({ onSubmitForm, onClose }) => {
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitForm({ title, thought });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>New Post</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              <input />
        </form>)
}
