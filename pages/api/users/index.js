import { collection, getDocs, setDoc, doc, query } from "firebase/firestore";
import { db } from "../../../firebase";

export async function getAllUsers(userId) {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return users;
}

export default (req, res) => {
  if (req.method === "GET") {
    async function main() {
      const users = await getAllUsers();

      if (users) {
        res.status(200).json({ message: "Ok", users: users });
        return "done";
      } else {
        res.status(404).json({ message: "userData not found" });
        return "not found";
      }
    }

    main().then(console.log).catch(console.error);
  }
};
