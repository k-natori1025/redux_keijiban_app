import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addPost } from './features/Posts';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postsList = useSelector((state) => state.posts.value);
  
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("発火しました")
    dispatch(addPost(
      {
        id: postsList.length,
        name: name,
        content: content,
      }
    ));
    setName("");
    setContent("");
  }
  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
        <input type="text" placeholder="お名前" onChange={(e)=> setName(e.target.value)} value={name} />
        <input type="text" placeholder="投稿内容" onChange={(e)=> setContent(e.target.value)} value={content} />
        <button onClick={handleClick}>投稿</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postsList.map((post) => (
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button>削除</button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
