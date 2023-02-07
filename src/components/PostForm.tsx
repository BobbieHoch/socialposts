import React, { useState } from 'react';
// import {Post} from '../interface/interface';


interface Props {
  onSubmitForm: (post: { title: string; thought: string }) => void;
  onClose: () => void;
}

const PostForm: React.FC<Props> = ({ onSubmitForm, onClose }) => {
  const [title, setTitle] = useState('');
  const [thought, setThought] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitForm({ title, thought });
    setTitle("");
    setThought("");
  };
  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Enter Title & Thought Here</h2>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>
        <label htmlFor="thought">
          Thought:
          <textarea
            id="thought"
            value={thought}
            onChange={(event) => setThought(event.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  )
}
export default PostForm