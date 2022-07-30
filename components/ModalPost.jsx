/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { useModal } from "./store";
import InputComponent from "./InputComponent";
import TextAreas from "./TextAreas";
import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function ModalPost() {
  //   const [open, setOpen] = useState(true);
  const { isModalOpen, changeModalState } = useModal();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  // email, displayName, photoURL,

  const router = useRouter();
  // -> POST
  // author, authorid, authorImg,
  //  bannerImg, body, brief, category, isFeatured, postLength, postedOn, title

  const formRef = useRef();
  // Title, Brief, BannerImageUrl, Category, EstimatedReadLength, ArticleText
  // console.log(formRef.current?.Title.value);

  async function addPostToFirebase() {
    const postData = {
      author: currentUser?.displayName,
      authorId: currentUser?.email,
      authorImg: currentUser?.photoURL,
      bannerImg: formRef.current?.BannerImageURL.value,
      body: formRef.current?.ArticleText.value,
      brief: formRef.current?.Brief.value,
      category: formRef.current?.Category.value,
      isFeatured: false,
      postLength: formRef.current?.EstimatedReadLength.value,
      postedOn: serverTimestamp(),
      title: formRef.current?.Title.value,
    };

    await addDoc(collection(db, "articles"), postData);
  }

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={changeModalState}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="md:ml-[7rem] w-full relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl sm:w-full sm:p-6">
                <form ref={formRef}>
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Upload an Article
                      </Dialog.Title>
                      <div className="mt-10">
                        <InputComponent name="Title" />
                        <InputComponent name="Brief" />
                        <InputComponent name="BannerImageURL" />
                        <InputComponent name="Category" />
                        <InputComponent name="EstimatedReadLength" />
                        <TextAreas />

                        {/* <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur amet labore.
                      </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                      onClick={() => {
                        addPostToFirebase()
                          .then(router.push("/app/all"))
                          .catch(console.error);
                        // changeModalState();
                      }}
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
