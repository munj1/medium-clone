import { collection, getDocs, setDoc, doc, query } from "firebase/firestore";
import { db } from "../../../../firebase";
import { getAllUsers } from "..";

export async function getUserById(userId) {
  const allUsers = await getAllUsers();
  // console.log(allUsers);
  const userData = allUsers.filter((user) => user.email === userId);
  // console.log(userData[0]);

  return userData[0];
}

export default (req, res) => {
  if (req.method === "GET") {
    const userId = req.query.userId;
    // console.log("userId", userId);

    async function main() {
      const userData = await getUserById(userId);

      if (userData) {
        res.status(200).json({ message: "Ok", userData: userData });
        return "done";
      } else {
        res.status(404).json({ message: "userData not found" });
        return "not found";
      }
    }

    main().then(console.log).catch(console.error);
  }
};
