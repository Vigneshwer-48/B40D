import { useState } from "react";

export function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  const LikeStyles = {
    color: like >= 10 ? "green" : "deepskyblue",
    fontsize: "18px"
  }
  const disLikeStyles = {
    color: disLike >= 10 ? "red" : "deepskyblue",
    fontsize: "18px"
  }
  return (
    <div>
      {like - disLike >=10 ? <h3>You are awesome 😍</h3> : null}
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setDisLike(disLike + 1)}>👎{disLike}</button>
    </div>
  );
}
