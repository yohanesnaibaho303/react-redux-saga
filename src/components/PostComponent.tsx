import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsRequest,
  deletePostRequest,
  updatePostRequest,
} from "../features/posts/postSlice";
import { RootState } from "../store";

const PostComponent = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <button onClick={() => dispatch(deletePostRequest(post.id))}>
              Delete
            </button>
            <button
              onClick={() =>
                dispatch(
                  updatePostRequest({
                    id: post.id,
                    title: "Updated Title",
                    content: post.content,
                  })
                )
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostComponent;
