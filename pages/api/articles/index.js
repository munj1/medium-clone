import { collection, getDocs, setDoc, doc, query } from "firebase/firestore";
import articles from ".";
import { db } from "../../../firebase";

export async function getAllArticles() {
  const querySnapshot = await getDocs(collection(db, "articles"));
  const allArticles = querySnapshot.docs.map((doc) => {
    const article = { articleId: doc.id, ...doc.data() };
    return article;
  });
  return allArticles;
}

export default (req, res) => {
  if (req.method === "GET") {
    async function main() {
      const allArticles = await getAllArticles();

      if (allArticles) {
        res.status(200).json({ message: "Ok", allArticles: allArticles });
        return "done";
      } else {
        res.status(404).json({ message: "allArticles not found" });
        return "not found";
      }
    }

    main().then(console.log).catch(console.error);
  }
};
