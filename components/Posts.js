import React from "react";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import Post from "./Post";

function Posts({ posts }) {
  const [realtimePosts] = useCollection(
    query(collection(db, "posts"), orderBy("timestamp", "desc")),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  //   const [tasks, setTasks] = useState([]);

  //   useEffect(() => {
  //     const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  //     onSnapshot(q, (querySnapshot) => {
  //       setTasks(
  //         querySnapshot.docs.map((post) => ({
  //           key: post.id,
  //           name: post.data().name,
  //           message: post.data().message,
  //           email: post.data().email,
  //           timestamp: post.data().timestamp,
  //           image: post.data().image,
  //           postImage: post.data().postImage,
  //         }))
  //       );
  //     });
  //   }, []);

  return (
    <div>
      {realtimePosts //if it gets new posts
        ? realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />
          ))}
    </div>
  );
}

export default Posts;
