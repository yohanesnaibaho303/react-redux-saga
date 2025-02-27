// src/App.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequestasd } from "./slice";
import { RootState } from "./store";
import { Post } from "./slice";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.InquiryAll
  );

  useEffect(() => {
    dispatch(fetchPostsRequestasd());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux-Saga API Fetch</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
