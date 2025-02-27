// src/App.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequestasd } from "./slice";
import store, { RootState } from "./store";
import { Post } from "./slice";
import { decrement, increment, reset } from "./slicecounter";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.InquiryAll
  );

  const { value, data } = useSelector((state: RootState) => state.Counter);

  const [tab, setTab] = useState("");

  // useEffect(() => {
  //   dispatch(fetchPostsRequestasd());
  // }, [dispatch]);

  // store.subscribe(() => console.log(store.getState()));

  return (
    <div>
      <button onClick={() => setTab("fetch")}>Fetch</button>
      <button onClick={() => setTab("counter")}>Counter</button>
      <div>
        {tab == "fetch" && (
          <>
            <h1>Redux-Saga API Fetch</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <button onClick={() => dispatch(fetchPostsRequestasd())}>
              Fetch API
            </button>
            <ul>
              {posts.map((post: Post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </>
        )}
        {tab == "counter" && (
          <>
            <h1>Counter {value}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())} disabled={value == 0}>
              -
            </button>
            <button onClick={() => dispatch(reset())}>reset</button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
