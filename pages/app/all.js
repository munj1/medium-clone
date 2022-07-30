import { stringify } from "@firebase/util";
import AppNav from "../../components/AppNav";
import Cards from "../../components/Cards";
import { getAllArticles } from "../api/articles";
import { handleUserAuth } from "../../context/AuthContext";

const cardsArr = [];

const All = ({ allArticles }) => {
  const posts = JSON.parse(allArticles);
  return (
    <AppNav>
      <h1 className="pt-10 pl-10 font-extrabold text-lg">All Articles</h1>
      <Cards posts={posts} />
    </AppNav>
  );
};

export default All;

export const getStaticProps = async (ctx) => {
  const allArticles = await getAllArticles();
  console.log("all Articles (from all,js):", allArticles);

  return {
    props: {
      allArticles: JSON.stringify(allArticles),
      //Reason: `object` ("[object Object]") cannot be serialized as JSON. Please only return JSON serializable data types.
    },
    revalidate: 10,
  };
};
