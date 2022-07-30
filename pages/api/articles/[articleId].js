import { collection, getDocs, setDoc, doc, query } from "firebase/firestore";
import articles, { getAllArticles } from ".";
import { db } from "../../../firebase";

export async function getArticleById(articleId) {
  const articles = await getAllArticles();
  // console.log("articles", articles);
  const article = articles.filter((article) => article.articleId === articleId);
  // console.log("article", article[0]);
  return article[0];
}

export default (req, res) => {
  if (req.method === "GET") {
    const articleId = req.query.articleId;
    console.log("articleId", articleId);

    async function main() {
      const articleData = await getArticleById(articleId);

      if (articleData) {
        res.status(200).json({ message: "Ok", articleData: articleData });
        return "done";
      } else {
        res.status(404).json({ message: "articleData not found" });
        return "not found";
      }
    }

    main().then(console.log).catch(console.error);
  }
};
