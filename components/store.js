import create from "zustand";
import {
  CogIcon,
  BookmarkIcon,
  HomeIcon,
  MenuAlt2Icon,
  PhotographIcon,
  PlusSmIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";

import { collection, getDocs, setDoc, doc, query } from "firebase/firestore";
import { db } from "../firebase";

// export const useUserData = create((set) => ({
//   users: null,
//   setUsers: (fetchedData) => {
//     set(() => {
//       return { users: fetchedData };
//     });
//   },
// }));

export const useModal = create((set) => ({
  isModalOpen: false,
  changeModalState() {
    set((state) => (state.isModalOpen = !state.isModalOpen));
  },
}));

export const usesidebarNavigation = create((set) => ({
  sidebarNavigation: [
    { name: "Home", href: "/app", icon: HomeIcon, current: true },
    { name: "All Posts", href: "/app/all", icon: ViewGridIcon, current: false },
    {
      name: "Posts",
      href: "/app/JLUf7PHbOZTuUv4rS1Ml",
      icon: PhotographIcon,
      current: false,
    },
    { name: "Shared", href: "#", icon: UserGroupIcon, current: false },
    { name: "Bookmark", href: "#", icon: BookmarkIcon, current: false },
    { name: "Settings", href: "#", icon: CogIcon, current: false },
  ],
  setSidebarNavigation(idx) {
    set((state) => {
      const newNav = [...state.sidebarNavigation];
      newNav.forEach((menu, i) => {
        if (i === idx) {
          menu.current = true;
        } else {
          menu.current = false;
        }
      });

      return { sidebarNavigation: newNav };
    });
  },
  setPostId(postId) {
    set((state) => (state.sidebarNavigation[2].href = `/app/${postId}`));
  },
}));
