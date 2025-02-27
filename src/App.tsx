// src/App.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { Post } from "./features/posts/postSlice";
import { decrement, increment, reset } from "./slicecounter";
import PostComponent from "./components/PostComponent";

const App: React.FC = () => {
  const dispatch = useDispatch();
  // const { posts, loading, error } = useSelector(
  //   (state: RootState) => state.InquiryAll
  // );

  const { value, data } = useSelector((state: RootState) => state.counter);

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
        {tab == "fetch" && <PostComponent />}
        {tab == "counter" && (
          <>
            <h1>Counter {value}</h1>
            <button onClick={() => dispatch(increment())} disabled={value == 10}>+</button>
            <button onClick={() => dispatch(decrement())} disabled={value == 0}>
              -
            </button>
            <button onClick={() => dispatch(reset())} >
              reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
