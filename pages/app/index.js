import AppNav from "../../components/AppNav";
import Cards from "../../components/Cards";
import { getFeaturedArticles } from "../api/articles/featured";

const cardsArr = [];

const All = ({ featuredArticles }) => {
  const posts = JSON.parse(featuredArticles);
  return (
    <AppNav>
      <h1 className="pt-10 pl-10 font-extrabold text-lg">Featured Articles</h1>
      <Cards posts={posts} />
    </AppNav>
  );
};

export default All;

export const getStaticProps = async (ctx) => {
  const featuredArticles = await getFeaturedArticles();
  console.log("featured Articles :", featuredArticles);

  return {
    props: {
      featuredArticles: JSON.stringify(featuredArticles),
      //Reason: `object` ("[object Object]") cannot be serialized as JSON. Please only return JSON serializable data types.
    },
    revalidate: 10,
  };
};
