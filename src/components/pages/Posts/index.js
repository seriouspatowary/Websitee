import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/posts`;
    axios.get(url).then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  }, []);
  console.log("posts", posts);
  return (
    <>
      <div className="w-4/5 py-10 m-auto flex justify-between align-middle flex-wrap gap-10">
        {Object.keys(posts).length
          ? posts.map((post) => {
              console.log("posts", posts);
              return (
                <div
                  key={post.id}
                  className="card p-3 w-[330px] shadow-lg rounded-lg flex gap-6 flex-col"
                >
                  <h2 className="text-lg font-bold">{post.title.rendered}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.content.rendered,
                    }}
                  ></p>
                  <Link to={`/posts/${post.id}`}>READ MORE</Link>
                </div>
              );
            })
          : "Loading"}
      </div>
    </>
  );
};

export default Posts;
// src="https://loremflickr.com/320/240"
