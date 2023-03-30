import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
    axios
      .get(url)
      .then((res) => {
        console.log("res", res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log("error:", err.message);
      });
  }, []);
  return (
    <>
      {Object.keys(post).length ? (
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800">
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                <h1 className="text-3xl font-bold mb-6">
                  {post.title.rendered}
                </h1>
                <p
                  className="text-gray-500 mb-6"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                ></p>
              </div>
              <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                <img src={post.featured_src} alt="" />
              </div>
            </div>
          </section>
        </div>
      ) : (
        "Loading...."
      )}
    </>
  );
};
export default Single;

// {Object.keys(post).length ? (
//   <div className="p-5">
//     <img className="w-full" src={post.featured_src} />

//     <h1 className="text-2xl font-bold">{post.title.rendered}</h1>

//     <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
//   </div>
// ) : (
//   "Loading...."
// )}
