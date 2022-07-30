import { collection, getDocs, setDoc, doc, query } from "firebase/firestore";
import articles, { getAllArticles } from ".";
import { db } from "../../../firebase";

export async function getFeaturedArticles() {
  const allArticles = await getAllArticles();
  const featuredArticles = allArticles.filter((article) => article.isFeatured);
  return featuredArticles;
}

export default (req, res) => {
  if (req.method === "GET") {
    async function main() {
      const featuredArticles = await getFeaturedArticles();

      if (featuredArticles) {
        res
          .status(200)
          .json({ message: "Ok", featuredArticles: featuredArticles });
        return "done";
      } else {
        res.status(404).json({ message: "featuredArticles not found" });
        return "not found";
      }
    }

    main().then(console.log).catch(console.error);
  }
};
