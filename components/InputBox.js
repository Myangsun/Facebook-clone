import React, { useState, useRef } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { db, storage } from "../firebase";
import {
  serverTimestamp,
  collection,
  doc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const fileRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (event) => {
    event.preventDefault();

    if (!inputRef.current.value) return;
    try {
      inputRef.current.value = addDoc(collection(db, "posts"), {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: serverTimestamp(),
      }).then((docm) => {
        if (imageToPost) {
          const uploadRef = ref(storage, `posts/${docm.id}`);
          const uploadTask = uploadString(uploadRef, imageToPost, "data_url");

          uploadTask.then(() => {
            getDownloadURL(uploadRef).then((url) => {
              setDoc(
                doc(db, "posts", docm.id),
                { postImage: url },
                { merge: true }
              );
            });
          });

          removeImage();
        }
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    inputRef.current.value = "";
  };

  const addImageToPost = (event) => {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
        ></Image>
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5
          focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session.user.name}`}
          ></input>
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            className="flex flex-col filter hover:brightness-110 
            transition duration-150 transform hover:scale-105 cursor-pointer"
            onClick={removeImage}
          >
            <img className="h-10 object-contain" src={imageToPost} />
            {/* <p className="text-xs text-red-500 text-center">Remove</p> */}
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon" onClick={() => fileRef.current.click()}>
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input onChange={addImageToPost} ref={fileRef} type="file" hidden />
        </div>
        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
